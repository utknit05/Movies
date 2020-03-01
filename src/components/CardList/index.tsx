import React, { useEffect } from 'react';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { State, Movie } from '../../modules/interfaces';
import {
  getFilteredMovies,
} from '../../modules/action';

const CardList = () => {
  const { category, searchActive, searchedMovies, popularMovies, trendMovies, topratedMovies, newestMovies, rating, filterGenre, filterFromYear, filterToYear, filteredMovies } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    let iterableList: Movie[] = [];
    if (searchActive) {
      iterableList = searchedMovies;
    } else {
      category === 'popular'
        ? iterableList = popularMovies
        : category === 'newest'
          ? iterableList = newestMovies
          : category === 'toprated'
            ? iterableList = topratedMovies
            : iterableList = trendMovies
    }
    const moviesArray = iterableList.filter((movie: Movie) => {
      const check = (movie.rating >= rating)
        && (Number(movie.releaseYear) >= Number(filterFromYear))
        && (Number(movie.releaseYear) <= Number(filterToYear));

      if (filterGenre) {
        let foundGenreArray = movie.genreIds.filter(movieGenreId => movieGenreId === filterGenre.id);
        return check && (foundGenreArray.length > 0);
      }

      return check;
    })
    dispatch(getFilteredMovies(moviesArray));
  }, [dispatch, category, filterGenre, filterFromYear, filterToYear, newestMovies, popularMovies, rating, searchActive, searchedMovies, topratedMovies, trendMovies])
  return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflowY: 'scroll', height: '90vh'}}>
          {filteredMovies.map((movie: Movie) => <Card movie={movie} />)}
      </div>
    )
}

export default CardList;
