import express from "express";
import { converter, handler, notFound } from "./config/error";
const debug = require("debug")("nert:server");
const http = require("http");
import { winstonInstance } from "./config/logger";
import expressWinston from "express-winston";
import { applyMiddleware } from "./utils";
import commonMiddleware from "./middlewares/common";
import errorMiddleware from "./middlewares/errorHandlers";

import apiRouter from "./routes/index";

const app = express();

app.disable("x-powered-by");
app.use(express.json());

// Setup Request logging
expressWinston.responseWhitelist.push("body");
app.use(
  expressWinston.logger({
    winstonInstance,
  }),
);

applyMiddleware(commonMiddleware, app);

app.use("/api", apiRouter);

applyMiddleware(errorMiddleware, app);

const port = process.env.PORT || "3005";

const server = http.createServer(app);
server.listen(port, () => {
  debug("Listening on " + port);
  console.log(`App listening on localhost:${port}`);
});
export default app;
