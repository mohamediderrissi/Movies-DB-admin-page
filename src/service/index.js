const API_URI = 'http://localhost:4000/api/v1/movies';
const getMovies = async () => {
    try {
        let Data = null;
        await fetch(API_URI, {
        method: "GET",
        })
        .then(response => response.json())
        .then(data => { Data = data; });
        return Data;
    } catch (error) {
        console.log("Some error happened while retrieving list of movies !");       
    }
}

const deleteMovie = async(id) => {
    try {
        await fetch(API_URI+'/'+id, {
            method: "DELETE",
            })
            .then(() =>  'Movie deleted');
        } catch (error) {
            console.log("Some error happened while deleting a movie !");       
    }
};

const createMovie = async (data) => {
    let Data = null;
    try {
        await fetch(API_URI, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
              }})
        .then(response => response.json())
        .then(data => { Data = data; });
            return Data;
        } 
        catch (error) {
            console.log("Some error happened while creating a movie !");       
        }
    
};
export { getMovies, deleteMovie, createMovie }