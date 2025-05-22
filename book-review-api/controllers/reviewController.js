const Review = require('../models/Review');

const addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const existing = await Review.findOne({ user: req.user._id, book: req.params.id });
  if (existing) return res.status(400).json({ message: 'Already reviewed' });

  const review = await Review.create({ user: req.user._id, book: req.params.id, rating, comment });
  res.status(201).json(review);
};

const updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: 'Unauthorized' });

  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};

const deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user._id.toString())
    return res.status(403).json({ message: 'Unauthorized' });

  await review.deleteOne();
  res.json({ message: 'Deleted' });
};

module.exports = { addReview, updateReview, deleteReview };
