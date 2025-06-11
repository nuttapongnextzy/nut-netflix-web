import React from "react"
import { fetchMovies } from '@/lib/data';
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { randomNum } from "@/lib/utils/number-utils";

const page = async () => {
  const [recommendedMovies] = await Promise.all([
    fetchMovies('popular', randomNum(5, 10)),
  ]);

  return (
    <div className="flex flex-col bg-black min-h-screen">
      <div className="relative mt-10">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-6 h-6" />

        <Link
          href='#'
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 z-10"
        >
          <MicrophoneIcon className="w-6 h-6" />
        </Link>

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search anime, movies, shows.."
          className="px-10 w-full h-12 bg-white/20 opacity-90 py-1.5 outline-1 rounded-[1px] text-white placeholder:text-white/50 placeholder:text-xs placeholder:font-normal">
        </input>
      </div>

      <h1 className="text-white font-bold mt-3 p-2">Recommended Animes & Movies</h1>

      <div className="flex flex-col p-1">
        {recommendedMovies.map((movie, index) => (
          <div
            key={index}
            className="flex flex-col justify-between m-1"
          >
            <Link
              href={`/detail/${movie.id}`}
              className="cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <Image
                    src={movie.backdropUrl ?? movie.posterUrl}
                    alt="Movie image"
                    width={100}
                    height={150}
                    className=""
                  />
                  <div className="text-white text-sm font-bold">
                    {movie.title}
                  </div>
                </div>

                <PlayCircleIcon className="w-6 h-6" />
              </div>

            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page