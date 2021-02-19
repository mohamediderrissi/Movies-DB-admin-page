const mongoose = require('mongoose');

const { Schema } = mongoose;

const MovieSchema = new Schema({
  "title": String,
  "year": String,
  "genres": [String],
  "ratings": [Number],
  "poster": String,
  "contentRating": String,
  "duration": String,
  "releaseDate": String,
  "averageRating": Number,
  "originalTitle": String,
  "storyline": String,
  "actors": [String],
  "imdbRating": Number,
  "posterurl": String,
});

module.exports = mongoose.model('Movie', MovieSchema);
