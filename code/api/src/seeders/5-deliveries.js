'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('deliveries', [
      {
        subscriptionId: 1,
        deliveryDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subscriptionId: 2,
        deliveryDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('deliveries', null, {});
  }
}