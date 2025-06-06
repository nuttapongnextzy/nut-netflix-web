import Link from "next/link";
import Image from "next/image";
import { Movie } from "../../lib/definitions";

export default function HighlightMovies({ title, movies }: { title: String, movies: Movie[] }) {
    return (
        <div>
            <p className="text-white text-lg font-bold px-0 mt-5">
                {title}
            </p>

            <div className="flex space-x-1 mt-1">
                {movies.map((movie, index) => (
                    <div
                        key={index}
                    >
                        <Link
                            href="/detail/1"
                            className="cursor-pointer"
                        >
                            <Image
                                src={movie.imageUrl}
                                alt="Description of image"
                                width={100}
                                height={150}
                                className="h-auto"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}