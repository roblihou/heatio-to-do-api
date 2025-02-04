import { Request, Response } from "express";
import { handleAPIError } from "@utils/handleAPIError";
import Store from "@services/Store";
import schema from "./schema";
import { HttpStatusCode } from "@constants/http";

const putTask = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      body: { title, completed },
    } = await schema.validateSync(req, {
      stripUnknown: true,
      abortEarly: false,
    });

    const updatedTask = Store.updateTask({
      id,
      title,
      completed,
    });

    res.status(HttpStatusCode.OK).send({
      data: updatedTask,
    });
  } catch (error) {
    handleAPIError(res, error);
  }
};

export default putTask;
