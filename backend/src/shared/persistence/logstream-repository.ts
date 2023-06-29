import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { LogstreamEntry } from '../models/logstream-entry';

export default class LogstreamRepository {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly table = process.env.LOG_TABLE,
  ) {}

  async getAllLogs(): Promise<LogstreamEntry[]> {
    const result = await this.docClient
      .scan({
        TableName: this.table,
      })
      .promise();

    return result.Items as LogstreamEntry[];
  }

  async createLog(entry: LogstreamEntry): Promise<LogstreamEntry> {
    await this.docClient
      .put({
        TableName: this.table,
        Item: entry,
      })
      .promise();

    return entry;
  }
}

function createDynamoDBClient() {
  if (process.env.IS_OFFLINE) {
    return new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000',
    });
  }

  return new AWS.DynamoDB.DocumentClient();
}
