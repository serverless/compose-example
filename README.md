# Components v4 beta example

This example demonstrates how [Components V4 Beta](https://www.npmjs.com/package/@serverless/components-v4-beta) can be used for orchestrating deployments of multiple [Serverless Framework](https://www.serverless.com/framework) services. In this case, there are 3 separate services:
- `resources`, which provisions SQS queues;
- `producer`, which provisions a Lambda function that publishes messages to SQS queue;
- `consumer`, which consumes the messages from a SQS queue;

For more details about Components V4 Beta, please refer to [documentation](https://www.npmjs.com/package/@serverless/components-v4-beta).

## Usage

In order to try it out, make sure you have `components-v4` tool installed:

```
npm i -g @serverless/components-v4-beta
```


In order to deploy service, run the following command in service directory:

```
components-v4 deploy
```

In order to remove service, run the following command in service directory:

```
components-v4 remove
```

In order to retrieve service outputs, run the following command in service directory:

```
components-v4 info
```

In order to retrieve logs from services, run the following command in service directory:

```
components-v4 logs
```





