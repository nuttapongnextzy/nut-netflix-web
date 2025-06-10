import Link from "next/link";
import Image from "next/image";
import { PlusIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { Movie } from "../lib/definitions";
import HighlightMovies from "@/ui/home/highlight-movies";
import { Metadata } from 'next';
import TopBar from '../ui/home/top-bar';
import MovieDetail from '../ui/home/movie-detail';
import { fetchMovies } from '../lib/data';

// const movies: Movie[] = [
//   { name: '1', portraitImageUrl: '/movie-poster-1.svg', landscapeImageUrl: '/movie-poster-lanscape-1.svg' },
//   { name: '2', portraitImageUrl: '/movie-poster-1.svg', landscapeImageUrl: '/movie-poster-lanscape-1.svg' },
//   { name: '3', portraitImageUrl: '/movie-poster-1.svg', landscapeImageUrl: '/movie-poster-lanscape-1.svg' },
//   { name: '4', portraitImageUrl: '/movie-poster-1.svg', landscapeImageUrl: '/movie-poster-lanscape-1.svg' },
//   { name: '5', portraitImageUrl: '/movie-poster-1.svg', landscapeImageUrl: '/movie-poster-lanscape-1.svg' },
// ];

// const movies: Movie[] = Array.from({ length: 5 }, (_, i) => ({
//   name: `${i + 1}`,
//   imageUrl: '/movie-poster-1.svg',
//   portraitImageUrl: '/movie-poster-1.svg',
//   landscapeImageUrl: '/movie-poster-landscape-1.svg',
// }));

async function Page() {
  // const [movies1, movies2, movies3] = await Promise.all([
  //   fetchMovies('MOVIE', 5),
  //   fetchMovies('TV', 5),
  //   fetchMovies('TV_EPISODE', 5),
  // ]);

  const movies1 = await fetchMovies('MOVIE', 3);
  const movies2 = await fetchMovies('TV', 3);
  const movies3 = await fetchMovies('TV_EPISODE', 3);

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
          title={"Trending Now"}
          movies={movies1}
        />

        <HighlightMovies
          title={"Must-Watch"}
          movies={movies2}
        />

        <HighlightMovies
          title={"Only on NETFLIX"}
          movies={movies3}
        />
      </div>
    </div>
  );
}

export default Page;

export const metadata: Metadata = {
  title: 'Home - Nutflix',
};
