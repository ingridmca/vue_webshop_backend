const {Router} = require("express");
const Review = require("../models").review;
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res) => {
    try {
        const reviews = await Review.findAll({include: Product});
        res.send(reviews);
    } catch (e) {
        console.log(e.message);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const {name, rating, comment, productId} = req.body;
        console.log({name, rating, comment, productId});
        const newReview = await Review.create({
            name: name,
            rating: rating,
            comment: comment,
            productId: productId
        },);
        res.send(newReview);
    } catch (e) {
        next(e);
    }
});

module.exports = router;