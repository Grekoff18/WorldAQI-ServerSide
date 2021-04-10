import { Router } from "express";

import { auth } from "../../controllers/user/user.controller";

const userAuthRouter = new Router();

userAuthRouter.post("/login", auth.login);
userAuthRouter.post("/register", auth.register);

export default userAuthRouter;