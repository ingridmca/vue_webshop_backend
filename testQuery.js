const Category = require("./models").category;
const Product = require("./models").product;
const Review =require("./models").review;

const categoriesWithProducts = async () => {
  try {
    const allProducts = await Review.findAll({ include: Product });
    return allProducts;
  } catch (error) {
    console.log(error.message);
  }
};

categoriesWithProducts().then((products) => console.log(products));
