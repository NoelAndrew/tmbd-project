import Image from 'next/image';
import Percentage from '../../atoms/Percentage';
import ReleaseDate from '../../atoms/ReleaseDate';
 
const MovieList = ({ movies }: any) => { 

 const imageBasePath = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="card-grid">
    { movies.map((movie: any) => (
      <div key={ movie.id } className="border border-gray-300 bg-white rounded-lg">
        <div className="more">
            <Image src="/more.svg" width={ 29 } height={ 29 } alt={ movie.title }/>
        </div>
        <a href={ `../../movieSlug/${ movie.id }` }>
          <img
            src={ `${ imageBasePath }${ movie.poster_path }`}
            alt={ movie.title }
            className="w-full"
          />
          <div className="score">
            <Percentage decimal={ movie.vote_average } />
          </div>
          <div className="mt-2 p-3">
            <p className="text-base font-bold">{ movie.title }</p>
            <ReleaseDate dateString={ movie.release_date } />
          </div>
        </a>
      </div>
    )) }
  </div>
  );
 };

export default MovieList;
