import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TrailCard from "../app/components/TrailCard";
import { SkiTrack } from "@/types";

const testTrail: SkiTrack = {
  id: "1",
  title: "Testilatu",
  status_text: "kunnossa",
  status: 50,
  notice: "juujuu",
  date: "12-03-2001",
  reports: [],
};

test("Test that trail renders", () => {
  render(<TrailCard trail={testTrail} />);
  expect(screen.findByText("Testilatu")).toBeDefined();
});
