## Backend

Backed was implemented using AWS Serverless framework. Resources are described in `serverless.yml` file.

### How to run it

To run this project, you need `Serverless` on your computer. Then you can install dependencies using:

```
npm i
```

And start APIs using:

```
npm run start
```

This command starts local DynamoDB where you can store frontend logs. There are 2 Lambda functions: one stores records and "calculates" emissions (generates a random number); the second allows you to get all records from DynamoDB. There is an API Gateway connected to those Lambdas, which is also started locally, that allows you to call these Lambdas in local environment.

- POST | http://localhost:3003/dev/emissions
- GET  | http://localhost:3003/dev/emissions