import Image from "next/image";

const stores = [
  "https://assets.x-kom.pl/public-spa/xkom/0f6ff6eee36d1bb3.svg",
  "https://assets.x-kom.pl/public-spa/xkom/32fe7e427a8819cc.svg",
  "https://assets.x-kom.pl/public-spa/xkom/de8bbc5c651b4ad9.svg",
];

export default function Promo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="lg:flex-row flex-col gap-6 flex lg:h-44">
        <div className="w-full flex lg:flex-row flex-col items-center justify-center bg-[#f7f7f7] drop-shadow-card rounded-2xl pr-5">
          <div className="h-full">
            <div className="flex gap-y-2 flex-col p-8">
              <p className="text-2xl font-bold">Newsletter</p>
              <p className="text-sm">
                Nie przegap żadnej promocji, zdobywaj dodatkowe rabaty.
              </p>
              <div className="bg-white w-full relative">
                <input
                  type="text"
                  placeholder="Twój e-mail"
                  className="border placeholder:text-sm focus:outline-0 border-black/30 rounded-lg w-full py-0.5 px-2"
                />
                <div className="absolute hover:bg-[#0070cc] fontsa transition-colors cursor-pointer right-0 top-0 rounded-lg w-20 flex items-center text-sm text-white justify-center h-full bg-[#0082fa]">
                  <p>Zapisz się</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full aspect-square">
            <Image
              src={
                "https://assets.x-kom.pl/public-spa/xkom/2cc235c12e03ae26.png"
              }
              alt="mail"
              className="object-contain"
              fill
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center bg-[#f7f7f7] drop-shadow-card rounded-2xl pr-5 overflow-hidden hover:drop-shadow-focus cursor-pointer">
          <div className="h-full w-full">
            <div className="flex gap-y-2 flex-col p-8">
              <p className="text-2xl font-bold">Aplikacja mobilna</p>
              <p className="text-sm line-clamp-2">
                Sprawdzaj promocje, które dostępne są tylko w aplikacji.
              </p>
              <div className="w-full flex h-12 gap-x-1">
                {stores.map((s, index) => (
                  <div key={index} className="w-1/3 h-full relative">
                    <Image key={index} src={s} alt="store" fill />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-full aspect-square mt-4 hidden lg:block">
            <Image
              src={
                "https://assets.x-kom.pl/public-spa/xkom/dc932e41baa41f9d.png"
              }
              alt="mail"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-20 items-center group justify-between relative bg-[#f7f7f7] drop-shadow-card rounded-2xl py-5 px-10 overflow-hidden hover:drop-shadow-focus cursor-pointer">
        <Image
          src={"/images/sales.png"}
          alt="salesLogo"
          width={166}
          height={40}
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-bold">Polecaj i zarabiaj. </span>Dołącz do
          naszego programu partnerskiego.
        </p>
        <div className="w-40 border border-[#be0064] group-hover:bg-[#be0064] group-hover:text-white transition-all py-1.5 text-sm rounded-lg flex items-center justify-center">
          <p>Zacznij zarabiać</p>
        </div>
      </div>
    </div>
  );
}
