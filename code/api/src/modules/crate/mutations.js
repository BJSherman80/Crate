// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CrateType from './types'
import { create, remove, update } from './resolvers'

// Crate create
// Making a mutation that accepts a name and a description, points to create resolver
export const crateCreate = {
  type: CrateType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Crate update
// Making a mutation that accepts a name, a id, and a description, points to update resolver
export const crateUpdate = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Crate remove
// Making a mutation that accepts a id, points to remove resolver
export const crateRemove = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}