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
    
    /*
     * created using:
     *    node_modules/.bin/sequelize migration:create --name=testMigrationCreation
     *  Add altering commands here.
     * Return a promise to correctly handle asynchronicity.
     * 
     * Example:
     * return queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
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
