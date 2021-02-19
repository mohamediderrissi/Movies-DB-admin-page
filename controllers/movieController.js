const { findMovies, deleteMovie, addMovie } = require('../repository');

const movieController = (app) => {
    // Get Movies
    app.get('/api/v1/movies',async (req,res) => {
        console.log("GET Request !");
        try {
            const movies = await findMovies();
            res.json(movies); 
        } catch (error) {
            console.log("Error while finding movies !");
            console.log(error);
        }              
    });

    // Create a Movie
    app.post('/api/v1/movies', async (req,res) => {
        console.log("POST Request !");
        try {
            await addMovie(req, res);
            console.log("A Movie added successfully");
        } catch (error) {
            console.log("Error when saving a new Movie");
            console.log(error);
        }              
    });
    
    // Delete a Movie
    app.delete('/api/v1/movies/:id',async (req,res) => {
        console.log("DELETE Request !");
        try {
            await deleteMovie(req,res);
            console.log("A Movie removed successfully");
        } catch (error) {
            console.log("Error when deleting a Movie");
            console.log(error);
        }                        
    });
};
module.exports = movieController;