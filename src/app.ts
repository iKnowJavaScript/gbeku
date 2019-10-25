import express from "express";
import http from "http";
import { applyMiddleware } from "./utils";
import commonMiddleware from "./middlewares/common";
import errorMiddleware from "./middlewares/errorHandlers";
import { handleAPIDocs } from "./middlewares/apiDocs";
import apiRouter from "./routes/index";
const debug = require("debug")("nert:server");
require("../env");

const app = express();

app.disable("x-powered-by");
app.use(express.json());

applyMiddleware([...commonMiddleware, handleAPIDocs], app);

app.use("/api", apiRouter);

applyMiddleware(errorMiddleware, app);

const port = process.env.PORT || "3005";

const server = http.createServer(app);

if (process.env.NODE_ENV !== "test") {
  server.listen(port, () => {
    debug("Listening on " + port);
    console.log(`App listening on localhost:${port}`);
  });
}

export default app;
