import { Router } from "express";
// import { auth } from "@controllers/user/user.controller";

const authRouter = new Router();

function login (req, res) {
  res.send("Hello from login");
}
function register (req, res) {
  res.send("Hello from register");
}

authRouter.post("/login", login);
authRouter.post("/register", register);

module.exports = authRouter;