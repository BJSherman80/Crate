// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get crate by ID
// Grabs crate id as an agrument, returns crate if exists or returns error if it dosn't
export async function getById(parentValue, { crateId }) {
  const crate = await models.Crate.findOne({ where: { id: crateId } })

  if (!crate) {
    // Crate does not exists
    throw new Error('The crate you are looking for does not exists or has been discontinued.')
  } else {
    return crate
  }
}

// Get all crates
// Grabs order as an agrument, returns all crates
export async function getAll(parentValue, { orderBy }) {
  return await models.Crate.findAll({ order: [['id', orderBy]] })
}

// Create crate
// Grabs name and description as an agrument, returns crate once it has been created or an error if it could not create ir
export async function create(parentValue, { name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.create({
      name,
      description
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update crate
// Grabs id, name, and description as an agrument, returns crate if it updated or an error if it did not
export async function update(parentValue, { id, name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.update(
      {
        name,
        description
      },
      {where: {id}}
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete crate
// Grabs crate id as an agrument, deletes crate if successfull or returns error if it did not work
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}
