const Blog = require("../models/Blogs");
const chai = require("chai");
const chaiHttp = require('chai-http');
const app = require('../app');
chai.should()

chai.use(chaiHttp);

describe("Blogs", () => {
    beforeEach((done) => {
        Blog.deleteMany();
        done();
    });

    describe("/GET blog", () => {
        it("it should GET all the blogs", (done) => {
            chai
                .request(app)
                .get("/api/blogs")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("array");
                    done();
                });
        });
    });

    describe("/POST blog", () => {
        it("it should add blog", (done) => {
            let blog = {
                title: "This is a test blog",
                body: "This is the body of our test blog",
                image: "http://image.unsplash.com/photo-123243"
            };
            chai
                .request(app)
                .post("/api/blogs")
                .send(blog)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.data.should.be.a("object");
                    res.body.data.should.have.property("title");
                    res.body.data.should.have.property("body");
                    res.body.data.should.have.property("image");
                    res.body.data.should.have.property("_id");
                    done();
                })
        });
    })

    describe("/GET/:id blog", () => {
        it("it should GET a blog by the id", (done) => {
            let blog = new Blog({
                title: "This is a test blog",
                body: "This is the body of our test blog",
                image: "http://image.unsplash.com/photo-123243"
            });

            blog.save((err, blog) => {
                chai
                  .request(app)
                  .get("/api/blogs/"+blog.id)
                  .send(blog)
                  .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.data.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });

    // describe("/PUT/:id blog", () => {
    //     it("it should PUT a blog by the id", (done) => {
    //         let blog = new Blog({
    //             title: "This is a test blog",
    //             body: "This is the body of our test blog",
    //             image: "http://image.unsplash.com/photo-123243"
    //         });
    //         blog.save((err, blog) => {
    //             console.log(blog.id)
    //             chai
    //                 .request(app)
    //                 .put("/api/blogs/"+blog.id)
    //                 .send({
    //                     title: "This is a test blog",
    //                     body: "This is the body of our test blog",
    //                     image: "http://image.unsplash.com/photo-123243"
    //                 })
    //                 .end((err, res) => {
    //                     res.should.have.status(200);
    //                     res.body.should.be.a("object");
    //                     res.body.status.should.be.eql("success");
    //                     done();
    //                 });
    //         });
    //     });
    // });

    // describe("/DELETE/:id blog", () => {
    //     it("it should DELETE a blog by the id", (done) => {
    //         let blog = new Blog({
    //             title: "This is a test blog",
    //             body: "This is the body of our test blog",
    //             image: "http://image.unsplash.com/photo-123243"
    //         });
    //         blog.save((err, blog) => {
    //             chai
    //                 .request(app)
    //                 .delete("/api/blogs/"+blog.id)
    //                 .end((err, res) => {
    //                     res.should.have.status(200);
    //                     res.body.should.be.a("object");
    //                     res.body.status.should.be.eql("success");
    //                     done();
    //                 });
    //         });
    //     });
    // });
});

