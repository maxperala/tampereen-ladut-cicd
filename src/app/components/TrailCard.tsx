import { SkiTrack } from "@/types";

const TrailCard = ({ trail }: { trail: SkiTrack }) => {
  return (
    <div className="w-full bg-yellow-50 shadow-sm flex-col items-center p-4 mt-2 rounded-lg">
      <div className="flex-1 flex-row justify-between">
        <div className="text-base trail-title">{trail.title}</div>
        <div className="text-sm">{trail.status_text}</div>
      </div>
      <div className="flex-1 flex-row justify-between">
        <div className="text-sm">
          Päivitetty: <i>{new Date(trail.date).toLocaleDateString()}</i>
        </div>
      </div>
    </div>
  );
};

export default TrailCard;
