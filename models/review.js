'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {

    static associate(models) {
      review.belongsTo(models.product, { foreignKey: "productId" })
    }
  }
  review.init({
    name: DataTypes.STRING,
    rating: { type: DataTypes.INTEGER, allowNull: false },
    comment: { type: DataTypes.TEXT, allowNull: false }
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};