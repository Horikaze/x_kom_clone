import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
};

export default function ProductCard({ image, price, title }: ProductCardProps) {
  return (
    <div className="size-full flex flex-col group p-2 bg-white rounded-lg hover:drop-shadow-card transition-all cursor-pointer">
      <div className="flex justify-end items-center">
        <div className="p-1 rounded-lg hover:bg-[#ebebeb] group-hover:text-black  text-white transition-all">
          <CiHeart className="size-6 " />
        </div>
      </div>
      <div>
        <div className="relative w-full aspect-[6/5]">
          <Image src={image} alt="product" fill className="object-center" />
        </div>
        <p className="line-clamp-2">{title}</p>
      </div>
      <p className="pt-2 font-sans mt-auto">{price} zł</p>
      <div className="absolute bottom-2 right-2 p-1 rounded-lg group-hover:opacity-100 opacity-0 border transition-all border-[#119e00] text-[#119e00] hover:text-white hover:bg-[#119e00]">
        <PiShoppingCartSimpleLight className="size-6" />
      </div>
    </div>
  );
}
