const NameService = ( httpClient: any ) => {
    const getMovieByName = (id: any) => httpClient.get(`/movie/${id}`);

    return {
        getMovieByName
    }
};

export default NameService;