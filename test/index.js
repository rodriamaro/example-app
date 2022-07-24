const chai = require('chai');
const app = require('../app');

chai.use(require('chai-http'));

chai.should();

describe('API', () => {
  describe('GET /', () => {
    it('should get a json with title Express', (done) => {
      chai.request(app).get('/').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('title').eql('Hola a todos!');
        done();
      });
    });
    it('should post return 201', (done) => {
      chai.request(app).post('/').end((err, res) => {
        res.should.have.status(201);
        done();
      });
    });
  });
});
