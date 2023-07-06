const getMovieList = ( httpClient: any ) => {
    const getMovies= () => httpClient.get(`/movie/popular/`);

    return {
        getMovies,
    }

};

export default getMovieList;