import { Users } from "lucide-react";
import { SubPage } from "./SubPage";

const items = [
  { title: "IEEE Student Branch — Member", meta: "2023 – Present", description: "Participated in workshops, hackathons and technical talks; collaborated on student-led projects.", tags: ["IEEE", "Workshops"] },
  { title: "Computing Society — Web Team", meta: "2024", description: "Helped redesign and maintain the society website; coordinated event landing pages.", tags: ["React", "Web"] },
  { title: "Robotics Club", meta: "2023 – Present", description: "Built line-following and obstacle-avoidance robots for inter-university competitions.", tags: ["Arduino", "Robotics"] },
  { title: "University Photography Circle", meta: "2022 – Present", description: "Documented campus events; explored visual storytelling as a creative outlet.", tags: ["Photography"] },
];

const ClubActivities = () => (
  <SubPage eyebrow="Community" title="Club Activities" subtitle="Where I learn, collaborate and contribute outside the classroom." icon={Users} items={items} />
);
export default ClubActivities;
