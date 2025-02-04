import getTasks from "@controllers/tasks/get";
import express from "express";

const router = express.Router();

router.get("/tasks", getTasks);

export default router;
