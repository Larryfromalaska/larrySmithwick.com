import { APIGatewayProxyResult } from "aws-lambda";

export class ResponseHelper {

    static okResponse(body: any): APIGatewayProxyResult {
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        }
    }

    static badRequestResponse(body: any): APIGatewayProxyResult {
        return {
            statusCode: 400,
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        }
    }



    static unauthorizedResponse(body: any): APIGatewayProxyResult {
        return {
            statusCode: 403,
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        }
    }

    static serverErrorResponse(body: any): APIGatewayProxyResult {
        return {
            statusCode: 500,
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        }
    }
}
