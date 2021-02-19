const MovieModel = require('../models/MovieModel');

const findMovies = async () => {
    const movies = await MovieModel.find({});
    return movies;
};

const addMovie = async (req, res) => {
    await MovieModel(req.body).save((err, data) => {
        if (err) {
            throw err;
        }
        res.json(data._id);
    });
};

const deleteMovie = async (req,res) => {
    await MovieModel.findById(req.params.id).deleteOne((err,data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
};

module.exports = {
    addMovie,
    findMovies,
    deleteMovie
}