"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        static associate(models) {
            product.belongsTo(models.category, {foreignKey: "categoryId"});
            product.hasMany(models.review, {foreignKey: "productId"})
        }
    }

    product.init(
        {
            title: {type: DataTypes.STRING, allowNull: false},
            price: {type: DataTypes.FLOAT, allowNull: false},
            description: DataTypes.TEXT,
            rating: DataTypes.FLOAT,
            mainImage: {type: DataTypes.TEXT, allowNull: false},
        },
        {
            sequelize,
            modelName: "product",
        }
    );
    return product;
};
