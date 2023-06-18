
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import LogstreamService from '../../shared/service/logstream-service'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { from, to } = JSON.parse(event.body)

  const logstreamService = new LogstreamService()
  const todo = await logstreamService.createLogEntry(from, to)

  return {
    statusCode: 201,
    body: JSON.stringify({
      item: todo
    })
  };
}