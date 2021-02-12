// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import DeliveryType from './types'
// import { getAll, getByUser, get } from './resolvers'
import { get } from './resolvers'

// commented all below out
// // Subscriptions All
// export const subscriptions = {
//   type: new GraphQLList(SubscriptionType),
//   resolve: getAll
// }

// // Subscriptions by user
// export const subscriptionsByUser = {
//   type: new GraphQLList(SubscriptionType),
//   resolve: getByUser
// }

// Delivery By id
export const delivery = {
  type: DeliveryType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}