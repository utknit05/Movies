import { MovieApiObject, Movie } from './interfaces';

export const transformMovies = (movie: MovieApiObject): Movie => {
    const { poster_path, title, release_date } = movie;
    const releaseYear = release_date.substring(0,4);
    return {
        image: poster_path,
        title,
        releaseYear,
    }
}