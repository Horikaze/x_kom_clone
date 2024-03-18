"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type CarouselProps = {
  children: React.ReactNode;
  height: number;
};

export function Carousel({ children, height }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [canGoLeft, setCanGoLeft] = useState(true);
  const [canGoRight, setCanGoRight] = useState(false);
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollTo(emblaApi.selectedScrollSnap() - 3);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollTo(emblaApi.selectedScrollSnap() + 3);
    }
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setCanGoRight(emblaApi!.canScrollPrev());
    setCanGoLeft(emblaApi!.canScrollNext());
  }, []);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full">
      <div className="relative z-20">
        <div className="rounded-2xl overflow-x-hidden" ref={emblaRef}>
          <div className={`flex h-${height}`}>{children}</div>
        </div>
        {canGoRight ? (
          <button
            onClick={scrollPrev}
            className="absolute p-1.5 z-20 top-1/2 left-0 rounded-lg -translate-y-1/2 -translate-x-1/2 bg-white drop-shadow-focus hover:bg-[#ebebeb] transition-all"
          >
            <MdKeyboardArrowLeft className="size-7" />
          </button>
        ) : null}
        {canGoLeft ? (
          <button
            onClick={scrollNext}
            className="absolute p-1.5 z-20 top-1/2 right-0 rounded-lg -translate-y-1/2 translate-x-1/2 bg-white drop-shadow-focus hover:bg-[#ebebeb] transition-all"
          >
            <MdKeyboardArrowRight className="size-7" />
          </button>
        ) : null}
      </div>
    </section>
  );
}
