export interface Action {
    type: string;
    payload: any;
}

export interface State {
    searchField: string;
    searchActive: boolean;
    category: string;
    popularMovies: Movie[];
    trendMovies: Movie[];
    topratedMovies: Movie[];
    newestMovies: Movie[];
    searchedMovies: Movie[];
    filteredMovies: Movie[];
    rating: number;
    filterType: string,
    filterGenre: any,
    filterFromYear: string,
    filterToYear: string,
}

export interface MovieApiObject {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface Movie {
    image: string;
    title: string;
    releaseYear: string;
    rating: number;
    genreIds: number[];
}