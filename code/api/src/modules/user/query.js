// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
export const users = {
  type: new GraphQLList(UserType), // returns new list of UserType objects
  resolve: getAll //users getAll method to get all users
}

// By ID
export const user = { // exported as const variable
  type: UserType, //single object defined in src/modules/users/types
  args: { // arguments required for query specified here
    id: { type: GraphQLInt } // GraphQLInt imported from 'graphql'
  },
  resolve: getById // function defined in resolvers.js
}

// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email', // different syntax than above; name of arg required
      type: GraphQLString // when multiple args are included?
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
