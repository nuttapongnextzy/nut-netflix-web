import Link from "next/link";
import Image from "next/image";
import { Movie } from "../../../lib/definitions";

const movies: Movie[] = Array.from({ length: 5 }, (_, i) => ({
  title: `${i + 1}`,
  imageUrl: '/movie-poster-1.svg',
}));

const page = async (
    props: {
        params: Promise<{ id: string }>,
        searchParams?: Promise<{
            query?: string;
        }>,
    }) => {
    const params = await props.params;
    console.log(`params: ${params.id}}`)

    const searchParams = await props.searchParams;
    console.log(`searchParams: ${searchParams?.query}`)

    return (
        <div className="bg-black min-h-screen">
            <div className="relative h-60">
                <Image
                    src="/movie-screenshot-1.svg"
                    alt=""
                    fill
                    // width={360}
                    // height={180}
                    className="object-cover"
                />
            </div>

            <h1 className="text-white text-2xl font-bold p-1">
                Title
            </h1>

            <h2 className="text-white/50 text-[10px] font-normal p-1">
                2015
            </h2>

            <div className="p-1 mt-5">
                <Link
                    href="#"
                    className="flex justify-center items-center w-full h-12 bg-white rounded-sm text-xl font-bold text-black shadow-xs hover:bg-gray-300">
                    <span>▶</span>
                    <span>Play</span>
                </Link>
            </div>

            <h3 className="text-white text-[10px] font-normal p-1">
                Fifty Shades of Grey is a 2011 erotic romance novel by British author E. L. James. It became the first instalment in the Fifty Shades novel series that follows the deepening relationship between a college graduate, Anastasia Steele, and a young business magnate, Christian Grey.
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
                                src={movie.imageUrl}
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