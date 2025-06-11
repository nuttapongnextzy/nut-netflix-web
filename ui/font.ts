import { Geist, Geist_Mono, Poppins, Inter, Alumni_Sans } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
});

export const inter = Inter({
    subsets: ["latin"],
});

export const alumniSans = Alumni_Sans({
    subsets: ['latin'],
    weight: ["500"],
});