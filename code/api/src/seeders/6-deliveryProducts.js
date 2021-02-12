'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('deliveryProducts', [
      {
        deliveryId: 1,
        productId: 1,
      },
      {
        productId: 2,
        deliveryId: 2,
        wasReturned: true
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('deliveryProducts', null, {});
  }
}