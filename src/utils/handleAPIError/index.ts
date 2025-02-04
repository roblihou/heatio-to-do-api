import { Response } from "express";
import { HttpStatusCode } from "@constants/http";
import { parseYupError } from "@utils/parseYupErrors";
import { ValidationError } from "yup";

const GENERIC_ERROR_MESSAGE = "API Error";

export const handleAPIError = (
  res: Response,
  err: unknown,
  statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR
) => {
  if (!(err instanceof ValidationError)) {
    console.error(err);
    res.status(statusCode);
    res.send(GENERIC_ERROR_MESSAGE);
    return;
  }

  const errors = parseYupError(err);

  res.status(HttpStatusCode.BAD_REQUEST);
  res.send({
    errors,
  });
};
