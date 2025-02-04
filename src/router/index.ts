import getTasks from "@controllers/tasks/get";
import postTasks from "@controllers/tasks/post";
import express from "express";

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", postTasks);

export default router;
