'use strict'

module.exports = function(sequelize, DataTypes) {
  // look into sequelize documentation for Models
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  // Association(s) defined here
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate // Returns single Crate object? 
} // How does one return multiple Crates?
