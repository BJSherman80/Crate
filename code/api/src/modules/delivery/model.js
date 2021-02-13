'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Delivery = sequelize.define('deliveries', {
    subscriptionId: {
      type: DataTypes.INTEGER
    },
    deliveryDate: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    createdAt: {
      type: DataTypes.DATE
    }
  })

  Delivery.associate = function(models) {
    Delivery.belongsTo(models.Subscription)
    Delivery.hasMany(models.DeliveryProduct)
  }

  return Delivery
}