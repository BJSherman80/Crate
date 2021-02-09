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

  it('can successfully query all fields from deliveries table', async (done) => {
    const response = await request(server)
    .post('/')
    .send({query: `{delivery(id: 1) {
                      subscriptionId
                      deliveryDate
                      createdAt
                      updatedAt
                      }
                    }`})
    .expect(200)

    expect(response.body.data.user).toHaveProperty('subscriptionId')
    expect(response.body.data.user).toHaveProperty('deliveryDate')
    expect(response.body.data.user).toHaveProperty('createdAt')
    expect(response.body.data.user).toHaveProperty('updatedAt')
    done();
  })
})