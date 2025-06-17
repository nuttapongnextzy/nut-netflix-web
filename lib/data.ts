import { Movie, Profile } from "@/lib/definitions";

const baseUrl = 'http://localhost:4000/api/';

export async function fetchMovies(
    type: string,
    total: number,
) {
    const url = new URL(`${baseUrl}movies/${type}`);

    url.search = new URLSearchParams({
        total: total.toString(),
    }).toString();

    const res = await fetch(url, {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error(`TMDB fetch failed: ${res.statusText}`);
    }

    const json = await res.json();

    const movies: Movie[] = json.map((element) => ({
        id: element.id,
        title: element.title,
        posterUrl: element.posterUrl,
        backdropUrl: element.backdropUrl,
        overview: element.overview,
        releaseDate: element.releaseDate,
    }));

    return movies;
}

export async function fetchMovieDetail(
    id: string,
) {
    const url = new URL(`${baseUrl}movies/${id}`);

    url.search = new URLSearchParams({
        language: 'en-US',
    }).toString();

    const res = await fetch(url, {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error(`TMDB fetch failed: ${res.statusText}`);
    }

    const element = await res.json();

    const movie: Movie = {
        id: element.id,
        title: element.title,
        posterUrl: element.posterUrl,
        backdropUrl: element.backdropUrl,
        overview: element.overview,
        releaseDate: element.releaseDate,
    }

    return movie;
}

export async function fetchProfiles() {
    const url = new URL(`${baseUrl}profiles`);

    const res = await fetch(url, {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error(`TMDB fetch failed: ${res.statusText}`);
    }

    const json = await res.json();

    const profiles: Profile[] = json.map((element) => ({
        username: element.username,
        imageUrl: element.imageUrl,
    }));

    return profiles;
}

