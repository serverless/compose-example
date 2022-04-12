# Serverless Compose Beta example

This example demonstrates how [Serverless Compose Beta](https://www.npmjs.com/package/@serverless/compose) can be used for orchestrating deployments of multiple [Serverless Framework](https://www.serverless.com/framework) services. In this case, there are 3 separate services:
- `resources`, which provisions SQS queues;
- `producer`, which provisions a Lambda function that publishes messages to SQS queue;
- `consumer`, which consumes the messages from a SQS queue;

For more details about Serverless Compose, please refer to [documentation](https://www.npmjs.com/package/@serverless/compose).

## Usage

In order to try it out, make sure you have `serverless-compose` tool installed:

```
npm i -g @serverless/compose
```


In order to deploy service, run the following command in service directory:

```
serverless-compose deploy
```

In order to remove service, run the following command in service directory:

```
serverless-compose remove
```

In order to retrieve service outputs, run the following command in service directory:

```
serverless-compose info
```

In order to retrieve logs from services, run the following command in service directory:

```
serverless-compose logs
```





