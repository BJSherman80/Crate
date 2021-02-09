'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 
      'profileImage', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.addColumn('users', 
      'streetAddress', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.addColumn('users', 
      'city', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.addColumn('users', 
      'state', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.addColumn('users', 
      'zip', {
        type: Sequelize.STRING,
        allowNull: true
      }),
      queryInterface.addColumn('users', 
      'description', {
        type: Sequelize.STRING,
        allowNull: true
      }),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'profileImage'),
      queryInterface.removeColumn('users', 'streetAddress'),
      queryInterface.removeColumn('users', 'city'),
      queryInterface.removeColumn('users', 'state'),
      queryInterface.removeColumn('users', 'zip'),
      queryInterface.removeColumn('users', 'description')
    ]);
  }
};
