import { EmblaCarousel } from "./components/main/EmblaCarousel";
import UnboxRecomended from "./components/main/UnboxRecomended";

export default function Home() {
  return (
    <div className="flex flex-col size-full gap-y-3">
      <EmblaCarousel />
      <UnboxRecomended />
      <div className="h-96 w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima
        laborum eligendi, quibusdam quas officiis odit modi accusantium
        nesciunt! Culpa voluptate officia facere! Hic repellat maxime, ipsum
        voluptas corporis soluta quibusdam, magnam culpa inventore doloremque
        necessitatibus, in reiciendis voluptates doloribus.
      </div>
    </div>
  );
}
