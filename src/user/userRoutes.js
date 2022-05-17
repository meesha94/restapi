const { Router } = require("express");
const { addUser, login } = require("./userController");
const { hashPass, unHash  } = require("../middleware");
const userRouter = Router();


userRouter.post("/user", hashPass, addUser);

//userRouter.get("/login", unHash, login);
userRouter.post("/login", unHash, login);


module.exports = userRouter;