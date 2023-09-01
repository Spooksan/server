const BlogService = require("../services/blogServices");

// Get all blogs
exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogService.findAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
// Get blog by id
exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await BlogService.findBlogById(req.params.id);
    if (!blog) {
      const err = new Error("No blog found");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json(blog);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
// Create a blog
exports.createBlog = async (req, res, next) => {
  try {
    const blog = await BlogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
// Update a blog
exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await BlogService.updateBlog(req.params.id, req.body);
    res.status(200).json(blog);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
// Delete a blog
exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await BlogService.deleteBlog(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
