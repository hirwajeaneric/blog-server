const Blog = require("../models/Blogs");
const chai = require("chai");
const chaiHttp = require('chai-http');
const app = require('../app');
chai.should()

chai.use(chaiHttp);

describe("Blogs", () => {
    beforeEach((done) => {
        Blog.deleteMany({}, (err) => {
            done();
        })
    });

    describe("/GET blog", () => {
        it("it should GET all the blogs", (done) => {
            chai
            .request(app)
            .get("/api/blogs")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a("array");
                res.body.data.length.should.be.eql(0);
                done();
            });
        });
    });

    
});