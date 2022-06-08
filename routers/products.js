const { Router } = require("express");
const Category = require("../models").category;
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category });
    res.send(products);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const oneProduct = await Product.findByPk(productId, { include: Category });

    if (!oneProduct) {
      return res.status(404).send("User not found");
    }

    res.send(oneProduct);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
