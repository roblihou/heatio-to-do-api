// https://swagger.io/specification/#:~:text=v3.patch-,HTTP%20Status%20Codes,-The%20HTTP%20Status
// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}
