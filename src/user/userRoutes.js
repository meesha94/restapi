const { Router } = require("express");
const { addUser, login } = require("./userController");
const { hashPass, decryptPass  } = require("../middleware");
const userRouter = Router();


userRouter.post("/user", hashPass, addUser);

userRouter.get("/login", decryptPass, login);


module.exports = userRouter;