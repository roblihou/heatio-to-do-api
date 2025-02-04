import getTasks from "@controllers/tasks/get";
import putTask from "@controllers/tasks/item/put/inex";
import postTasks from "@controllers/tasks/post";
import express from "express";

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", postTasks);
router.put("/tasks/:id", putTask);

export default router;
