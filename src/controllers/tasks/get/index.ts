import { Request, Response } from "express";
import { handleAPIError } from "@utils/handleAPIError";
import Store from "@services/Store";
import { HttpStatusCode } from "@constants/http";

const getTasks = async (req: Request, res: Response) => {
  try {
    const { tasks } = Store;

    res.status(HttpStatusCode.OK).send({
      data: tasks,
    });
  } catch (error) {
    handleAPIError(res, error);
  }
};

export default getTasks;
