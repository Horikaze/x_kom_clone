import {
  PiHeadsetLight,
  PiUserLight,
  PiHeartLight,
  PiShoppingCartLight,
} from "react-icons/pi";
const tabs = [
  {
    title: "Twoje konto",
    icon: PiUserLight,
  },
  {
    title: "Twoje listy",
    icon: PiHeartLight,
  },
  {
    title: "Koszyk",
    icon: PiShoppingCartLight,
  },
];
export default function RightTabs() {
  return (
    <div className="flex items-center justify-end lg:gap-x-2 py-2 size-full lg:size-auto  whitespace-nowrap px-2">
      <div className="flex py-1 flex-col h-10 lg:h-full lg:w-24 rounded-md items-center justify-end size-full bg-white hover:drop-shadow-focus transition-all cursor-pointer">
        <PiHeadsetLight className="size-full lg:size-6" />
        <p className="text-xs text-center  hidden lg:block">Pomoc i kontakt</p>
      </div>
      {tabs.map(({ icon: Icon, title }) => (
        <div
          key={title}
          className="flex py-1 flex-col h-10 lg:h-full lg:w-24 rounded-md items-center justify-end size-full bg-white hover:drop-shadow-focus transition-all cursor-pointer"
        >
          <Icon className="size-full lg:size-6" />
          <p className="text-xs text-center hidden lg:block">{title}</p>
        </div>
      ))}
    </div>
  );
}
