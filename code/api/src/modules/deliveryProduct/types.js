// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean } from 'graphql'
// App Imports
import { ProductType } from '../product/types'

// Delivery type
const DeliveryProductType = new GraphQLObjectType({
  name: 'deliveryProduct',
  description: 'Delivery Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    deliveryId: { type: GraphQLString },
    productId: { type: GraphQLString },
    wasReturned: { type: GraphQLBoolean},
    product: { type: ProductType}
  })
})

export default DeliveryProductType