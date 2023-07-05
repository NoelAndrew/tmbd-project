import axios from 'axios';
import NameService from './movieId';
import getMovieList from './movieList';
import Upcoming from './Upcoming';
import MovieCredits from './movieCredits';

const API_KEY = '4f298a53e552283bee957836a529baec';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const movieServiceId = NameService(api);
export const movieServiceList = getMovieList(api);
export const movieServiceUp = Upcoming(api);
export const movieServiceCredit = MovieCredits(api);