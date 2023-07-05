const CastCrew =({movie, cast, imageBasePath}: any)=> {
    return (
        <div>
            <h1 className="text-lg font-bold p-10">Top Billed Cast</h1>
            <div className="flex mb-20">
                <div className="carrousell">
                <div className="flex overflow-hidden">
                    {cast.map((cast: any) => (
                    <div key={movie.id} className="carrousell-container shadow-lg border border-gray-300 bg-white rounded-lg">
                        <div key={cast.id} className="container">
                            <img
                                src={`${imageBasePath}${cast.profile_path}`}
                                alt={cast.name}
                                className="w-full rounded-lg"
                            />
                        </div>
                        <div className="mt-2 p-3">
                            <p className="text-base font-bold">{cast.name}</p>
                            {cast.character}
                        </div>
                    
                    </div>
                    
                ))}
                </div>
                </div>
                <div className="right-container">
                    <h1 className="text-lg font-bold">Original Title</h1>
                    <p>{movie.original_title}</p>
                    <h1 className="text-lg font-bold">Status</h1>
                    <p>{movie.status}</p>
                    <h1 className="text-lg font-bold">Original Language</h1>
                    <p>{movie.original_language}</p>
                </div>
            </div>
        </div>
    )
}
export default CastCrew;