import Image from "next/image";
import { EmblaCarousel } from "./components/main/EmblaCarousel";
import UnboxRecomended from "./components/main/UnboxRecomended";
import { Carousel } from "./components/sub/Carousel";
import ProductCard from "./components/sub/ProductCard";
import SectionHeader from "./components/sub/SectionHeader";
import { producs } from "./constants/products";
import { guides } from "./constants/guides";
import ArticleCard from "./components/sub/ArticleCard";
import HotDeal from "./components/main/HotDeal";
import { brandsSection } from "./constants/brandsSection";
import BrandItem from "./components/sub/BrandItem";
import Promo from "./components/main/Promo";
import DesktopFooter from "./components/main/DesktopFooter";

export default function Home() {
  return (
    <div className="flex flex-col size-full gap-y-3">
      <EmblaCarousel />
      <UnboxRecomended />
      <div className="block lg:hidden">
        <SectionHeader title="Polecamy" />
        <Carousel height={72}>
          {producs.map((e, index) => (
            <div className="flex-[0_0_200px] m-2" key={index}>
              <ProductCard {...e} />
            </div>
          ))}
        </Carousel>
      </div>
      <SectionHeader title="Poradniki" />
      <Carousel height={80}>
        {guides.map((g) => (
          <div key={g.title} className="flex-[0_0_300px] h-80 mx-2">
            <ArticleCard {...g} />
          </div>
        ))}
      </Carousel>
      <SectionHeader title="Bestsellery" />
      <Carousel height={72}>
        {producs.map((e, index) => (
          <div className="flex-[0_0_200px] m-2" key={index}>
            <ProductCard {...e} />
          </div>
        ))}
      </Carousel>
      <HotDeal />
      <div className="block lg:hidden">
        <SectionHeader title="Hity tygodnia" />
        <Carousel height={72}>
          {producs.map((e, index) => (
            <div className="flex-[0_0_200px] m-2" key={index}>
              <ProductCard {...e} />
            </div>
          ))}
        </Carousel>
      </div>
      <SectionHeader title="Strefa marek" />
      <Carousel height={28}>
        {brandsSection.map((b, index) => (
          <div key={index} className="flex-[0_0_80px] h-[96px] mx-12">
            <BrandItem img={b} />
          </div>
        ))}
      </Carousel>
      <Promo />
      <DesktopFooter />
    </div>
  );
}
