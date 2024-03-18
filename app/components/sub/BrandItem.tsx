import Image from "next/image";

export default function BrandItem({ img }: { img: string }) {
  return (
    <div className="relative size-full grayscale hover:grayscale-0 transition-all cursor-pointer">
      <Image src={img} alt="brand" fill />
    </div>
  );
}
