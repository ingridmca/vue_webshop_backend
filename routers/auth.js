const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    // find a user with this email
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) return res.status(400).send("Incorrect credentials");

    const match = bcrypt.compareSync(password, user.password);
    //const match = password === user.password;

    if (!match) {
      res.status(400).send("Incorrect credentials");
    }
    const token = toJWT({ userId: user.id });
    console.log("token", token);

    // ---------
    const decodedToken = toData(token);
    console.log("decoded token", decodedToken);
    // ---------

    res.send({ message: "Congrats you are logged in!", token });
  } catch (e) {
    next(e);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;

//Have done nothing with the auth middleware!!!
