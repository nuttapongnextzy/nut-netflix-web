import Link from "next/link";
import Image from "next/image";
import { Movie } from "../../lib/definitions";

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
                            href="/detail/1"
                            className="cursor-pointer block"
                        >
                            <div className="lg:hidden">
                                <Image
                                    src={movie.portraitImageUrl}
                                    alt="Description of image"
                                    width={100}
                                    height={150}
                                    className={"w-[100px] h-[150px]"}
                                />
                            </div>
                             <div className="hidden lg:block">
                                <Image
                                    src={movie.landscapeImageUrl}
                                    alt="Description of image"
                                    width={389}
                                    height={219}
                                    className={"w-[150px] h-[100px]"}
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}