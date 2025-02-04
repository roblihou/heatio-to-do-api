import { Request, Response } from "express";
import { handleAPIError } from "@utils/handleAPIError";
import Store from "@services/Store";
import { HttpStatusCode } from "@constants/http";
import sleep from "@utils/sleep";

const getTasks = async (req: Request, res: Response) => {
  await sleep(1000); // Simulate a slow API response
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
