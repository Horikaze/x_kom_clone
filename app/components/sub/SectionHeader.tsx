export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-col w-full gap-y-4 mt-4">
      <div className="h-[1px] w-full bg-black/30" />
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}
