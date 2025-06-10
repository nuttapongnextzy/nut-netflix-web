export type User = {
    name: string;
    imageUrl: string;
}

export type Movie = {
    title: string;
    posterUrl: string;
    backdropUrl?: string;
    overview?: string;
    releaseDate?: string;
}