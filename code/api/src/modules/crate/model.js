'use strict'

module.exports = function(sequelize, DataTypes) {
  // explore more about sequelize in its documentation
  // where the crate model is define and exported
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  // Associations are  defined here
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}