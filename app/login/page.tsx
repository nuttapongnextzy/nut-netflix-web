import Link from "next/link";
import Image from "next/image";
import { Metadata } from 'next';

function Page() {
    return (
        <div className="flex min-h-screen flex-col bg-[url('/login-bg.svg')] bg-fit">
            <div className="flex flex-col items-center mt-20">
                <Image
                    src="/netflix-logo.svg"
                    alt="Description of image"
                    width={26.4}
                    height={40}
                />

                <form className="">
                    <div className="mt-50">
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

                    <div className="flex mt-10">
                        {/* <button className="w-full h-12 bg-red-600 rounded-[1px] text-xl font-bold text-white shadow-xs hover:bg-red-500">
                            Sign in
                        </button> */}

                        <Link
                            href="/select-profile"
                            className="flex items-center justify-center w-full h-12 bg-red-600 rounded-[1px] text-xl font-bold text-white shadow-xs hover:bg-red-500">
                            Sign in
                        </Link>
                    </div>

                    <Link
                        href="#"
                        className="text-sm font-semibold text-white hover:text-gray-200 mt-2 ml-40">
                        Forgot password?
                    </Link>
                </form>

                <p className="text-lg font-bold text-white text-center mt-90">
                    <span>Don't have an account?</span>
                    <Link
                        href="#"
                        className="font-bold text-red-700 hover:text-red-600 ml-1">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Page;

export const metadata: Metadata = {
    title: 'Login',
};