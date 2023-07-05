const getMovieList = (httpClient) => {
    const getMovies= () => httpClient.get(`/movie/popular/`);

    return {
        getMovies,
    }

};

export default getMovieList;