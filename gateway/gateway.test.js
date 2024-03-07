const request = require('supertest');
const express = require('express');
const { app, server, createDynamicProxy } = require('./gateway');

const eventMockServer = express();
const usersMockServer = express();

eventMockServer.all('*', (req, res) => {
  res.sendStatus(200);
});

usersMockServer.all('*', (req, res) => {
  res.sendStatus(200);
});

const eventMockServerPort = 3001;
const usersMockServerPort = 3002;

const eventServer = eventMockServer.listen(eventMockServerPort, () => {
  console.log(`Event mock server is running on port ${eventMockServerPort}`);
});

const usersServer = usersMockServer.listen(usersMockServerPort, () => {
  console.log(`Users mock server is running on port ${usersMockServerPort}`);
});

eventMockServer.use('/event', createDynamicProxy(`localhost:${eventMockServerPort}`));
usersMockServer.use('/users', createDynamicProxy(`localhost:${usersMockServerPort}`));

describe('Gateway Tests', () => {
  afterAll(() => {
    eventServer.close();
    usersServer.close();
    server.close();
  });

  test('Testing /event route', async () => {
    const response = await request(eventMockServer)
      .post('/event')
      .send({ eventName: 'testEvent', eventData: 'testData' });
    expect(response.status).toBe(200);
  });

  test('Testing /users route', async () => {
    const response = await request(usersMockServer)
      .post('/users')
      .send({ username: 'testUser', password: 'testPassword' });
    expect(response.status).toBe(200);
  });
});
