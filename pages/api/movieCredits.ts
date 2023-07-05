const MovieCredits = (httpClient: any) => {
    const getCredits = (id: any) => httpClient.get(`/movie/${id}/credits`);

    return {
        getCredits
    }
};

export default MovieCredits;