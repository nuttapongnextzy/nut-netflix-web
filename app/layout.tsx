import type { Metadata } from "next";
import { poppins, alumniSans } from "@/ui/font";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s - Nutflix',
    default: 'Nutflix',
  },
  description: "Nutflix is inspired by Netflix — but it's not Netflix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
