const bcrypt = require("bcryptjs");
const  User = require("../user/userModel");


exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};

exports.decryptPass = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (await bcrypt.compare(req.body.pass, user.pass)) {
        next();
        res.status(200).send({message: "Success"});
        
      } else {
        console.log("incorrect");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };
  
  