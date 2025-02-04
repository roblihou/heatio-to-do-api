import express from "express";

const router = express.Router();

router.get("/tasks", () => {
  console.log("GET /tasks");
});

export default router;
