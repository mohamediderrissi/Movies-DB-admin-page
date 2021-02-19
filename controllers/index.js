const movieController = require('../controllers/movieController');

const controller = (app) => {
    movieController(app);
};

module.exports = controller ;