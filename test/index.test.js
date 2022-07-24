const request = require('supertest');
const app = require('../app');

describe('API', () => {
  describe('GET /', () => {
    it('should get a json with title Express', (done) => {
      const res = request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.title).toEqual('Hola a todos!');
          done();
        })
        .catch((err) => done(err));
    });
    it('should post return 201', (done) => {
      const res = request(app)
        .post('/')
        .expect(201)
        .then((response) => {
          done();
        })
        .catch((err) => done(err));
    });
  });
});
