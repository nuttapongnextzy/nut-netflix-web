import Link from "next/link";
import Image from "next/image";

function Page() {
    const users = [
        { name: "DH", imageSrc: "/user-1.svg" },
        { name: "Alan", imageSrc: "/user-2.svg" },
        { name: "Sam", imageSrc: "/user-3.svg" },
        { name: "John", imageSrc: "/user-4.svg" },
        { name: "Adult", imageSrc: "/user-5.svg" },
    ];

    return (
        <div className="flex flex-col bg-black min-h-screen items-center">
            <main>
                <div>
                    <Image
                        src="/netflix-logo-large.svg"
                        alt="Description of image"
                        width={80}
                        height={25}
                        className="mt-10 mx-auto"
                    />
                </div>

                <div>
                    <h1 className="mt-30 text-white text-center text-lg font-bold">Who's watching?</h1>
                </div>

                <div className="grid grid-cols-2 gap-10 mt-10">
                    {users.map((value, index) => (
                        <div key={index}>
                            <Image
                                src={value.imageSrc}
                                alt="Description of image"
                                width={110}
                                height={110}
                            />
                            <p className="text-white text-sm font-bold text-center">
                                {value.name}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 mb-10 text-center">
                    <a className="text-white text-xl font-bold hover:text-gray-300"
                        href="#">
                        Edit
                    </a>
                </div>


            </main>
        </div>
    );
}

export default Page;