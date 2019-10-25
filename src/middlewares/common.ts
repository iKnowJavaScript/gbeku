import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import logger from "morgan";
import methodOverride from "method-override";
import helmet from "helmet";
import expressWinston from "express-winston";
import { winstonInstance } from "../config/logger";
require("../../env");

const env = process.env.NODE_ENV;

const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

const handleCompression = (router: Router) => {
  router.use(compression());
};

// Setup Request logging
const handleLogger = (router: Router) => {
  router.use(logger("dev"));
};

const handleHelmet = (router: Router) => {
  router.use(helmet());
};

const handleOveride = (router: Router) => {
  router.use(methodOverride());
};

const apiLogger = (router: Router) => {
  // enable detailed API logging in dev env
  //comment this code to reduce api logs
  if (env === "development") {
    router.use(logger("dev"));
    expressWinston.responseWhitelist.push("body");
    router.use(
      expressWinston.logger({
        winstonInstance,
        meta: true, // optional: log meta data about request (defaults to true)
        msg:
          "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
      }),
    );
  }
  return;
};

export default [
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
  handleHelmet,
  handleLogger,
  handleOveride,
];
