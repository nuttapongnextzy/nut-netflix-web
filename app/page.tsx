import Link from "next/link";
import { PlusIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import HighlightMovies from "@/ui/home/highlight-movies";
import { Metadata } from 'next';
import TopBar from '../ui/home/top-bar';
import MovieDetail from '../ui/home/movie-detail';
import { fetchMovies } from '../lib/data';

async function Page() {
  const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
    fetchMovies('popular', 5),
    fetchMovies('top_rated', 5),
    fetchMovies('upcoming', 5),
  ]);

  return (
    <div className="flex bg-black min-h-screen flex-col">
      <div className="relative bg-[url('/main-bg.svg')] bg-cover bg-center bg-no-repeat w-full h-[70vh]">
        <TopBar />
        <div className="lg:hidden flex justify-evenly mt-2">
          <Link href="#" className="text-zinc-300 text-xl font-normal">TV Shows</Link>
          <Link href="#" className="text-zinc-300 text-xl font-normal">Movies</Link>
          <Link href="#" className="text-zinc-300 text-xl font-normal">Categories</Link>
        </div>
        <MovieDetail />
      </div>

      <div className="lg:hidden flex justify-evenly items-center space-x-6 mt-3">
        <Link
          href="#"
          className="flex flex-col items-center text-white font-bold">
          <PlusIcon className="w-7 h-7" />
          <span>My List</span>
        </Link>
        <Link
          href="#"
          className="flex justify-center items-center w-24 h-9 bg-white rounded-sm text-xl font-bold text-black shadow-xs hover:bg-gray-300 space-x-1">
          <span>▶</span>
          <span>Play</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center text-white font-bold">
          <InformationCircleIcon className="w-7 h-7" />
          <span>Info</span>
        </Link>
      </div>

      <div className="p-2">
        <HighlightMovies
          title={"Popular"}
          movies={popularMovies}
        />

        <HighlightMovies
          title={"Top Rated"}
          movies={topRatedMovies}
        />

        <HighlightMovies
          title={"Upcoming"}
          movies={upcomingMovies}
        />
      </div>
    </div>
  );
}

export default Page;

export const metadata: Metadata = {
  title: 'Home - Nutflix',
};
