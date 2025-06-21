const request = require('supertest');
const { app, server} = require('../app');



describe('Express API Tests', () => {
  afterAll(async () => {
  server.close()
})

  describe('GET /', () => {
    it('should return welcome message', async () => {
      const res = await request(app)
        .get('/')
        .expect(200);
      
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Welcome to the Express.js API');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app)
        .get('/health')
        .expect(200);
      
      expect(res.body).toHaveProperty('status', 'OK');
      expect(res.body).toHaveProperty('timestamp');
      expect(res.body).toHaveProperty('uptime');
    });
  });

  describe('API Routes', () => {
    describe('GET /api/users', () => {
      it('should return all users', async () => {
        const res = await request(app)
          .get('/api/users')
          .expect(200);
        
        expect(res.body).toHaveProperty('success', true);
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
      });
    });

    describe('GET /api/users/:id', () => {
      it('should return a specific user', async () => {
        const res = await request(app)
          .get('/api/users/1')
          .expect(200);
        
        expect(res.body).toHaveProperty('success', true);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('id', 1);
      });

      it('should return 404 for non-existent user', async () => {
        const res = await request(app)
          .get('/api/users/999')
          .expect(404);
        
        expect(res.body).toHaveProperty('success', false);
      });
    });

    describe('POST /api/users', () => {
      it('should create a new user', async () => {
        const newUser = {
          name: 'Test User',
          email: 'test@example.com'
        };

        const res = await request(app)
          .post('/api/users')
          .send(newUser)
          .expect(201);
        
        expect(res.body).toHaveProperty('success', true);
        expect(res.body.data).toHaveProperty('name', newUser.name);
        expect(res.body.data).toHaveProperty('email', newUser.email);
      });

      it('should return 400 for missing required fields', async () => {
        const res = await request(app)
          .post('/api/users')
          .send({})
          .expect(400);
        
        expect(res.body).toHaveProperty('success', false);
      });
    });
  });
});
