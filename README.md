# 📚 Book Review API

A RESTful Book Review API using Node.js, Express, MongoDB, and JWT Authentication.

---

## 📌 Overview

This project provides an authenticated backend for managing books and user-submitted reviews, complete with features like rating calculation, review limits, and secure data handling.

---

## 🚀 Features

- 🔐 JWT-based user signup and login
- 📚 Add, view, and search books
- ✍️ Submit, update, delete reviews
- ☑️ One review per user per book
- 📏 Input validation with Joi
- 🧯 Centralized error handling middleware
- 🛡️ Security with Helmet and rate-limiting

---

## 🛠 Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **Joi** for input validation
- **Helmet** and **Rate Limit** for API security

---

## ⚙️ Setup

1. Clone the repository
   ```bash
   git clone <repo-link>
   cd book-review-api
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Add your `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/book_review_db
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server
   ```bash
   npm run dev
   ```

---

## 📘 API Endpoints

### 🔐 Auth

- `POST /signup` – Register user
- `POST /login` – Login and get token

### 📚 Books

- `GET /books` – List books (supports filtering by author and genre)
- `GET /books/:id` – Get book details with average rating and reviews
- `POST /books` – Add new book (auth required)
- `GET /books/search?q=` – Search by title or author

### ✍️ Reviews

- `POST /books/:id/reviews` – Add review (auth required)
- `PUT /reviews/:id` – Update own review (auth required)
- `DELETE /reviews/:id` – Delete own review (auth required)

---

## 🧬 Database Schema

| **User** | Type   | Description     |
| -------- | ------ | --------------- |
| username | String | Unique username |
| password | String | Hashed password |

| **Book** | Type       | Description    |
| -------- | ---------- | -------------- |
| title    | String     | Book title     |
| author   | String     | Book author    |
| genre    | String     | Book genre     |
| reviews  | [ObjectId] | Linked reviews |

| **Review** | Type     | Description       |
| ---------- | -------- | ----------------- |
| user       | ObjectId | Reference to user |
| book       | ObjectId | Reference to book |
| rating     | Number   | 1–5 star rating   |
| comment    | String   | Review content    |

---

## 📊 ER Diagram

The diagram shows:

- One User can review multiple Books, but only once per book.
- Each Book can have many Reviews.
- Reviews are linked to both User and Book.

![ER Diagram](assets/er-diagram.png)

---

## 🔍 Design Decisions

- ✅ Compound index (title, author) enforces unique books
- ✅ Used Joi to validate all inputs before processing
- ✅ Centralized error middleware for consistent responses
- ✅ One-review-per-user-per-book logic enforced in controller
- ✅ Security best practices applied (rate limiting, Helmet)

---

## 📈 Future Work

- 👨‍💼 Admin dashboard for moderation
- ⭐ Like/dislike reviews
- 🔄 Pagination for reviews
- 🧪 Unit and integration testing (Jest)
- ✉️ Email-based password reset
