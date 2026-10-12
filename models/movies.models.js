const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  releaseYear: Number,
  genre: [String],
  director: String,
  actors: [String],
  language: String,
  country: String,
  rating: Number,
  plot: String,
  awards: String,
  posterUrl: String,
  trailerUrl: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
