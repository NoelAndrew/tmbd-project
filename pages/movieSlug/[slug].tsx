import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { movieServiceId, movieServiceCredit } from "../api";
import Navigation from "../components/molecules/Navigation";
import DropNavbar from "../components/atoms/DropNavbar";
import Percentage from "../components/atoms/Percentage";
import CastCrew from "../components/atoms/CastCrew";

const MyMovie = () => {
    const imageBasePath = 'https://image.tmdb.org/t/p/w500';
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setmovie] = useState<any>()
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);
    const [newDate, setNewDate] = useState('');
    const [credits, setCredits] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [crew, setCrew] = useState([]);
    const [cast, setCast] = useState([]);


    const formattedDate = () => {
        if(movie) {
            if (movie.release_date !== null || movie.release_date !== undefined) {
                const modifiedString = movie.release_date.replace(/-/g, "/");
                setNewDate(modifiedString);
            }
        }
    }
    const convertHours = (minute: any) => {
        const calculatedHours = Math.floor(minute / 60);
        const calculatedMinutes = minute % 60;
        return `${calculatedHours}h ${calculatedMinutes}min`;
      };

    useEffect(() => {
        const  movieId  = router.query.slug
        if (movieId) {
          movieServiceId.getMovieByName(movieId)
            .then(({ data } : {data: any}) => {
                setmovie(data);
            })
            .catch((error: any) => {
                setIsError(true);
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
        }

    }, [router]);
    useEffect(() => {
        formattedDate();
    }, [movie]);
      
    useEffect(() => {
        const getMovieCredits = async () => {
          const movieId = router.query.slug;
          try {
            let dataApi = await movieServiceCredit.getCredits(movieId);
            setCredits(dataApi.data);
            setCrew(dataApi.data.crew);
            setCast(dataApi.data.cast);
          } catch (error) {
            console.error(error);
          }
        };
      
        getMovieCredits();

    }, [router.query.slug]);

    useEffect(() => {
        if(crew) {
            const filtered = crew.filter((element: any) => element.job === 'Director');
            setDirectors(filtered);
            const filtered2 = crew.filter((element: any) => element.job === 'Characters');
            setCharacters(filtered2)
        }
    }, [crew]);



    if (isLoading) {
        return <><p> Está cargando...</p></>
    }

    if (isError) {
        return <><p>{error}</p></>
    }
    const formattedYear = new Date(movie.release_date).toLocaleDateString('en-US', {
        year: 'numeric'
    });
return (
   <>
    <Navigation/>
    <DropNavbar/>
    <div 
        style={{
                backgroundImage: `url(${imageBasePath}${movie.backdrop_path})`,
            }}
        className="movie-card"
    >
        <div className="content">
            <div className="flex p-5 poster">
                <img
                src={`${imageBasePath}${movie.poster_path}`}
                alt={movie.title}
                className="rounded-10"
                />
            </div>
            <div className="flex flex-col text-white p-5 justify-center">
                <div className="title flex">
                    <div className="mr-5">
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="text-gray-200">
                        <h1>({formattedYear})</h1>
                    </div>
                </div>
                <div className="flex ">
                    <div className="mr-2">
                        {newDate}
                    </div>
                    <div className="mr-2">
                        &middot;
                        {movie.genres.map(( genres: any ) => (
                            <span>{genres.name}&nbsp;</span>
                        ))}
                        &middot;
                    </div>
                    <div className="mr-2">
                        {convertHours(movie.runtime)}
                    </div>
                </div>
                <div className="flex mt-4 items-center mr-10 mb-5">
                    <div className="score-static flex mr-4">
                        <Percentage decimal={movie.vote_average} />
                    </div>
                    <div className="flex w-12 mr-10">
                        <h2 className="font-bold">User Score</h2>  
                    </div>
                    <div className="circle-icon mr-5">
                        <img src="/list.svg" width={29} height={29}/>
                    </div>
                    <div className="circle-icon mr-5">
                        <img src="/heart.svg" width={29} height={29}/>
                    </div>
                    <div className="circle-icon mr-5">
                        <img src="/save.svg" width={29} height={29}/>
                    </div>
                    <div className="circle-icon mr-5">
                        <img src="/star.svg" width={29} height={29}/>
                    </div>
                    <div className="flex">
                        <div className="mr-2">
                            <img src="/play.svg" width={29} height={29}/>
                        </div>
                        <div>
                            <p className="text-white">Play Trailer</p>
                        </div>
                    </div>
                </div>
                <div className="flex mb-2">
                   <p className="tagline">{movie.tagline}</p>
                </div>
                <div className="flex text-white mb-2">
                   <h1 className="text-lg font-bold">Overview</h1>
    
                </div>
                <div className="flex text-white description">
                   <p>
                        {movie.overview}
                   </p>
                </div>
                <div className="flex text-white description mt-10">
                   <div className="director-container">
                        {directors.map((element: any) => (
                            <p className="text-lg font-bold" key={element.id}>{element.name}</p>
                        ))}
                        <p>Director, Writer</p>
                   </div>
                   <div>
                        {characters.map((element: any) => (
                            <p className="text-lg font-bold" key={element.id}>{element.name}</p>
                        ))}
                        <p >Characters</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
    <CastCrew
    movie={movie}
    cast={cast}
    imageBasePath={imageBasePath} />
    </>
)

};

export default MyMovie;