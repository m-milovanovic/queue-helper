import { parseInputArgs } from './args';
import { receiveMessage, sendMessage, deleteMessage, endpoint } from './client';

const main = async () => {
  const { inputQueueName, outputQueueName, createMessage } = parseInputArgs();

  const INPUT_QUEUE_URL = `${endpoint}/queue/${inputQueueName}`;
  const OUTPUT_QUEUE_URL = `${endpoint}/queue/${outputQueueName}`;

  try {
    const response = await receiveMessage({
      QueueUrl: INPUT_QUEUE_URL,
    });

    if (response.Messages?.[0].Body) {
      const body = JSON.parse(response.Messages[0].Body);
      const receiptHandle = response.Messages[0].ReceiptHandle;

      await Promise.all([
        deleteMessage({
          ReceiptHandle: receiptHandle,
          QueueUrl: INPUT_QUEUE_URL,
        }),
        sendMessage({
          MessageBody: JSON.stringify(createMessage(body.meta)),
          QueueUrl: OUTPUT_QUEUE_URL,
        }),
      ]);
    }
  } catch (error) {
    console.log(error);
  }
};

main();
