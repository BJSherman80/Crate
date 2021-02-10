import models from '../../../setup/models';

describe('user model', () => {
  it('can successfully query users names', async (done) => {
    const jane = await models.User.create({ 
      name: 'jane', 
      email: 'jane@email.com',
      password: 'hash',
      role: 'USER',
      profileImage: 'file_path.jpg',
      streetAddress: "234 South st",
      city: "denver",
      state: "CO",
      zip: '80113',
      description: 'buyer of many crates'
      })

    expect(jane).toBeInstanceOf(models.User)
    expect(jane.name).toBe('jane')
    expect(jane.email).toBe('jane@email.com')
    expect(jane.password).toBe('hash')
    expect(jane.role).toBe('USER')
    expect(jane.profileImage).toBe('file_path.jpg')
    expect(jane.streetAddress).toBe('234 South st')
    expect(jane.city).toBe('denver')
    expect(jane.state).toBe('CO')
    expect(jane.zip).toBe('80113')
    expect(jane.description).toBe('buyer of many crates')
    
    jane.destroy()
    done(); //closes the database connection
  })
})