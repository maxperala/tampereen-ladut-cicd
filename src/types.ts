interface Report {
  text: string;
  datetime: string;
  tag: string;
}

interface SkiTrack {
  id: string;
  title: string;
  status_text: string;
  status: number;
  notice: string;
  date: string;
  reports: Report[];
}

type SkiTracks = SkiTrack[];

export type { SkiTrack, SkiTracks, Report };
