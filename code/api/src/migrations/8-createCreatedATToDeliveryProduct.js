'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('deliveryProducts', 
      'createdAt', {
        type: Sequelize.DATE,
        allowNull: true
      }),
      queryInterface.addColumn('deliveryProducts', 
      'updatedAt', {
        type: Sequelize.DATE,
        allowNull: true
      }),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('deliverProducts', 'createdAt'),
      queryInterface.removeColumn('deliverProducts', 'updatedAt'),
    ]);
  }
};
