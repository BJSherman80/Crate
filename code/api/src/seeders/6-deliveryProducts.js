"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "deliveryProducts",
      [
        {
          deliveryId: 3,
          productId: 1,
          wasReturned: false,
        },
        {
          productId: 2,
          deliveryId: 4,
          wasReturned: true,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("deliveryProducts", null, {});
  },
};
