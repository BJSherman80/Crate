// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import DeliveryProductType from '../deliveryProduct/types'
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
    updatedAt: { type: GraphQLString },
    deliveryProducts: {type: new GraphQLList(DeliveryProductType)}
  })
})

export default DeliveryType