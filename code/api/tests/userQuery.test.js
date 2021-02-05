const url = 'http://localhost:8000/'
const request = require('supertest')(url);
const express = require('express');

const app = express();

describe('GraphQL user query', () => {
  it('should return a single user', async () => {
    const userId = 1
    const response = await request
      .post('/')
      .send({
        query: `query {
                  user(id: ${userId}) {
                    id
                    name
                    role
                    email
                  }
                }`
      })

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveProperty('user')
      expect(response.body.data.user).toHaveProperty('id')
  });
});

