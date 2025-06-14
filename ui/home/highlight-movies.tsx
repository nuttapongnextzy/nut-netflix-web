import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/lib/definitions";

export default function HighlightMovies({
    title, movies,
}: {
    title: String, movies: Movie[],
}) {
    return (
        <div>
            <p className="text-white text-lg font-bold px-0 mt-2">
                {title}
            </p>

            <div className="flex space-x-1 mt-0">
                {movies.map((movie, index) => (
                    <div
                        key={index}
                    >
                        <Link
                            href={`/detail/${movie.id}`}
                            className="cursor-pointer block"
                        >
                            <div className="lg:hidden">
                                <Image
                                    src={movie.posterUrl}
                                    alt="Movie Poster"
                                    width={100}
                                    height={150}
                                    className={"w-[100px] h-[150px]"}
                                />
                            </div>
                            <div className="hidden lg:block w-[150px]">
                                <Image
                                    src={movie.backdropUrl ?? movie.posterUrl}
                                    alt="Movie Poster"
                                    width={389}
                                    height={219}
                                    className={"w-[150px] h-[100px]"}
                                />
                                <div className="text-gray-400 text-xs max-w-3xs text-center font-bold line-clamp-2">
                                    {movie.title}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}