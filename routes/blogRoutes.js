const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", getBlogById);
router.post("/blog", createBlog);
router.put("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);

// Add other routes like post, put, delete
module.exports = router;
