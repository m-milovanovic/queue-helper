import {
  SQSClient,
  SendMessageCommand,
  SendMessageCommandInput,
  ReceiveMessageCommand,
  ReceiveMessageCommandInput,
  DeleteMessageCommand,
  DeleteMessageCommandInput,
} from '@aws-sdk/client-sqs';

export const endpoint = 'http://localhost:9324';

const client = new SQSClient({
  region: 'elasticmq',
  endpoint,
  credentials: {
    secretAccessKey: 'x',
    accessKeyId: 'x',
  },
  apiVersion: '2012-11-05',
});

export const receiveMessage = (params: ReceiveMessageCommandInput) =>
  client.send(new ReceiveMessageCommand(params));

export const deleteMessage = (params: DeleteMessageCommandInput) =>
  client.send(new DeleteMessageCommand(params));

export const sendMessage = (params: SendMessageCommandInput) =>
  client.send(new SendMessageCommand(params));
