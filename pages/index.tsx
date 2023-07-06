import Navigation from '../components/molecules/Navigation'
import Filter from '../components/molecules/Filter'
import MovieList from '../components/molecules/MovieList'
import { movieServiceList, movieServiceUp } from './api'
import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home( {popularMovies, upcomingMovies, RatedMovies}: any) {
  const [movies, setMovies] = useState([]);
  
  const getPopularMovies =() => {
    setMovies(popularMovies)
  }

  const getUpcomingMovies = async () => {
    setMovies(upcomingMovies)
  }

  const getRatedMovies = async() => {
    RatedMovies.sort((a: any, b: any) => b.vote_average - a.vote_average);
    setMovies(RatedMovies);
  };

  useEffect(() => {
    getPopularMovies();
  },[]);


  return (
    <>
    <Head>
      <title>TMDB</title>
    </Head>
    <Navigation/>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10`}
    >
      <div className="main-content">
        <div className="filter-container">
          <Filter 
          getPopularMovies={ getPopularMovies }
          getUpcomingMovies={ getUpcomingMovies }
          getRatedMovies={ getRatedMovies }
          />
        </div>
        <div className="movie-list w-3/4">
          <MovieList movies={ movies }/>
        </div>
      </div>
    </main>
    </>
  )
}
export const getServerSideProps = async () => {
  let popularMovies: any[] = []
  let upcomingMovies: any[] = []
  let RatedMovies: any[] = []

  const getPopularMovies = async() => {
    let dataApi = await movieServiceList.getMovies()
    popularMovies = dataApi.data.results
  }
  const getUpcomingMovies = async () => {
    let dataApi = await movieServiceUp.getMovies()
    upcomingMovies = dataApi.data.results
  }
  const getRatedMovies = async() => {
    let dataApi = await movieServiceList.getMovies();
    RatedMovies = dataApi.data.results;
  };

  await getPopularMovies();
  await getUpcomingMovies();
  await getRatedMovies();

  return {
    props: {
      popularMovies,
      upcomingMovies,
      RatedMovies,
    },
  };
};