const { Router } = require("express");
const { addUser } = require("./userController");
const { hashPass, decryptPass  } = require("../middleware");
const userRouter = Router();


userRouter.post("/user", hashPass, addUser);

userRouter.get("/login", decryptPass);


module.exports = userRouter;