import { Dispatch } from 'redux';
import {
    getPopularMovies,
    getTopratedMovies,
    getNewestMovies,
    getTrendMovies,
    searchMovies,
} from './service';
import {
    CHANGE_SEARCH_FIELD,
    TOGGLE_SEARCH,
    CHANGE_CATEGORY,
    GET_POPULAR_MOVIES,
    GET_NEWEST_MOVIES,
    GET_TOPRATED_MOVIES,
    GET_TREND_MOVIES,
    FIND_MOVIES,
} from './constant';
import { transformMovies } from './transformer';
import { MovieApiObject } from './interfaces';

export const changeSearchField = (payload: string) => ({
    type: CHANGE_SEARCH_FIELD,
    payload,
});

export const toggleSearch = (payload: boolean) => ({
    type: TOGGLE_SEARCH,
    payload,
});

export const changeCategory = (payload: string) => ({
    type: CHANGE_CATEGORY,
    payload,
});

export const fetchPopularMovie = (dispatch: Dispatch) => {
    getPopularMovies()
      .then(res => res.results.map((movie: MovieApiObject) => transformMovies(movie)))
      .then(res => dispatch({
          type: GET_POPULAR_MOVIES,
          payload: res,
      }))
}

export const fetchTrendMovie = (dispatch: Dispatch) => {
    getTrendMovies()
      .then(res => res.results.map((movie: MovieApiObject) => transformMovies(movie)))
      .then(res => dispatch({
          type: GET_TREND_MOVIES,
          payload: res,
      }))
}

export const fetchTopratedMovie = (dispatch: Dispatch) => {
    getTopratedMovies()
      .then(res => res.results.map((movie: MovieApiObject) => transformMovies(movie)))
      .then(res => dispatch({
          type: GET_TOPRATED_MOVIES,
          payload: res,
      }))
}

export const fetchNewestMovie = (dispatch: Dispatch) => {
    getNewestMovies()
      .then(res => res.results.map((movie: MovieApiObject) => transformMovies(movie)))
      .then(res => dispatch({
          type: GET_NEWEST_MOVIES,
          payload: res,
      }))
}

export const findMovies = (searchField: string, dispatch: Dispatch) => {
    searchMovies(searchField)
      .then(res => res.results.map((movie: MovieApiObject) => transformMovies(movie)))
      .then(res => dispatch({
        type: FIND_MOVIES,
        payload: res,
      }))
};
