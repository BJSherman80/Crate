// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import SubscriptionType from '../subscription/types'

// Delivery type
const DeliveryType = new GraphQLObjectType({
  name: 'delivery',
  description: 'Delivery Type',

  fields: () => ({
    id: { type: GraphQLInt },
    subscription: { type: SubscriptionType },
    deliveryDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SubscriptionType