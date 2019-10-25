import { Router } from "express";
import { converter, handler, notFound } from "../config/error";

const convertError = (router: Router) => {
  // if error is not an instanceOf APIError, convert it.
  router.use(converter);
};

const handleNotFoundError = (router: Router) => {
  // catch 404 and forward to error handler
  router.use(notFound);
};

const handleDevError = (router: Router) => {
  // error handler, send stacktrace only during development
  router.use(handler);
};

export default [convertError, handleDevError, handleNotFoundError];
