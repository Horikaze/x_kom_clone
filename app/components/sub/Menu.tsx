import useScrollY from "@/app/useScrollY";
import { BsCpu } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoLaptopOutline,
  IoPhonePortraitOutline,
  IoPrintOutline,
  IoTvOutline,
} from "react-icons/io5";
import { PiUsbThin } from "react-icons/pi";
export default function Menu() {
  const scrollY = useScrollY();

  const tabs = [
    {
      title: "Laptopy i komputery",
      icon: IoLaptopOutline,
    },
    {
      title: "Smartfony i smartwatche",
      icon: IoPhonePortraitOutline,
    },
    {
      title: "Gaming i streaming",
      icon: IoGameControllerOutline,
    },
    {
      title: "Podzespoły komputerowe",
      icon: BsCpu,
    },
    {
      title: "Urządzenia peryferyjne",
      icon: IoPrintOutline,
    },
    {
      title: "TV i audio",
      icon: IoTvOutline,
    },
    {
      title: "Smarthome i lifestyle",
      icon: IoHomeOutline,
    },
    {
      title: "Akcesoria",
      icon: PiUsbThin,
    },
    {
      title: "Trendy, promocje i nowości",
      icon: CiDiscount1,
    },
  ];

  return (
    <div
      className={`bg-[#f2f2f2] ${
        scrollY > 10 ? "h-0" : "h-[50px]"
      } overflow-y-hidden flex items-center transition-all justify-center w-full drop-shadow-md`}
    >
      <div className="max-w-[1440px] gap-x-1 overflow-x-scroll py-[2px] size-full flex items-center justify-center px-3 md:px-6 xl:px-16 2xl:px-0">
        {tabs.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="flex gap-x-2 px-2 h-full text-sm font-sans items-center rounded-md bg-[#f2f2f2] hover:bg-white hover:drop-shadow-md cursor-pointer transition-all"
          >
            <Icon className="size-6" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
