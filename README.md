# Book Review API

## 📌 Overview

A RESTful Book Review API using Node.js, Express, MongoDB, and JWT Authentication.

## 🚀 Features

- JWT-based user signup and login
- Add, view, and search books
- Submit, update, delete reviews
- One review per user per book
- Input validation with Joi
- Error handling middleware
- Security with Helmet and rate-limiting

## 🛠 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Joi for validation
- Helmet + Rate Limit for security

## ⚙️ Setup

1. Clone the repo:

```
git clone <repo-link>
cd book-review-api
```

2. Install dependencies:

```
npm install
```

3. Add `.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/book_review_db
JWT_SECRET=your_jwt_secret
```

4. Start server:

```
npm run dev
```

## 📘 API Endpoints

### 🔐 Auth

- `POST /signup`
- `POST /login`

### 📚 Books

- `GET /books` – list books (filter by author, genre)
- `GET /books/:id` – book details + reviews + average rating
- `POST /books` – add book (auth required)
- `GET /books/search?q=...` – search books

### ✍️ Reviews

- `POST /books/:id/reviews` – add review (auth required)
- `PUT /reviews/:id` – update review (auth required)
- `DELETE /reviews/:id` – delete review (auth required)

## 🔍 Design Decisions

- Unique book enforced on title + author
- Used centralized error handler for clean API errors
- Input validation with Joi prevents bad data
- One review per user per book logic handled in controller
- Security headers and rate limits in place

## 📈 Future Work

- Add admin/moderation system
- Add support for average rating on book creation
- Add unit tests
