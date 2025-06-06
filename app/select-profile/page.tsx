import Link from "next/link";
import Image from "next/image";
import UserTable from "@/ui/select-profile/user-table";
import { User } from "../../lib/definitions";
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

const users: User[] = [
    { name: 'DH', imageUrl: '/user-1.svg' },
    { name: 'Alan', imageUrl: '/user-2.svg' },
    { name: 'Sam', imageUrl: '/user-3.svg' },
    { name: 'John"', imageUrl: '/user-4.svg' },
    { name: 'Adult', imageUrl: '/user-5.svg' },
];

function Page() {
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

                <UserTable users={users} />

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


            </main>
        </div>
    );
}

export default Page;

export const metadata: Metadata = {
  title: 'Select Profile',
};