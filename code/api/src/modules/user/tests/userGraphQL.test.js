import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import models from '../../../setup/models';


describe('user queries', () => {
  let server = express();
  let jane;
  beforeAll(() => {
    server.use(
      '/',
      graphqlHTTP({
        schema: schema, 
        graphiql: false
      })
    )
    jane = models.User.create({ 
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
      });
  })
  afterAll(() => {
    console.log("I'm hitting this afterAll");
    models.User.destroy({
      where: {
        name: 'jane'
      }
    });
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

  // it('can successfully change a user details', async (done) => {
    
    
  //   const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlRoZSBVc2VyIiwiZW1haWwiOiJ1c2VyQGNyYXRlLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjEyOTI1NzQyfQ.T86nnQtFCsu0_MOhM23EAFcz7xhCecVTEnBysUiB6Wg"
  //   const response = await request(server)
  //     .post('/') //verb and route of http request
  //     .set('Authorization', `Bearer ${userToken}`)
  //     .send({mutation: `{userUpdate(id: ${jane.id}
  //                                   streetAddress: '123 North St'
  //                                   ) {
  //                                     name
  //                                     email
  //                                     streetAddress
  //                                    }`}) //body of http request
  //     .expect(200) //this is part of the request itself

  //   // await jane.reload();
  //   expect(response.body.data.user.name).toBe('jane') //are true expectation
  //   expect(response.body.data.user.streetAddress).toBe('123 North St') //are true expectation
  //   await jane.destroy();
  //   done(); //closes the database connection
  // })
})