const Book = require('../models/Book');
const Review = require('../models/Review');

const addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

const getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const filter = {};
  if (author) filter.author = new RegExp(author, 'i');
  if (genre) filter.genre = new RegExp(genre, 'i');

  const books = await Book.find(filter).skip((page - 1) * limit).limit(limit);
  res.json(books);
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id).populate('reviews');
  const averageRating =
    book.reviews.reduce((acc, r) => acc + r.rating, 0) / book.reviews.length || 0;
  res.json({ book, averageRating });
};

const searchBooks = async (req, res) => {
  const { q } = req.query;
  const books = await Book.find({
    $or: [
      { title: new RegExp(q, 'i') },
      { author: new RegExp(q, 'i') }
    ]
  });
  res.json(books);
};

module.exports = { addBook, getBooks, getBookById, searchBooks };
