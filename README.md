# Blog REST API

A simple blog management application built using **Node.js**, **Express.js**, and **EJS** to understand RESTful APIs and CRUD operations.

## Features

- View all blog posts
- Create a new blog post
- View a single blog post
- Edit an existing blog post
- Delete a blog post
- Server-side rendering using EJS
- RESTful routing with Express

## Tech Stack

- Node.js
- Express.js
- EJS
- HTML
- CSS
- JavaScript

## REST API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | /posts | Display all posts |
| GET | /posts/new | Show form to create a new post |
| POST | /posts | Create a new post |
| GET | /posts/:id | Display a single post |
| GET | /posts/:id/edit | Show edit form |
| PATCH | /posts/:id | Update a post |
| DELETE | /posts/:id | Delete a post |

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run the project

```bash
node index.js
```

or

```bash
nodemon index.js
```

Open your browser and visit

```
http://localhost:8080
```

## Learning Outcomes

This project helped me understand:

- RESTful API design
- CRUD operations
- Express routing
- EJS templating
- Handling HTTP methods (GET, POST, PATCH, DELETE)
- Static file serving
- Middleware in Express

## Future Improvements

- Database integration (MongoDB/MySQL)
- User authentication
- Comments
- Image uploads
- Search functionality
