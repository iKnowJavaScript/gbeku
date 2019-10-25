import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import logger from "morgan";
import methodOverride from "method-override";
import helmet from "helmet";

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

export default [
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
  handleHelmet,
  handleLogger,
  handleOveride,
];
