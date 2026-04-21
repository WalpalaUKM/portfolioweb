import { Award } from "lucide-react";
import { SubPage } from "./SubPage";

const items = [
  { title: "Meta Front-End Developer (Coursera)", meta: "2024", description: "Comprehensive program covering React, accessibility and modern web development workflows.", tags: ["React", "Accessibility"] },
  { title: "Google UX Design (Coursera)", meta: "2024", description: "End-to-end UX process — research, wireframing, prototyping and usability testing.", tags: ["UX", "Figma"] },
  { title: "Cisco — Networking Essentials", meta: "2023", description: "Foundational networking concepts, IP addressing and basic routing.", tags: ["Networking"] },
  { title: "Arduino — Embedded Systems Specialization", meta: "2023", description: "Hardware fundamentals, sensors and microcontroller programming.", tags: ["Arduino", "Embedded"] },
];

const Certifications = () => (
  <SubPage eyebrow="Credentials" title="Certifications" subtitle="Formal recognition of the skills I've actively built." icon={Award} items={items} />
);
export default Certifications;
