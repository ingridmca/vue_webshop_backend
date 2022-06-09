const { Router } = require("express");
const Review = require("../models").review;
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res) => {
    try {
        const reviews = await Review.findAll({ include: Product });
        res.send(reviews);
    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;