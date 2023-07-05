import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from './components/molecules/Navigation'
import Filter from './components/molecules/Filter'
import MovieList from './components/molecules/MovieList'
import { movieServiceList, movieServiceUp } from './api'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async() => {
      let dataApi = await movieServiceList.getMovies()
      setMovies(dataApi.data.results)
  }
  const getUpcomingMovies = async () => {
    let dataApi = await movieServiceUp.getMovies()
    setMovies(dataApi.data.results)
  }

  const getRatedMovies = async() => {
    let dataApi = await movieServiceList.getMovies();
    let moviesData = dataApi.data.results;
    moviesData.sort((a: any, b: any) => b.vote_average - a.vote_average);
    setMovies(moviesData);
  };

  useEffect(() => {
      // Update the document title using the browser API
      getPopularMovies();
  },[]);

  return (
    <>
    <Navigation/>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20 ${inter.className}`}
    >
      <div className="flex">
        <div className="w-1/4">
          <Filter 
          getPopularMovies={getPopularMovies}
          getUpcomingMovies={getUpcomingMovies}
          getRatedMovies={getRatedMovies}
          />
        </div>
        <div className="w-3/4 p-10">
          <MovieList movies={movies}/>
        </div>
      </div>
    </main>
    </>
  )
}
