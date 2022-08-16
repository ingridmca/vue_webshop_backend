"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reviews",

      [
        {
          name: "Leo Messi",
          rating: 3,
          comment: "test",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Leo Messi",
          rating: 5,
          comment: "test",
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Leo Messii",
          rating: 4,
          comment: "test",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
