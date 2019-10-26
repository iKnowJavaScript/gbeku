import sampleController from "../controllers/sample.controller";

import { Router, Request, Response } from "express";
const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await sampleController.getUser(Number(id));

  if (!user) {
    return res.status(400).send({
      success: "false",
      message: "user not available",
      payload: null,
    });
  }

  return res.status(201).send({
    success: "true",
    message: "user retrieved successfully",
    payload: user,
  });
});

export default router;
