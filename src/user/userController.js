const User = require("./userModel");



exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
 
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};


exports.login = async (req, res) => {
    try {
       await User.find({user: req.body.username});
      
      res.status(200).send({ message: "success" });
    } catch (error) {
      console.log(error);
      res.status(404).send({ error: "Cannot find user" });
    }
};





