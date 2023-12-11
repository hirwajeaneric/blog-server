const blogService = require('../services/BlogServices');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.status(200).json({ data: blogs, status: 'Success' });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.createBlog = async (req, res) => {
    try {
        const blog = await blogService.createBlog(req.body);
        res.status(201).json({ data: blog, status: 'Success' });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await blogService.getBlogById(req.params.id);
        res.status(200).json({ data: blog, status: 'Success' });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const blog = await blogService.updateBlog(req.params.id, req.body);
        res.status(200).json({ data: blog, status: 'Success' });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogService.deleteBlog(req.params.id);
        res.status(200).json({ data: blog, status: 'Success' });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}