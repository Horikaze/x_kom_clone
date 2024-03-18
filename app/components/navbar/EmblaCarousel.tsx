"use client";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export function EmblaCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    setSelectedIndex(emblaApi!.selectedScrollSnap());
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    setSelectedIndex(emblaApi!.selectedScrollSnap());
  }, [emblaApi]);

  const images = [
    {
      img: "https://cdn.x-kom.pl/i/img/banners/1442x316,,15b500d6b499475182f633efc53b603d.jpg",
      title: "wyprzedaż z rabatami do 54%",
    },
    {
      img: "https://cdn.x-kom.pl/i/img/banners/1442x316,,55f1414ddf914cafa4550e4fbb497d4d.jpg",
      title: "produkty za 1 zł na Wielkanoc",
    },
    {
      img: "https://cdn.x-kom.pl/i/img/banners/1442x316,,0672ca84c02b44da9c79ba739e97fb7f.jpg",
      title: "Laptop dla nauczyciela",
    },
    {
      img: "https://cdn.x-kom.pl/i/img/banners/1442x316,,17f09703833c4aefa58d9797fd713a15.jpg",
      title: "Odbierz Galaxy Fit3",
    },
    {
      img: "https://cdn.x-kom.pl/i/img/banners/1442x316,,fab36e9b38bf42c2a314951805d3252b.jpg",
      title: "usługa wynajmu sprzętu",
    },
    {
      img: "https://cdn.x-kom.pl/i/img/banners/1442x316,,e7bcea61b2ea429ab3934726ded099d1.jpg",
      title: "Wielkanoc z al.to",
    },
  ];

  const onSelect = useCallback(
    (emblaApi: { selectedScrollSnap: () => SetStateAction<number> }) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    },
    []
  );
  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  console.log(selectedIndex);
  return (
    <section className="embla w-full relative">
      <div className="relative drop-shadow-sm">
        <div className="embla__viewport rounded-2xl" ref={emblaRef}>
          <div className="embla__container">
            {images.map((e, index) => (
              <div
                className="embla__slide aspect-[785/172] relative"
                key={index}
              >
                <Image
                  fill
                  quality={100}
                  src={e.img}
                  alt="123"
                  className="object-cover cursor-pointer rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute p-1.5 z-20 top-1/2 left-0 rounded-lg -translate-y-1/2 -translate-x-1/2 bg-white drop-shadow-focus hover:bg-[#ebebeb] transition-all"
        >
          <MdKeyboardArrowLeft className="size-7" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute p-1.5 z-20 top-1/2 right-0 rounded-lg -translate-y-1/2 translate-x-1/2 bg-white drop-shadow-focus hover:bg-[#ebebeb] transition-all"
        >
          <MdKeyboardArrowRight className="size-7" />
        </button>
      </div>
      <div className="flex px-5 w-full">
        {images.map(({ img, title }, index) => (
          <div
            onClick={() => {
              emblaApi!.scrollTo(index);
            }}
            key={title}
            className={`
            ${index == selectedIndex ? "font-semibold" : "font-sans"}
            relative w-full rounded-b-md flex items-center justify-center text-sm text-center px-2 bg-white hover:bg-[#ebebeb] transition-colors py-2.5 cursor-pointer`}
          >
            <div
              className={`absolute top-0 w-5/6 h-[4px] ${
                selectedIndex == index ? "bg-black" : "bg-white"
              } rounded-full`}
            />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
