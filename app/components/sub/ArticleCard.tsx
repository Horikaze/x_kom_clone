import Image from "next/image";
import React from "react";
type GuideCardProps = {
  image: string;
  title: string;
  sub: string;
  time: string;
  comments: number;
};

export default function ArticleCard({
  comments,
  image,
  sub,
  time,
  title,
}: GuideCardProps) {
  return (
    <div className="flex flex-col size-full cursor-pointer">
      <div className="h-2/3 relative border rounded-2xl drop-shadow-sm bg-white">
        <Image src={image} alt="guide" fill className="object-contain" />
      </div>
      <div className="flex flex-col h-1/3">
        <p className="font-semibold text-lg line-clamp-2">{title}</p>
        <p className="line-clamp-1 text-sm">{sub}</p>
        <div className="flex gap-x-1 text-xs mt-0 pt-2 font-sans">
          <p>{time}</p>·<p>{comments} komentarzy</p>
        </div>
      </div>
    </div>
  );
}
