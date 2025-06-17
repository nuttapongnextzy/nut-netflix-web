import Link from "next/link";
import Image from "next/image";
import ProfileTable from "@/ui/select-profile/profile-table";
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import { fetchProfiles } from "@/lib/data";

async function Page() {
    const profiles = await fetchProfiles();

    return (
        <div className="flex flex-col bg-black min-h-screen items-center">
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

            <ProfileTable profiles={profiles} />

            <div className="mt-20 mb-10">
                <Link
                    href="#"
                    className="flex items-center justify-center text-white text-xl font-bold hover:text-gray-300"
                >
                    <span>
                        Edit
                    </span>
                    <span>
                        <PencilSquareIcon className="w-5 h-5" />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Page;

export const metadata: Metadata = {
    title: 'Select Profile',
};