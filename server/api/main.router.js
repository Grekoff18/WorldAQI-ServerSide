import { Router } from "express";

import userAuthRouter from "./user/auth.router";

const userRouters = new Router();

userRouters.use("api/user/auth", userAuthRouter);

export {
  userRouters
}
