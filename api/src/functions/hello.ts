import type { APIGatewayProxyEvent } from 'aws-lambda'

const buildResponse = (body: unknown, statusCode: number) => ({
  body: JSON.stringify(body),
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': process.env.WEB_BASE_URL,
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'baggage, sentry-trace',
    'Content-Type': 'application/json',
  },
})

export const handler = async (event: APIGatewayProxyEvent) => {
  return buildResponse('Hello from Lambda!', 200)
}
