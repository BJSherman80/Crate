const request = require('supertest');
const express = require('express');

const app = express();

describe('GraphQL user query', () => {
  it('should return a single user', async () => {
    const userId = 1
    const response = await request(app)
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
  });
});

