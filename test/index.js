var chai = require("chai");
var app = require('../app')

chai.use(require('chai-json'));
chai.use(require("chai-http"));
chai.should();

describe("API", () => {
    describe("GET /", () => { // Test to get all students record
        it("should get a json with title Express", (done) => {
            chai.request(app).get('/').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('title').eql('Express');
                done();
            });
        }); // Test to get single student record
    });
});
