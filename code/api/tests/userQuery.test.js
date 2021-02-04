const request = require('supertest')
const app = require('../src/index')
describe('GraphQL user query', () => {
  it('should return a single user', async () => {
    const response = await request(app)
      .post('/')
      .send({
        query: `query user(id: ${userId}) {
                  id
                  name
                  role
                  email
                }`
      })
      .expect(200)
      .end(function(error, response){
        if ( error ) throw error;
      });
    });
});
