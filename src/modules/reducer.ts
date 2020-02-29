import {
    CHANGE_SEARCH_FIELD,
    TOGGLE_SEARCH,
    CHANGE_CATEGORY,
    GET_POPULAR_MOVIES,
    GET_NEWEST_MOVIES,
    GET_TOPRATED_MOVIES,
    GET_TREND_MOVIES,
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
        
        default:
            return state;        
    }
}

export default rootReducer;
