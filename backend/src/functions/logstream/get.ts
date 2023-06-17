import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import LogstreamService from '../../shared/service/logstream-service'

export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const logstreamService = new LogstreamService()
  const items = await logstreamService.getAllTodos();

  return {
    statusCode: 201,
    body: JSON.stringify({
      items
    })
  };
}