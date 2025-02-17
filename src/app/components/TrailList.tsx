"use client";
import { SkiTracks } from "@/types";
import { useEffect, useMemo, useState } from "react";
import TrailCard from "./TrailCard";

export const TrailList = () => {
  const [skiTracks, setSkiTracks] = useState<SkiTracks>([]);

  useEffect(() => {
    const fetchSkiTracks = async () => {
      const response = await fetch("/api/ladut");
      const data: SkiTracks = await response.json();
      setSkiTracks(data);
    };
    fetchSkiTracks();
  }, []);

  const trailCards = useMemo(() => {
    return skiTracks.map((t) => <TrailCard trail={t} key={t.id} />);
  }, [skiTracks]);
  if (!skiTracks) {
    return (
      <div className="flex-1 flex items-center justify-center bg-yellow-200 w-[80%] p-16 shadow-md rounded-md">
        Lataa...
      </div>
    );
  }
  return (
    <div className="flex-1 flex-col items-center justify-center bg-yellow-200 w-[80%] min-w[60%] p-16 shadow-md rounded-md">
      {trailCards}
    </div>
  );
};

export default TrailList;
