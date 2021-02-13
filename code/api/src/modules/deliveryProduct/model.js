'use strict'

// deliveryProduct
module.exports = function(sequelize, DataTypes) {
  let DeliveryProduct = sequelize.define('deliveryProducts', {
    deliveryId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    wasReturned: {
      type: DataTypes.BOOLEAN
    },
      timestamps: false
  })

  DeliveryProduct.associate = function(models) {
    DeliveryProduct.belongsTo(models.Delivery)
    DeliveryProduct.belongsTo(models.Product)
  }

  return DeliveryProduct
}