import TrailList from "./components/TrailList";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="text-xl p-2">Tampereen Ladut</div>
      <TrailList />
    </div>
  );
}
