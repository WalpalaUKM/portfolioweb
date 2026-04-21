import { Trophy } from "lucide-react";
import { SubPage } from "./SubPage";

const items = [
  { title: "Inter-University Hackathon — Finalist", meta: "2024", description: "Top 5 out of 60+ teams for an IoT-based agriculture monitoring solution.", tags: ["Hackathon", "IoT"] },
  { title: "Dean's List Recognition", meta: "Year 1 & 2", description: "Recognized for consistent academic performance across semesters.", tags: ["Academic"] },
  { title: "Best UI Design — Faculty Project Showcase", meta: "2024", description: "Awarded for the design of a campus utility application.", tags: ["UI/UX"] },
  { title: "Volunteer of the Year — Computing Society", meta: "2023", description: "Recognized for sustained contribution to society events and technical support.", tags: ["Leadership"] },
];

const Achievements = () => (
  <SubPage eyebrow="Highlights" title="Achievements" subtitle="Moments that mark progress along the journey." icon={Trophy} items={items} />
);
export default Achievements;
