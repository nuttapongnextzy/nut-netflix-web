import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex bg-blue-950 min-h-screen flex-col items-center justify-center">
            <main>
                <div className="flex flex-col items-center justify-center px-6 py-12">
                    <Image
                        src="/netflix-logo.svg"
                        alt="Description of image"
                        width={26.4}
                        height={40}
                    />

                    <form className="">
                        <div className="mt-10">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email"
                                className="w-72 h-12 bg-white opacity-90 px-3 py-1.5 outline-1 rounded-[1px]">
                            </input>
                        </div>

                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                className="w-72 h-12 bg-white opacity-90 px-3 py-1.5 outline-1 rounded-[1px]">
                            </input>
                        </div>

                        <div className="mt-10">
                            <button className="w-full h-12 bg-red-600 rounded-[1px] text-xl font-bold text-white shadow-xs hover:bg-red-500">
                                Sign in
                            </button>
                        </div>

                        <a
                            href="#"
                            className="text-sm font-semibold text-white hover:text-gray-200 mt-2 ml-40">
                            Forgot password?
                        </a>
                    </form>

                    <p className="text-lg font-bold text-white text-center mt-50">
                        <span>Don't have an account?</span>
                        <a href="#" className="font-bold text-red-700 hover:text-red-600 ml-1">Create one</a>
                    </p>
                </div>
            </main>
        </div>
    );
}