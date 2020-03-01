import { MovieApiObject, Movie } from './interfaces';

export const transformMovies = (movie: MovieApiObject): Movie => {
    const { poster_path, title, release_date, genre_ids, vote_average } = movie;
    const releaseYear = release_date.substring(0,4);
    const rating = Math.round(vote_average/2);
    return {
        image: poster_path,
        title,
        releaseYear,
        rating,
        genreIds: genre_ids,
    }
}