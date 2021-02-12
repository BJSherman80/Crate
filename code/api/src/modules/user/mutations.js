// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, update, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Update
export const userUpdate = {
  type: UserType,
  args: {
    
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    },

    profileImage: {
      name: 'profileImage',
      type: GraphQLString
    },

    streetAddress: {
      name: 'streetAddress',
      type: GraphQLString
    },
    city: {
      name: 'city',
      type: GraphQLString
    },
    state: {
      name: 'state',
      type: GraphQLString
    },
    zip: {
      name: 'zip',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}