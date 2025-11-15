
const searchByJoker = async (Page) => {
    const BaseUrl = "https://omdbapi.com/?apikey=2770b6b7&s=Joker";
    const searchUrl = `${BaseUrl}&page=${Page}`;
    const response = await fetch(searchUrl);
    const data = await response.json();

    if (data.Response === "False") {
        throw new Error(data.Error);
    }
    return data;
};

const getAllMovies = async () => {
    const BaseUrl = "https://omdbapi.com/?apikey=2770b6b7&type=movie&s=man";
    const searchUrl = `${BaseUrl}`;
    const response = await fetch(searchUrl);
    const data = await response.json();

    if (data.Response === "False") {
        throw new Error(data.Error);
    }
    return data.Search;
};


const searchByTitle = async (query, Page) => {
    const BaseUrl = "https://omdbapi.com/?apikey=2770b6b7&s=";
    const searchUrl =`${BaseUrl}${encodeURIComponent(query)}&page=${Page}`;
    const response = await fetch(searchUrl);
    const data = await response.json();

    if (data.Response === "False") {
        throw new Error(data.Error);
    }
    return data;
   
};

const movieById = async (movieId) => {
    const BaseUrl = "https://omdbapi.com/?apikey=2770b6b7&i=";
    const searchUrl = `${BaseUrl}${movieId}`;
    const response = await fetch(searchUrl);
    const data = await response.json();
    return data;

}

export { searchByTitle, movieById, searchByJoker, getAllMovies};

