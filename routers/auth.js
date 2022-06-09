const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // find a user with this email
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) return res.status(400).send("Incorrect credentials");

    const match = bcrypt.compareSync(password, user.password);

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

module.exports = router;
