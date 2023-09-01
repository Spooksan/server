---

# Node.js Server for Innovative Navigation

This repository contains the Node.js Server setup that powers the innovative web navigation approach leveraging 404 error pages, as discussed in the [corresponding frontend repository](LINK-TO-OTHER-GITHUB-REPO).

## Overview

The Node.js server in this project utilizes an Express.js framework to handle API requests for blogs, as well as serve static files. It includes a set of APIs for creating, reading, updating, and deleting (CRUD) blogs in the MongoDB database.

## Prerequisites

You need to have Node.js and MongoDB installed on your machine to run this project.

## Setup

You can install the required packages with the following command:

```shell
$ npm install
```

Ensure you provide the correct MongoDB connection string as per your local setup in the `.env` file:

```text
MONGODB_URI="mongodb://0.0.0.0/html-node"
```

Also, provide the port on which you want your server to run. You can specify this in the `.env` file as well:

```text
PORT=8002
```

## Running the Server

You can start the server from the project root with the following command:

```shell
$ npm start
$ npm run dev # For running nodemon
```

## Usage

Once running, the server provides a set of API endpoints as defined in `routes/blogRoutes`. You can test these endpoints via Postman, or your desired API client, using `http://localhost:8002/api/v1/blogs`.

## Contributing

Contributions are welcome! Feel free to submit a pull request. 

## License

This project is released under the MIT License. See the included [License](license) file.

---