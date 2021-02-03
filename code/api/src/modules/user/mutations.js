// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
// will also need to update this post db changes
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString // .TEXT in model; GraphQLString here
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

/* Need to add mutation here to update user
*  must update required files:
*     modules/users/resolvers.js
*     modules/users/model.js (for additional data)
*     modules/user/types.js
*     api/src/setup/schema/mutations.js ?
*  export const updateUser = {
*   type: UserType,
*   args: {
*     name: {
*       name: 'name',
*       type: GraphQLString
*     },
* 
*     email: {
*       name: 'email',
*       type: GraphQLString
*     },
*     ...etc
* 
*     resolve: update
* }
*/

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
