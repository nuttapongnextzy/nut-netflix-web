import Link from "next/link";
import Image from "next/image";
import { Movie } from "../../../lib/definitions";
import { fetchMovieDetail } from '../../../lib/data';

const movies: Movie[] = Array.from({ length: 5 }, (_, i) => ({
    id: `${i + 1}`,
    title: `${i + 1}`,
    posterUrl: '/movie-poster-1.svg',
}));

const page = async (
    props: {
        params: Promise<{ id: string }>,
        searchParams?: Promise<{
            query?: string;
        }>,
    }) => {
    const params = await props.params;
    console.log(`params: ${params.id}`)

    const searchParams = await props.searchParams;
    console.log(`searchParams: ${searchParams?.query}`)

    const movie = await fetchMovieDetail(params.id);
    console.log(`movie : ${movie.title}`);

    return (
        <div className="bg-black min-h-screen">
            <div
                style={{ backgroundImage: `url(${movie.backdropUrl})` }}
                className='bg-cover sm:bg-contain bg-center bg-no-repeat h-[30vh] sm:h-[40vh]'>
            </div>

            <h1 className="text-white text-3xl font-bold p-1">
                {movie.title}
            </h1>

            <h2 className="text-white/50 text-sm font-normal p-1">
                {new Date(movie.releaseDate ?? '').getFullYear()}
            </h2>

            <div className="p-1 mt-5">
                <Link
                    href="#"
                    className="flex justify-center items-center w-full h-12 bg-white rounded-sm text-xl font-bold text-black shadow-xs hover:bg-gray-300">
                    <span>▶</span>
                    <span>Play</span>
                </Link>
            </div>

            <h3 className="text-white text-sm font-normal p-1">
                {movie.overview}
            </h3>

            <hr className="h-[0.50px] bg-white mt-10" />

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 md:grid-cols-5 gap-3 mt-2">
                {movies.map((movie, index) => (
                    <div
                        key={index}
                        className="flex justify-center"
                    >
                        <Link
                            href="/detail/1"
                            className="cursor-pointer"
                        >
                            <Image
                                src={movie.posterUrl}
                                alt="Description of image"
                                width={100}
                                height={150}
                                className=""
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page