import {
    CHANGE_SEARCH_FIELD,
    TOGGLE_SEARCH,
    CHANGE_CATEGORY,
    GET_POPULAR_MOVIES,
    GET_NEWEST_MOVIES,
    GET_TOPRATED_MOVIES,
    GET_TREND_MOVIES,
    FIND_MOVIES,
    UPDATE_RATING,
    GET_FILTERED_MOVIES,
    FILTER_FROM_YEAR,
    FILTER_GENRE,
    FILTER_TO_YEAR,
    FILTER_TYPE,
} from "./constant";
import { Action, State } from './interfaces';

const initialState = {
    searchActive: false,
    searchField: '',
    category: 'popular',
    popularMovies: [],
    trendMovies: [],
    topratedMovies: [],
    newestMovies: [],
    searchedMovies: [],
    filteredMovies: [],
    rating: 0,
    filterType: 'Movie',
    filterGenre: undefined,
    filterFromYear: '2010',
    filterToYear: '2020',
};

const rootReducer = (state: State = initialState, action: Action) => {
    const { type, payload } = action;
    switch(type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: payload };

        case TOGGLE_SEARCH:
            return { ...state, searchActive: payload };

        case CHANGE_CATEGORY:
            return { ...state, category: payload };

        case GET_POPULAR_MOVIES:
            return { ...state, popularMovies: payload };

        case GET_TREND_MOVIES:
            return { ...state, trendMovies: payload };

        case GET_TOPRATED_MOVIES:
            return { ...state, topratedMovies: payload };
    
        case GET_NEWEST_MOVIES:
            return { ...state, newestMovies: payload };

        case FIND_MOVIES:
            return { ...state, searchedMovies: payload };

        case UPDATE_RATING:
            return { ...state, rating: payload };

        case GET_FILTERED_MOVIES:
            return { ...state, filteredMovies: payload };

        case FILTER_FROM_YEAR:
            return { ...state, filterFromYear: payload };

        case FILTER_TO_YEAR:
            return { ...state, filterToYear: payload };

        case FILTER_GENRE:
            return { ...state, filterGenre: payload };

        case FILTER_TYPE:
            return { ...state, filterType: payload };
                                            
        default:
            return state;        
    }
}

export default rootReducer;
