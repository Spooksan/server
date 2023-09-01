const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", blogRoutes); // Adjust according to your version control

// Catch 404 and forward to error handler
// Error handle
app.use(errorHandler);

app.use(express.static("../html"));
app.use("*", function (req, res) {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});
app.get("/debug/files", function (req, res) {
  const directoryPath = path.join(__dirname, "../html");
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    res.send(files);
  });
});
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
);
module.exports = app;
