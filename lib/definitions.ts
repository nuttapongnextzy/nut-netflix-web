export type User = {
    name: string;
    imageUrl: string;
}

export type Movie = {
    id: string;
    title: string;
    posterUrl: string;
    backdropUrl?: string;
    overview?: string;
    releaseDate?: string;
}