//need model, mutations, query, resolvers, types.js
//for deliveries table and for deliveryproducts table
//model.js: creates the model associated with the postgres table.  And define any relations to other tables in database.
//mutations.js: define graphQL requirements to edit records in database table (create, update, delete)
//query.js: define graphQL requirements to retrieve records in database table (create, update, delete)
  //for deliveries - be able to request soonest delivery date (next scheduled delivery date, closest to current date)
  //for deliveryProducts - be able to request unique list of 'non-returned' products

//resolvers.js: what to do when mutation or query should do after request is successful/unsuccessful
//types.js: define the structure of what a single record of delivery/deliveryProduct should contain in a GraphQL return.
