const initialValues= (setOpenForm) => {
    const initialState = {
        "title": undefined,
        "year": undefined,
        "genres": undefined,
        "contentRating": undefined,
        "releaseDate": undefined,
        "originalTitle": undefined,
        "storyline": undefined,
        "setOpenForm": setOpenForm,
    };
    return initialState;
}

export default initialValues;