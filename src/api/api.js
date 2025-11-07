
const allMovies = async () => {
    const allMoviesApi = "http://localhost:3001/posts";
    const response = await fetch(allMoviesApi);
    const postData = await response.json();
    return postData;
};
const searchByTitle = async (query) => {
      const BaseUrl = "https://omdbapi.com/?apikey=2770b6b7&s=";
      const searchUrl = `${BaseUrl}${query}`;
      const response = await fetch(searchUrl);
      const data = await response.json();

      if(data.Response === "False"){
        throw new Error(data.Error);
      }
      return data.Search;
};

export {allMovies,searchByTitle};

