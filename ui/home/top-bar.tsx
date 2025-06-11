import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-3 pt-6 lg:pt-0">
      <Image
        src="/netflix-logo.svg"
        alt="Netflix logo"
        width={26.4}
        height={40}
        className="block lg:hidden"
      />

      <div className="hidden lg:flex space-x-10 items-center">
        <Image
          src="/netflix-logo-large.svg"
          alt="Netflix logo"
          width={139}
          height={38}
        />

        <div className="flex space-x-5">
          <Link href="#" className="text-white text-sm font-bold">Home</Link>
          <Link href="#" className="text-zinc-300 text-sm font-normal">TV Shows</Link>
          <Link href="#" className="text-zinc-300 text-sm font-normal">Movies</Link>
          <Link href="#" className="text-zinc-300 text-sm font-normal">News & Popular</Link>
          <Link href="#" className="text-zinc-300 text-sm font-normal">Browse by Languages</Link>
        </div>
      </div>


      <Link
        href="/search"
      >
        <MagnifyingGlassIcon
          className="w-6 h-6 text-white"
        />
      </Link>
    </div>
  );
}