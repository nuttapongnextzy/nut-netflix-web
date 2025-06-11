import Link from "next/link";
import Image from "next/image";
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function MovieDetail() {
  return (
    <div className="absolute w-80 m-5 lg:w-120 bottom-0 left-1/2 -translate-x-1/2 lg:bottom-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-1/2">

      <div className="flex justify-center lg:justify-start items-center space-x-2 space-y-2">
        <Image
          src="/netflix-logo.svg"
          alt="Description of image"
          width={26.4}
          height={40}
        />
        <div className="text-zinc-400 font-medium">
          SERIES
        </div>
      </div>

      <Image
        src="/movie-title-logo.svg"
        alt="Netflix logo"
        width={878}
        height={242}
      />

      <div className="lg:hidden flex mt-3 justify-center items-center space-x-2">
        <div className="text-white">TV Mysteries</div>
        <div className="w-3 h-3 bg-white rounded-full" />
        <div className="text-white">Based on Books</div>
      </div>

      <div className="hidden lg:block text-white text-2xl font-bold mt-5">
        #1 in TV Shows Today
      </div>

      <div className="hidden lg:block text-white mt-5">
        Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger.
      </div>

      <div className="hidden lg:flex space-x-2 mt-2">
        <Link
          href="#"
          className="flex justify-center items-center w-24 h-9 bg-white rounded-sm text-xl font-bold text-black shadow-xs hover:bg-gray-300 space-x-1">
          <span>▶</span>
          <span>Play</span>
        </Link>
        <Link
          href="#"
          className="flex justify-center items-center w-40 h-9 bg-white/20 rounded-sm text-xl font-bold text-white shadow-xs hover:bg-gray-800 space-x-1">
          <InformationCircleIcon className="w-7 h-7" />
          <span>More Info</span>
        </Link>
      </div>

    </div>
  );
}