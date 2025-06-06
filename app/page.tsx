import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Movie } from "../lib/definitions";
import HighlightMovies from "@/ui/home/highlight-movies";
import { Metadata } from 'next';

const movies: Movie[] = [
  { name: '1', imageUrl: '/movie-poster-1.svg' },
  { name: '1', imageUrl: '/movie-poster-1.svg' },
  { name: '1', imageUrl: '/movie-poster-1.svg' },
  { name: '1"', imageUrl: '/movie-poster-1.svg' },
  { name: '1', imageUrl: '/movie-poster-1.svg' },
];

function Page() {
  return (
    <div className="flex bg-black min-h-screen flex-col">
      <main className="">

        <div className="bg-[url('/home-bg.svg')] bg-cover bg-top-left bg-no-repeat w-full h-[70vh]">
          <div className="flex items-center justify-between px-3 pt-6">
            <Image
              src="/netflix-logo.svg"
              alt="Netflix logo"
              width={26.4}
              height={40}
            />
            <Link
              href="/login"
            >
              <MagnifyingGlassIcon
                className="w-6 h-6 text-white"
              />
            </Link>

          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-3">
          <Link
            href="#"
            className="flex justify-center items-center w-24 h-9 bg-white rounded-sm text-xl font-bold text-black shadow-xs hover:bg-gray-300 space-x-1">
            <span>▶</span>
            <span>Play</span>
          </Link>
          <Link
            href="#"
            className="flex justify-center items-center w-24 h-9 bg-white/20 rounded-sm text-xl font-bold text-white shadow-xs hover:bg-gray-800 space-x-1">
            <span>+</span>
            <span>My List</span>
          </Link>
        </div>

        <div className="p-2">
          <HighlightMovies
            title={"Trending Now"}
            movies={movies}
          />

          <HighlightMovies
            title={"Must-Watch"}
            movies={movies}
          />

          <HighlightMovies
            title={"Only on NETFLIX"}
            movies={movies}
          />
        </div>


      </main>
    </div>
  );
}

export default Page;

export const metadata: Metadata = {
  title: 'Home - Nutflix',
};
