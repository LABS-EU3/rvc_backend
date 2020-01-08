const request = require('supertest');
const server = require('../../../api/server');

function random(option) {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let string = '';
  for (var i = 0; i < 15; i++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  if (option === 'email') {
    return string + '@email.com';
  } else {
    return string;
  }
}

const register = {
  email: random('email'),
  username: random(),
  password: 'password'
};

const unregistredAccount = {
  email: random('email'),
  username: random(),
  password: 'password'
};

// Add Register

describe('POST /api/auth/register', () => {
  it('Create a new User and return ', () => {
    return request(server)
      .post('/api/auth/register')
      .send(register)
      .expect(201)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(typeof res.body === 'object').toBe(true);
        expect(typeof res.body.username).toBe('string');
        expect(typeof res.body.id).toBe('number');
      });
  });

  it('Send empty body', () => {
    return request(server)
      .post('/api/auth/register')
      .send()
      .expect(400)
      .then(res => {
        expect(res.body.error).toBe('req.body is empty.');
      });
  });

  it('Create a new user with existing email', () => {
    return request(server)
      .post('/api/auth/register')
      .send({ ...register, username: 'somerandomusername' })
      .expect(400)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.error).toBe(
          `Email ${register.email} is already in use`
        );
      });
  });

  it('Create a new user with existing username', () => {
    return request(server)
      .post('/api/auth/register')
      .send({ ...register, email: 'testing@user.com' })
      .expect(400)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.error).toBe(
          `Username ${register.username} is already in use`
        );
      });
  });
});

// Add Register
describe('POST /api/auth/login', () => {
  it('Login Test user', () => {
    return request(server)
      .post('/api/auth/login')
      .send(register)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(typeof res.body === 'object').toBe(true);
        expect(typeof res.body.username).toBe('string');
        expect(typeof res.body.id).toBe('number');
      });
  });

  it('Login wrong credentials', () => {
    return request(server)
      .post('/api/auth/login')
      .send(unregistredAccount)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.error).toMatch('Your email or password is incorrect');
      });
  });
});
