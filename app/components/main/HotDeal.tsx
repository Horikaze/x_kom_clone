"use client";
import { producs } from "@/app/constants/products";
import ProductCard from "../sub/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function HotDeal() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="flex w-full gap-x-8">
      <div className="flex flex-col relative lg:w-1/3 gap-y-6 min-w-[400px] w-full text-center">
        <div className="size-full flex flex-col gap-y-5 rounded-2xl border-2 border-[#1a1a1a] p-6">
          <p className="font-semibold text-2xl text-start">Gorący strzał</p>
          <div className="aspect-square w-2/3 relative self-center">
            <Image
              src={
                "https://cdn.x-kom.pl/i/img/promotions/hot-shot-large,,hs_2024_3_18_13_47_7.PNG"
              }
              alt="hotdeal"
              fill
              className="object-contain"
            />
          </div>
          <p className="line-clamp-2 text-2xl">
            MSI MPG A1000G 1000W 80 Plus Gold ATX 3.0
          </p>
          <p className="text-3xl font-semibold">599,00 zł</p>
          <p className="text-sm">
            <span className="line-through">699,00 zł</span> - najniższa cena z
            30 dni przed obniżką
          </p>
          <div className="flex items-center justify-between">
            <p>
              Pozostało: <span className="font-semibold text-xl">20</span>
            </p>
            <p>
              Sprzedano: <span className="font-semibold text-xl">80</span>
            </p>
          </div>
          <div className="h-4 w-full bg-[#dadada] rounded-full overflow-hidden">
            <div className="h-full w-1/5 bg-[#0e85e7]" />
          </div>
          <div className="w-full h-[1px] bg-black/30" />
          <p className="text-sm">Śpiesz się, oferta kończy się za: </p>
          <div className="flex gap-x-2 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="size-14 bg-[#dadada] rounded-lg flex flex-col items-center justify-center">
                <p className="text-2xl">14</p>
              </div>
              <p className="text-sm">godz.</p>
            </div>
            <p className="text-2xl pb-6">:</p>
            <div className="flex flex-col items-center justify-center">
              <div className="size-14 bg-[#dadada] rounded-lg flex flex-col items-center justify-center">
                <p className="text-2xl">09</p>
              </div>
              <p className="text-sm">min.</p>
            </div>
            <p className="text-2xl pb-6">:</p>
            <div className="flex flex-col items-center justify-center">
              <div className="size-14 bg-[#dadada] rounded-lg flex flex-col items-center justify-center">
                <p className="text-2xl">{count}</p>
              </div>
              <p className="text-sm">sek.</p>
            </div>
          </div>
        </div>
        <div
          className="absolute right-10 top-10 rounded-xl h-16 w-24 bg-[#6e6e6e]
        flex flex-col text-white items-center justify-center
        "
        >
          <p className="text-sm">Oszczędź</p>
          <p className="text-lg">100zł</p>
        </div>
      </div>
      <div className="lg:flex hidden w-full flex-col gap-y-4">
        <div className="w-full h-[1px] bg-black/20" />
        <h2 className="text-2xl font-semibold">Hity tygodnia</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-2 size-full ">
          {producs.slice(0, 8).map((e) => (
            <ProductCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
}
