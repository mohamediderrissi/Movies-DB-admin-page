import { createMovie } from '../../service';
const handleSubmit = async (values) => {
    const data = {
        "title": values.title,
        "year": values.year,
        "genres": values.genres,
        "contentRating": values.contentRating,
        "releaseDate": values.releaseDate,
        "originalTitle": values.originalTitle,
        "storyline": values.storyline,
    };
    console.log("handleSubmit", data);
    await createMovie(data);
    console.log(values);
    values.setOpenForm(false);
};

export default handleSubmit;