const { SQS } = require("aws-sdk");

const sqs = new SQS();

const producer = async (event) => {
  let statusCode = 200;
  let message;

  const messageBody = {
    message: 'Hello, world!',
  };

  try {
    await sqs
      .sendMessage({
        QueueUrl: process.env.QUEUE_URL,
        MessageBody: JSON.stringify(messageBody),
        MessageAttributes: {
          AttributeName: {
            StringValue: "Attribute Value",
            DataType: "String",
          },
        },
      })
      .promise();

    message = "Message accepted!";
  } catch (error) {
    console.log(error);
    message = error;
    statusCode = 500;
  }

  console.log('Message', message);

  return {
    statusCode,
    body: JSON.stringify({
      message,
    }),
  };
};

module.exports = {
  producer,
};
