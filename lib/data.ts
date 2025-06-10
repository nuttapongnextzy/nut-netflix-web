import { Movie } from "../lib/definitions";

const headers = {
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
    'x-rapidapi-key': 'd6c331a93dmsh50acb261fb544bbp104233jsnf173aa315856',
};

const baseUrl = 'https://online-movie-database.p.rapidapi.com';

export async function fetchMovies(
    type: string,
    total: number,
) {
    const movieIds = await fetchMovieIds(type, total);
    const movies = await Promise.all(movieIds.map(fetchMovie));

    return movies;
}

async function fetchMovieIds(
    type: string,
    total: number,
) {
    const url = new URL(`${baseUrl}/title/v2/get-coming-soon`);

    url.search = new URLSearchParams({
        comingSoonType: type,
        first: total.toString(),
        country: 'US',
        language: 'en-US',
    }).toString();

    const res = await fetch(url, {
        method: 'GET',
        headers: headers,
    });

    const data = await res.json();

    // console.log(`response: ${res}`);
    // console.log(`data: ${data.data.comingSoon.edges[0].node.id}`);

    const movieIds: string[] = data.data.comingSoon.edges.map((element) => element.node.id);

    return movieIds;
}

async function fetchMovie(movieId: string) {
    const url = new URL(`${baseUrl}/title/v2/get-details`);

    url.search = new URLSearchParams({
        tconst: movieId,
        country: 'US',
        language: 'en-US',
    }).toString();

    const res = await fetch(url, {
        method: 'GET',
        headers: headers,
    });

    const data = await res.json();

    console.log(`response: ${res.status}`);
    console.log(`data: ${data}`);

    const title = data?.data?.title?.titleText?.text ?? '';
    const imageUrl = data?.data?.title?.primaryImage?.url ?? '';
    // const imageUrl = '/movie-poster-1.svg'

    const movie: Movie = {
        title: title,
        imageUrl: imageUrl,
    };

    return movie;
}