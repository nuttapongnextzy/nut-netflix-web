import Link from "next/link";
import Image from "next/image";
import { User } from "@/lib/definitions";

export default function UserTable({users}: {users: User[]}) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
            {users.map((user, index) => (
                <Link
                    href="/"
                    key={index}
                    className="cursor-pointer"
                >
                    <Image
                        src={user.imageUrl}
                        alt="Description of image"
                        width={110}
                        height={110}
                    />
                    <p className="text-white text-sm font-bold text-center">
                        {user.name}
                    </p>
                </Link>
            ))}
        </div>
    );
}

