import { Router } from "express";
import sampleRoute from "./sample.route";

const router = Router();

/** GET /health-check - Check service health */
router.get("/health-check", (_req, res) => res.send("OK"));

//mount sample route
router.use("/sample", sampleRoute);

export default router;
