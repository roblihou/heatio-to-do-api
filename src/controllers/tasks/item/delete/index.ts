import { Request, Response } from "express";
import { handleAPIError } from "@utils/handleAPIError";
import Store from "@services/Store";
import schema from "./schema";
import { HttpStatusCode } from "@constants/http";

const deleteTask = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = await schema.validateSync(req, {
      stripUnknown: true,
      abortEarly: false,
    });

    Store.deleteTask({
      id,
    });

    res.status(HttpStatusCode.NO_CONTENT).send();
  } catch (error) {
    handleAPIError(res, error);
  }
};

export default deleteTask;
