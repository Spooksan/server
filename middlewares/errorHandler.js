module.exports = function errorHandler(err, req, res, next) {
  console.error(err); // Log the error

  // Determine the status code
  const statusCode = err.statusCode || 500;

  // Prepare the response
  const response = {
    status: statusCode,
    message: err.message || "An unexpected error occurred",
  };

  // Send the response
  res.status(response.status).send(response);
};
