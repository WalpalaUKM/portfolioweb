import { BookOpen } from "lucide-react";
import { SubPage } from "./SubPage";

const items = [
  { title: "IoT-based Energy Monitoring (Mini Research)", meta: "2024", description: "Investigated low-cost smart metering using ESP32 and cloud dashboards for residential use.", tags: ["IoT", "ESP32", "Cloud"] },
  { title: "Comparative Study of Front-End Frameworks", meta: "2024", description: "Benchmarked React, Vue and Svelte across performance, DX and learning curves.", tags: ["React", "Vue", "Svelte"] },
  { title: "Academic Paper Reading Group", meta: "Ongoing", description: "Weekly discussions on HCI, embedded systems and applied ML papers.", tags: ["HCI", "ML"] },
  { title: "Faculty Research Assistant Support", meta: "2024", description: "Assisted with data collection and prototype testing for a sensor-network project.", tags: ["Sensors", "Data"] },
];

const Research = () => (
  <SubPage eyebrow="Academic" title="Research & Academic Engagement" subtitle="Curiosity-driven explorations beyond standard coursework." icon={BookOpen} items={items} />
);
export default Research;
