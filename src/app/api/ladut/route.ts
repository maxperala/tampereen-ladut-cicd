import { NextResponse } from "next/server";
import { API_URL } from "@/config";
import { SkiTracks } from "@/types";

export const GET = async () => {
  const response = await fetch(`${API_URL}/city/tampere`);
  const data: SkiTracks = await response.json();

  return NextResponse.json(data);
};
