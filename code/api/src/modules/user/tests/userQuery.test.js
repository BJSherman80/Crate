import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema/'

describe('user queries', () => {
  let server = express();
  beforeAll(() => {
    server.use(
      '/',
      graphqlHTTP({
        schema: schema, 
        graphiql: false
      })
    )
  })

  it('can successfully query users names', async (done) => {
    const response = await request(server)
      .post('/') //verb and route of http request
      .send({query: '{users {name} }'}) //body of http request
      .expect(200) //this is part of the request itself

    expect(response.body.data.users.length).toBe(2) //are true expectation
    done(); //closes the database connection
  })

  it('can successfully query all fields from users table', async (done) => {
    const response = await request(server)
    .post('/')
    .send({query: `{user(id: 1) {
                      name
                      email
                      password
                      role
                      createdAt
                      updatedAt
                      profileImage
                      streetAddress
                      city
                      state
                      zip
                      description
                      }
                    }`})
    .expect(200)

    expect(response.body.data.user).toHaveProperty('name')
    expect(response.body.data.user).toHaveProperty('email')
    expect(response.body.data.user).toHaveProperty('password')
    expect(response.body.data.user).toHaveProperty('role')
    expect(response.body.data.user).toHaveProperty('createdAt')
    expect(response.body.data.user).toHaveProperty('updatedAt')
    expect(response.body.data.user).toHaveProperty('profileImage')
    expect(response.body.data.user).toHaveProperty('streetAddress')
    expect(response.body.data.user).toHaveProperty('city')
    expect(response.body.data.user).toHaveProperty('state')
    expect(response.body.data.user).toHaveProperty('zip')
    expect(response.body.data.user).toHaveProperty('description')
    done();
  })
})