import {
  API_KEY,
  DISCOVER_MOVIES,
  SEARCH_MOVIES,
  GENRE_LIST,
  TRENDING_MOVIES,
} from './constant';

export const getPopularMovies = () => fetch(`${DISCOVER_MOVIES}?api_key=${API_KEY}&sort_by=popularity.desc`)
  .then(res => res.json());

export const getTrendMovies = () => fetch(`${TRENDING_MOVIES}?api_key=${API_KEY}`)
  .then(res => res.json());

export const getNewestMovies = () => {
  const date = new Date();
  const year = date.getFullYear();
  return fetch(`${DISCOVER_MOVIES}?api_key=${API_KEY}&primary_release_year=${year}`)
    .then(res => res.json())
}

export const getTopratedMovies = () => fetch(`${DISCOVER_MOVIES}?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`)
  .then(res => res.json());

export const searchMovies = (searchField: string) => fetch(`${SEARCH_MOVIES}?api_key=${API_KEY}&query=${searchField}`)
  .then(res => res.json());

export const fetchGenreList = () => fetch(`${GENRE_LIST}?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(res => res.genres);
