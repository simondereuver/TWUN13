const request = require('supertest');
const app = require('./index');
const http = require('http');

const server = http.createServer(app);

describe('POST /api/login', () => {
  test('should return a token for valid credentials', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ email: 'example@example.com', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  test('should return 404 for invalid email', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ email: 'invalid@example.com', password: 'password' });
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Email');
  });

  test('should return 404 for invalid password', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ email: 'example@example.com', password: 'invalid' });
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Password');
  });

  // Add more test cases as needed
});

afterAll(() => {
    server.close();
  });