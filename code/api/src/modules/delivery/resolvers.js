// App Imports
import models from '../../setup/models'

// Get Delivery by ID
export async function get(parentValue, { id }) {
  return await models.Delivery.findOne({
    where: { id },
    include: [
      { model: models.Subscription, as: 'subscription' },
    ]
  })
}

// update delivery date 
export async function update(parentValue, { id, deliveryDate }, { auth }) {
  if(auth.user) {
    return await models.Delivery.update( 
      {
        deliveryDate
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation denied.')
  }
}




// // Get Delivery by user
// export async function getByUser(parentValue, {}, { auth }) {
//   if(auth.user && auth.user.id > 0) {
//     return await models.Delivery.findAll({
//       where: {
//         userId: auth.user.id
//       },
//       include: [
//         {model: models.User, as: 'user'},
//         {model: models.Crate, as: 'crate'},
//       ]
//     })
//   } else {
//     throw new Error('Please login to view your deliveries.')
//   }
// }

// // Get all Deliverys
// export async function getAll() {
//   return await models.Delivery.findAll({
//     include: [
//       { model: models.User, as: 'user' },
//       { model: models.Crate, as: 'crate' },
//     ]
//   })
// }

// // Create Delivery
// export async function create(parentValue, { crateId }, { auth }) {
//   if(auth.user && auth.user.id > 0) {
//     return await models.Delivery.create({
//       crateId,
//       userId: auth.user.id
//     })
//   } else {
//     throw new Error('Please login to subscribe to this crate.')
//   }
// }

// // Delete Delivery
// export async function remove(parentValue, { id }, { auth }) {
//   if(auth.user && auth.user.id > 0) {
//     return await models.Delivery.destroy({where: {id, userId: auth.user.id}})
//   } else {
//     throw new Error('Access denied.')
//   }
// }