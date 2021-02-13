// Imports
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql'

// App Imports
import DeliveryType from './types'
import { create, remove, update } from './resolvers'

// Delivery create
export const deliveryCreate = {
  type: DeliveryType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Delivery remove
export const deliveryRemove = {
  type: DeliveryType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Update Delivery Date 
export const deliveryUpdate = {
  type: DeliveryType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    deliveryDate: {
      name: 'deliveryDate',
      type: GraphQLString
    }
  },
  resolve: update
}