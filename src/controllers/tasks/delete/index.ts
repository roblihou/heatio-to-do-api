import { Request, Response } from "express";
import { handleAPIError } from "@utils/handleAPIError";
import Store from "@services/Store";
import { HttpStatusCode } from "@constants/http";

const deleteTasks = async (req: Request, res: Response) => {
  try {
    Store.deleteTasks();
    res.status(HttpStatusCode.NO_CONTENT).send();
  } catch (error) {
    handleAPIError(res, error);
  }
};

export default deleteTasks;
