import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../Search';
import {
    toggleSearch,
    changeCategory,
    fetchTrendMovie,
    fetchTopratedMovie,
    fetchNewestMovie,
    fetchPopularMovie,
    changeSearchField,
    findMovies,
} from '../../modules/action';
import { State } from '../../modules/interfaces';
import './header.css';

const Header = () => {
    const dispatch: Dispatch = useDispatch();
    const { category, searchActive, popularMovies, trendMovies, newestMovies, topratedMovies, searchedMovies, searchField } = useSelector((state: State) => state);

    useEffect(() => {
        (popularMovies.length < 1) && fetchPopularMovie(dispatch);
    }, [dispatch]);

    const selectCategory = (category: string) => {
        searchActive && dispatch(toggleSearch(false));
        searchField && dispatch(changeSearchField(''));
        searchedMovies && findMovies('', dispatch);
        dispatch(changeCategory(category));
        switch(category) {
            case 'trend':
                (trendMovies.length < 1) && fetchTrendMovie(dispatch);
                break;

            case 'toprated':
                (topratedMovies.length < 1) && fetchTopratedMovie(dispatch);
                break;

            case 'newest':
                (newestMovies.length < 1) && fetchNewestMovie(dispatch);
                break;
        }
    }

    const minWidth = window.innerWidth - 300;

    return (
        <div className="headerWrapper" style={{ minWidth }}>
            <div className="heading">Discover</div>
            <div className="menu">
                <div className={`field ${category === 'popular' ? 'active' : ''}`} onClick={() => selectCategory('popular')}>POPULAR</div>
                <div className={`field ${category === 'trend' ? 'active' : ''}`} onClick={() => selectCategory('trend')}>TREND</div>
                <div className={`field ${category === 'newest' ? 'active' : ''}`} onClick={() => selectCategory('newest')}>NEWEST</div>
                <div className={`field ${category === 'toprated' ? 'active' : ''}`} onClick={() => selectCategory('toprated')}>TOP RATED</div>
            </div>
            <Search/>
        </div>
    )
}

export default Header;