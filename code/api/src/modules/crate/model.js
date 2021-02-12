'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
// This is like a model in ruby. I beleive the sequalize is making objects and we are defining state here.
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}