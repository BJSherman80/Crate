describe('the truth', () => {
  it('returns true', () => {
    expect(true).toBe(true)
  })
})

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
})