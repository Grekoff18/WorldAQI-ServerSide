import { Router } from "express";
import userAuthRouter from "./user/auth.router";

const userRouters = new Router();

userRouters.get("/api/user/", userAuthRouter);

export default userRouters

