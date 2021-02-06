// Question: Not sure what this is doing
'use strict'

// User Model here defines table columns and types

// class User < ApplicationRecord
module.exports = function(sequelize, DataTypes) { 
  let User =
    sequelize.define('users',
    {
      name: { type: DataTypes.STRING },
      email: { type: DataTypes.TEXT },
      password: { type: DataTypes.TEXT },
      role: { type: DataTypes.TEXT },
      profileImage: { type: DataTypes.STRING },
      streetAddress: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      state: { type: DataTypes.STRING },
      zip: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING }
    })

  // Adds association to subscriptions table
  User.associate = function(models) { User.hasMany(models.Subscription) }

  return User
}
