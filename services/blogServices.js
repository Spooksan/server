const Blog = require("../models/blogModel");

class BlogService {
  // Find all blogs
  static findAllBlogs = async () => {
    try {
      const blogs = await Blog.find().exec();
      return blogs;
    } catch (error) {
      throw error;
    }
  };
  // Find blog by id
  static findBlogById = async (id) => {
    try {
      const blog = await Blog.findById(id).exec();
      return blog;
    } catch (error) {
      throw error;
    }
  };
  // Create a blog
  static createBlog = async (blog) => {
    try {
      if (!blog.title || !blog.author) {
        throw new Error("Title and author fields are required.");
      }
      const newBlog = await Blog.create(blog);
      return newBlog;
    } catch (error) {
      throw error;
    }
  };
  // Update a blog
  static updateBlog = async (id, updatedBlog) => {
    try {
      const blog = await Blog.findByIdAndUpdate(id, updatedBlog, {
        new: true,
      }).exec();
      return blog;
    } catch (error) {
      throw error;
    }
  };

  // Delete a blog
  static deleteBlog = async (id) => {
    try {
      const blog = await Blog.findByIdAndRemove(id).exec();
      return blog;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = BlogService;
