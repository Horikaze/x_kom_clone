import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import MobileNavbar from "./components/main/MobileNavbar";
import Navbar from "./components/main/Navbar";
import "./globals.css";

const lato = Lato({ weight: "400", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "x-kom",
  description: "Created by horikaze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} px-3 md:px-6 xl:px-16 flex flex-col items-center`}
      >
        <Navbar />
        <MobileNavbar />
        <main className="size-full max-w-[1440px] pt-36 pb-40">{children}</main>
        <Link
          href={"https://github.com/Horikaze/x_kom_clone"}
          className="fixed bottom-2 right-2"
          target="_blank"
        >
          <FaGithub className="size-8" />
        </Link>
      </body>
    </html>
  );
}
