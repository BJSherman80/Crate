// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('deliveryProducts', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       deliveryId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'deliveries',
//           key: 'id'
//         },
//         allowNull: false
//       },
//       productsId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'products',
//           key: 'id'
//         },
//         allowNull: false
//       },
//       returned: {
//         allowNull: false,
//         type: Sequelize.BOOLEAN
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('deliveryProducts');
//   }
// }