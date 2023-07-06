const Upcoming = ( httpClient: any ) => {
    const getMovies= () => httpClient.get(`/movie/upcoming/`);

    return {
        getMovies,
    }

};

export default Upcoming;