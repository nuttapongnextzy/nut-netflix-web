import Link from "next/link";
import Image from "next/image";
import { Profile } from "@/lib/definitions";

export default function ProfileTable({profiles}: {profiles: Profile[]}) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
            {profiles.map((profile, index) => (
                <Link
                    href="/"
                    key={index}
                    className="cursor-pointer"
                >
                    <Image
                        src={profile.imageUrl}
                        alt="Description of image"
                        width={110}
                        height={110}
                    />
                    <p className="text-white text-sm font-bold text-center">
                        {profile.username}
                    </p>
                </Link>
            ))}
        </div>
    );
}

