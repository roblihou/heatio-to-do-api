import { Request, Response } from "express";
import { handleAPIError } from "@utils/handleAPIError";
import Store from "@services/Store";
import schema from "./schema";
import { HttpStatusCode } from "@constants/http";

const postTasks = async (req: Request, res: Response) => {
  try {
    const { body: task } = await schema.validateSync(req);

    const createdTask = Store.createTask(task);

    res.status(HttpStatusCode.CREATED).send({
      data: createdTask,
    });
  } catch (error) {
    handleAPIError(res, error);
  }
};

export default postTasks;
