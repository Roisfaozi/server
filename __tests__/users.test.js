const request = require('supertest');
const app = require('../app');

describe('Users API Endpoints', () => {
  let userId;

  it('should create a new user', async () => {
    const response = await request(app).post('/users').send({
      username: 'testuser',
      password: 'testpassword',
      email: 'test@example.com',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('user_id');
    userId = response.body.user_id;
  });

  it('should get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get a specific user by ID', async () => {
    const response = await request(app).get(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body.user_id).toBe(userId);
  });

  it('should update a user', async () => {
    const response = await request(app).put(`/users/${userId}`).send({
      username: 'updateduser',
      password: 'updatedpassword',
      email: 'updated@example.com',
    });

    expect(response.status).toBe(200);
    expect(response.body.user_id).toBe(userId);
    expect(response.body.username).toBe('updateduser');
    expect(response.body.password).toBe('updatedpassword');
    expect(response.body.email).toBe('updated@example.com');
  });

  it('should delete a user', async () => {
    const response = await request(app).delete(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});

afterAll(() => {
  app.close();
});
