const bcrypt = require("bcryptjs");
const  User = require("../user/userModel");


exports.hashPass = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};

exports.unHash = async (req, res, next) => {
    try {
      req.user = await User.findOne({ username: req.body.username });
      if ( 
        req.user &&
      (await bcrypt.compare(req.body.password, req.user.password))) 
      {
        next();
        res.status(200).send({message: "Success"});
        
      } else {
        throw new Error("incorrect");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };
  
  