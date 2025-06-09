import React from "react"
import { Movie } from "../../lib/definitions";
import Link from "next/link";
import Image from "next/image";

const movies: Movie[] = [
  {
    name: 'Spider Man',
    imageUrl: '/movie-poster-1.svg',
    portraitImageUrl: '/movie-poster-1.svg',
    landscapeImageUrl: '/movie-poster-landscape-1.svg',
  },
  {
    name: 'Star Wars',
    imageUrl: '/movie-poster-1.svg',
    portraitImageUrl: '/movie-poster-1.svg',
    landscapeImageUrl: '/movie-poster-landscape-1.svg',
  },
  {
    name: 'The Matrix',
    imageUrl: '/movie-poster-1.svg',
    portraitImageUrl: '/movie-poster-1.svg',
    landscapeImageUrl: '/movie-poster-landscape-1.svg',
  },
  {
    name: 'Titanic',
    imageUrl: '/movie-poster-1.svg',
    portraitImageUrl: '/movie-poster-1.svg',
    landscapeImageUrl: '/movie-poster-landscape-1.svg',
  },
  {
    name: 'Squid Game',
    imageUrl: '/movie-poster-1.svg',
    portraitImageUrl: '/movie-poster-1.svg',
    landscapeImageUrl: '/movie-poster-landscape-1.svg',
  },
];

const page = () => {
  return (
    <div className="flex flex-col bg-black min-h-screen">
      <div className="mt-10">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Search anime, movies, shows.."
          className="w-full h-12 bg-white/20 opacity-90 px-3 py-1.5 outline-1 rounded-[1px] text-white placeholder:text-white/50 placeholder:text-xs placeholder:font-normal">
        </input>
      </div>

      <h1 className="text-white font-bold mt-3 p-2">Recommended Animes & Movies</h1>

      <div className="mt-1 p-2">
        {movies.map((movie, index) => (
          <div
            key={index}
            className=""
          >
            <Link
              href="/detail/1"
              className="cursor-pointer"
            >
              <div className="flex justify-between items-center m-2">
                <div className="flex items-center space-x-1">
                  <Image
                    src={movie.imageUrl}
                    alt="Description of image"
                    width={100}
                    height={150}
                    className=""
                  />
                  <div className="text-white text-sm font-bold">
                    {movie.name}
                  </div>
                </div>

                <div className="text-white">
                  ▶
                </div>
              </div>

            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page