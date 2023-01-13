A helper application that acts as a middle-man between two SQS/ElasticMQ queues. 
How it works:
- Reads the data from the input queue
- Constructs an object based on the input and the selected fixture
- Sends the created object to the output queue

Requirements:
- [Node.js v16+](https://nodejs.org/en/)


How to install:
```bash
npm install
```

How to run:
```bash
npm start input-queue-name output-queue-name fixture-name
```