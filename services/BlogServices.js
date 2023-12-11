const BlogModel = require('../models/Blogs');

exports.getAllBlogs = async () => {
    return await BlogModel.find();
};

exports.createBlog = async (blog) => {
    return await BlogModel.create(blog);
};

exports.getBlogById = async (id) => {
    return await BlogModel.findById(id);
};
 
exports.updateBlog = async (id, blog) => {
    return await BlogModel.update(id, blog);
};

exports.deleteBlog = async (id) => {
    return await BlogModel.findByIdAndDelete(id);
};