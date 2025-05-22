const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

bookSchema.index({ title: 1, author: 1 }, { unique: true });

module.exports = mongoose.model('Book', bookSchema);
