import { ValidationError } from "yup";

interface ParsedError {
  path?: string;
  type?: string;
  message: string;
}

export const parseYupError = (err: ValidationError): ParsedError[] => {
  const isSingleError = err.inner.length === 0 && err.path && err.message;

  if (isSingleError) {
    return [
      {
        path: err.path,
        type: err.type,
        message: err.message,
      },
    ];
  }

  return err.inner.map(({ path, type, message }) => {
    return { path, type, message };
  });
};
