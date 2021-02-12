// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { ProductType, ProductTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// Products All
// query that grabs all products, points to getall resolver
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// Product By slug
// query that grabs all products with an argument of slug, points to getbyslug resolver
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
// query that grabs product with an argument of id, points to getbyid resolver
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
// query that grabs all productswith an argument of id, points to getrelated resolver
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
// query that grabs all products , points to gettypes resolver
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}
