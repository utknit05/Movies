import {
  API_KEY,
  DISCOVER_MOVIES,
  SEARCH_MOVIES,
} from './constant';

export const getPopularMovies = () => fetch(`${DISCOVER_MOVIES}?api_key=${API_KEY}&sort_by=popularity.desc`)
    .then(res => res.json());

export const getTrendMovies = () => {
  const date = new Date();
  const year = date.getFullYear();
  return fetch(`${DISCOVER_MOVIES}?api_key=${API_KEY}&primary_release_year=${year}&sort_by=vote_average.desc`)
    .then(res => res.json())
}

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
