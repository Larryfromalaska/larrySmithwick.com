import { APIGatewayProxyHandler } from "aws-lambda";
import { ResponseHelper } from "../helpers/response-helper";

export const hello: APIGatewayProxyHandler = async (event, context) => {
    return ResponseHelper.okResponse('Hello!');
}