import Link from "next/link";
import HighlightMovies from "@/ui/home/highlight-movies";
import { fetchMovieDetail, fetchMovies } from '@/lib/data';
import { PlusIcon, HandThumbUpIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { randomNum } from "@/lib/utils/number-utils";

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

    const [movie, moreMovies] = await Promise.all([
        fetchMovieDetail(params.id),
        fetchMovies('popular', randomNum(2, 4)),
    ]);

    return (
        <div className="flex flex-col bg-black min-h-screen">
            <div
                style={{ backgroundImage: `url(${movie.backdropUrl})` }}
                className='bg-cover sm:bg-contain bg-center bg-no-repeat h-[30vh] sm:h-[40vh]'>
            </div>

            <h1 className="text-white text-3xl font-bold p-1 sm:text-center">
                {movie.title}
            </h1>

            <h2 className="text-white/50 text-sm font-normal p-1 sm:text-center">
                {new Date(movie.releaseDate ?? '').getFullYear()}
            </h2>

            <div className="flex p-2 mt-5">
                <Link
                    href="#"
                    className="flex w-full h-12 justify-center items-center bg-white rounded-sm text-xl font-bold text-black shadow-xs hover:bg-gray-300">
                    <span>▶</span>
                    <span>Play</span>
                </Link>
            </div>

            <h3 className="text-white text-sm font-normal p-2">
                {movie.overview}
            </h3>

            <div className="flex space-x-5 p-5 sm:space-x-20 sm:justify-center mt-5">
                <Link
                    href="#"
                    className="flex flex-col items-center space-y-1 text-sm text-white font-normal">
                    <PlusIcon className="w-6 h-6" />
                    <span>My List</span>
                </Link>
                <Link
                    href="#"
                    className="flex flex-col items-center space-y-1 text-sm text-white font-normal">
                    <HandThumbUpIcon className="w-6 h-6" />
                    <span>Rate</span>
                </Link>
                <Link
                    href="#"
                    className="flex flex-col items-center space-y-1 text-sm text-white font-normal">
                    <PaperAirplaneIcon className="w-6 h-6" />
                    <span>Share</span>
                </Link>
            </div>

            <hr className="h-[0.50px] bg-white" />

            <div className="m-1">
                <HighlightMovies
                    title={"More Like This"}
                    movies={moreMovies}
                />
            </div>

        </div>
    )
}

export default page