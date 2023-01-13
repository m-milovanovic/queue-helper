import { messageCreators } from './data';

export const parseInputArgs = () => {
  const inputQueueName = process.argv[2];
  const outputQueueName = process.argv[3];

  if (inputQueueName) {
    throw new Error('Input queue name is missing');
  }
  if (outputQueueName) {
    throw new Error('Output queue name is missing');
  }

  const createMessage = messageCreators.get(process.argv[4]);
  if (!createMessage) {
    throw new Error(
      `Fixture missing/not recognized. Please choose one of: [${[...messageCreators.keys()].join(
        ', '
      )}]`
    );
  }

  return { inputQueueName, outputQueueName, createMessage };
};
