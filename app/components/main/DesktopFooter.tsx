import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
const orders = [
  "Dostawa",
  "Raty",
  "Leasing",
  "Wynajem sprzętu",
  "Ubezpieczenia",
  "TaxFree",
  "Montaż",
  "Zwroty i reklamacje",
  "Najczęściej zadawane pytania",
];

const promotions = [
  "Wyprzedaż",
  "Gorący strzał",
  "un.Box",
  "Promocje",
  "Karty podarunkowe",
  "Poradniki",
  "Aktualności",
];

const xkom = [
  "O nas",
  "Regulamin",
  "Polityka prywatności",
  "Polityka cookies",
  "Regulamin newslettera",
  "Biuro prasowe",
  "Zamówienia publiczne",
  "Zakupy dla firm",
  "Współpraca marketingowa",
  "Geex",
  "Forum",
  "Kariera",
  "Kontakt",
  "Realizowane projekty",
];

const footerBrandsItems = [
  "https://assets.x-kom.pl/public-spa/xkom/49043d12b5e7dd3b.png",
  "https://assets.x-kom.pl/public-spa/xkom/37a657a8ea71c244.png",
  "https://assets.x-kom.pl/public-spa/xkom/c26b80bc206f1117.png",
  "https://assets.x-kom.pl/public-spa/xkom/2a258eafdbb74b43.png",
  "https://assets.x-kom.pl/public-spa/xkom/855a87adc47118d4.png",
  "https://assets.x-kom.pl/public-spa/xkom/a4e6e128e457c7d8.png",
  "https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png",
  "https://assets.x-kom.pl/public-spa/xkom/33dfc5a98f0f38a4.png",
  "https://assets.x-kom.pl/public-spa/xkom/e51fb0a6ab97d090.png",
  "https://assets.x-kom.pl/public-spa/xkom/076d960cdaf096e1.png",
  "https://assets.x-kom.pl/public-spa/xkom/709b7294b9957695.png",
  "https://assets.x-kom.pl/public-spa/xkom/93e0b5378eed5aa5.png",
  "https://assets.x-kom.pl/public-spa/xkom/4ba359ebd3c94054.png",
  "https://assets.x-kom.pl/public-spa/xkom/c7fb289360e74bc3.png",
];

export default function DesktopFooter() {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-4">
          <h2 className="font-semibold">Zamówienia</h2>
          {orders.map((e) => (
            <p className="text-sm hover:underline cursor-pointer" key={e}>
              {e}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="font-semibold">Promocje i inspiracje</h2>
          {promotions.map((e) => (
            <p className="text-sm hover:underline cursor-pointer" key={e}>
              {e}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="font-semibold">x-kom</h2>
          {xkom.map((e) => (
            <p className="text-sm hover:underline cursor-pointer" key={e}>
              {e}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="font-semibold">Kontakt</h2>
          <div className="flex gap-x-2 ">
            <FaPhone className="mt-2 size-5" />
            <div className="flex flex-col gap-y-1">
              <p className="text-xl font-semibold hover:underline cursor-pointer">
                34 377 00 00
              </p>
              <div className="flex flex-col gap-y-1">
                <div className="flex justify-between text-xs gap-x-2">
                  <p>pon. - pt.</p>
                  <p>8:00 - 21:00</p>
                </div>
                <div className="flex justify-between text-xs gap-x-2">
                  <p>sob. - niedz.</p>
                  <p>sob. - niedz.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2 hover:underline cursor-pointer">
            <FaEnvelope className="size-5" />
            <p>x-kom@x-kom.pl</p>
          </div>
          <div className="flex items-center gap-x-2 hover:underline cursor-pointer">
            <FaWhatsapp className="size-5" />
            <p>WhatsApp</p>
          </div>
          <div className="flex items-center gap-x-2 hover:underline cursor-pointer">
            <IoMdPin className="size-5" />
            <p>Salony x-kom</p>
          </div>
          <div className="flex w-full justify-between gap-x-4 mt-10 cursor-pointer">
            <FaFacebook className="size-5" />
            <FaInstagram className="size-5" />
            <FaYoutube className="size-5" />
            <FaXTwitter className="size-5" />
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap gap-x-4 items-center justify-center">
        {footerBrandsItems.map((e, index) => (
          <Image
            key={index}
            src={e}
            alt="brand"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-10"
          />
        ))}
      </div>
      <p className="my-5 text-center text-sm">© x-kom 2002 - 2024</p>
      <Link
        href={"https://github.com/Horikaze"}
        target="_blank"
        className="text-center text-sm underline mb-5"
      >
        Site made by Horikaze
      </Link>
    </div>
  );
}
