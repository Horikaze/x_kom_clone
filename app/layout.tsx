import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "./components/main/Navbar";
import "./globals.css";
import MobileNavbar from "./components/main/MobileNavbar";

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
      </body>
    </html>
  );
}
