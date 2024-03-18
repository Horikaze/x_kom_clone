import Image from "next/image";
import { BsBox } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "../sub/ProductCard";
import { producs } from "@/app/constants/products";
export default function UnboxRecomended() {
  return (
    <div className="flex w-full gap-x-8">
      <div className="flex flex-col lg:w-1/3 gap-y-6 min-w-[400px] w-full">
        <div className="bg-[#f9f6fe] pt-6 px-11 pb-10 h-[650px] rounded-2xl border border-blue-100 hover:border-blue-300 flex flex-col items-center cursor-pointer justify-between ">
          <div className="flex gap-x-2 items-center">
            <BsBox className="size-5" />
            <p className="text-2xl">un.Box</p>
          </div>
          <div className="relative w-full aspect-[253/139]">
            <Image
              src={
                "https://assets.x-kom.pl/public-spa/xkom/13bc9f29d5ec5d78.png"
              }
              alt="unbox"
              fill
            />
          </div>
          <div>
            <p className="font-semibold text-2xl text-center">
              Codziennie losuj 3 zniżki
            </p>
            <p>W boxach znajdziesz produkty nawet za 1 zł</p>
          </div>
          <div className=" h-[48px] mt-3 w-full bg-[#0082fa] py-3 px-6 text-white flex items-center justify-center rounded-lg gap-x-1 hover:bg-[#0070cc] transition-colors">
            <p>Losuj zniżki</p>
            <MdKeyboardArrowRight className="size-6" />
          </div>
        </div>
        <div className="h-[90px] bg-[#f2f2f2] w-full rounded-2xl p-4 border-dashed border">
          <p className="font-semibold text-lg">Gdzie jest Gorący Strzał</p>
          <p>Przenieśliśmy go niżej. Przewiń stronę w dół</p>
        </div>
      </div>
      <div className="lg:flex hidden w-full flex-col gap-y-4">
        <div className="w-full h-[1px] bg-black/20" />
        <h2 className="text-2xl font-semibold">Polecamy</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-2 size-full ">
          {producs.slice(0, 8).map((e) => (
            <ProductCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
}
