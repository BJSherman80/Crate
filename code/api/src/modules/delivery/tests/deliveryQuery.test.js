import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema/'
import models from '../../../setup/models';

describe('delivery queries', () => {
  let server = express();
  let testDelivery;
  let testId
  beforeAll( async() => {
    testDelivery = await models.Delivery.create({
      subscriptionId: 1,
      deliveryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    })
    testId = testDelivery.id;
    
    const testUser = await models.User.findOne({ where: {id: 1} })
    
    server.use(
      '/',
      graphqlHTTP({
        schema,
        graphiql: false,
        context: {
            auth: {
                user: testUser,
                isAuthenticated: testUser && testUser.id > 0
            }
        }
    })
    );

  })
  afterAll(() => {
    models.Delivery.destroy({
      where: {
        id: testId
      }
    });
  })

  it('can successfully query all fields from deliveries table', async (done) => {
    const response = await request(server)
    .post('/')
    .send({query: `{
      delivery(id:1){
        deliveryDate
        createdAt
        updatedAt
      }
    }`})
    .expect(200)
    

    expect(response.body.data.delivery).toHaveProperty('deliveryDate')
    expect(response.body.data.delivery).toHaveProperty('createdAt')
    expect(response.body.data.delivery).toHaveProperty('updatedAt')
    done();
  })

  it ('can successfully update a delivery date', async (done) => {
    const response = await request(server)
    .post('/')
    .send({query: `mutation {
      deliveryUpdate(id:${testId}, deliveryDate: "12/17/2022"){
        deliveryDate
        createdAt
        updatedAt
      }
    }`})
    .expect(200)
    expect(response.body.data.deliveryUpdate).toHaveProperty('deliveryDate');
    expect(response.body.data.deliveryUpdate.deliveryDate).toBe('1671260400000');
    done();
  })
})