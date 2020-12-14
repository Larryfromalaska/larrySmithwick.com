"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHelper = void 0;
var ResponseHelper = /** @class */ (function () {
    function ResponseHelper() {
    }
    ResponseHelper.okResponse = function (body) {
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        };
    };
    ResponseHelper.badRequestResponse = function (body) {
        return {
            statusCode: 400,
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        };
    };
    ResponseHelper.unauthorizedResponse = function (body) {
        return {
            statusCode: 403,
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        };
    };
    ResponseHelper.serverErrorResponse = function (body) {
        return {
            statusCode: 500,
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        };
    };
    return ResponseHelper;
}());
exports.ResponseHelper = ResponseHelper;
//# sourceMappingURL=response-helper.js.map