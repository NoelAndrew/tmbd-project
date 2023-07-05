const Upcoming = ( httpClient ) => {
    const getMovies= () => httpClient.get(`/movie/upcoming/`);

    return {
        getMovies,
    }

};

export default Upcoming;