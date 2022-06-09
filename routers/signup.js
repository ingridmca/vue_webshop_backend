const { Router } = require("express");
const User = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    // email, name, password
    const { name, email, password } = req.body;
    console.log({ name, email, password });

    if (!email || !password) {
      return res.status(400).send("Missing information");
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.send(user);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
