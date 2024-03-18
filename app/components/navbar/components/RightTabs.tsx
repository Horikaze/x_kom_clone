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
    <div className="flex items-center justify-center gap-x-2 py-2 h-full whitespace-nowrap">
      <div className="flex py-1 flex-col h-full w-24 rounded-md items-center justify-end size-full bg-white hover:drop-shadow-focus transition-all cursor-pointer">
        <PiHeadsetLight className="size-6" />
        <p className="text-xs text-center">Pomoc i kontakt</p>
      </div>
      <div className="h-2/3 w-[1px] bg-black/20" />
      {tabs.map(({ icon: Icon, title }) => (
        <div
          key={title}
          className="flex py-1 flex-col h-full w-24 rounded-md items-center justify-end size-full bg-white hover:drop-shadow-focus transition-all cursor-pointer"
        >
          <Icon className="size-6" />
          <p className="text-xs text-center">{title}</p>
        </div>
      ))}
    </div>
  );
}
