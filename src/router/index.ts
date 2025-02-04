import deleteTasks from "@controllers/tasks/delete";
import getTasks from "@controllers/tasks/get";
import deleteTask from "@controllers/tasks/item/delete";
import putTask from "@controllers/tasks/item/put";
import postTasks from "@controllers/tasks/post";
import express from "express";

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", postTasks);
router.put("/tasks/:id", putTask);
router.delete("/tasks", deleteTasks);
router.delete("/tasks/:id", deleteTask);

export default router;
