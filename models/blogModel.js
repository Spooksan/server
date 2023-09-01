// import the mongoose library
const mongoose = require("mongoose");

// define the blog schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

// create the blog model
const Blog = mongoose.model("Blog", blogSchema);

// export the model
module.exports = Blog;
