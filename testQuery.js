const Category = require("./models").category;
const Product = require("./models").product;

const categoriesWithProducts = async () => {
  try {
    const allProducts = await Product.findAll({ include: Category });
    return allProducts;
  } catch (error) {
    console.log(error.message);
  }
};

categoriesWithProducts().then((products) => console.log(products));
