import { Movie } from "../lib/definitions";

const baseUrl = 'https://api.themoviedb.org/';
const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2E1NmVmNDJkODFiMzA4MTA0OWRmOTczN2U5YjljNiIsIm5iZiI6MTY2NDE4MzU3My44MDQsInN1YiI6IjYzMzE2ZDE1NjYzYjg3MDA4NTU5NzYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XS_qCIwHUx2j2Uft3av_OeYiQbulucDh5U4tsosxf2Q',
};
const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';

export async function fetchMovies(
    type: string,
    total: number,
) {
    const url = new URL(`${baseUrl}3/movie/${type}`);

    url.search = new URLSearchParams({
        page: randomNum(1, 5).toString(),
        language: 'en-US',
    }).toString();

    const res = await fetch(url, {
        method: 'GET',
        headers: headers,
    });

    if (!res.ok) {
        throw new Error(`TMDB fetch failed: ${res.statusText}`);
    }

    const json = await res.json();

    const movies: Movie[] = json.results.map((element) => ({
        title: element.title,
        posterUrl: `${baseImageUrl}${element.poster_path}`,
        backdropUrl: `${baseImageUrl}${element.backdrop_path}`,
        overview: element.overview,
        releaseDate: element.release_date,
    }));

    return movies.slice(0, total);
}

function randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}