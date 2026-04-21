import { Lightbulb } from "lucide-react";
import { SubPage } from "./SubPage";

const items = [
  { title: "On Learning to Build", description: "The biggest shift in undergrad has been moving from consuming knowledge to building things. Every project — even the failed ones — taught me more than any textbook.", tags: ["Mindset"] },
  { title: "Software ↔ Hardware", description: "Working across both worlds gave me an appreciation for the constraints engineers ignore at their peril. Latency, power, and physical reliability all matter.", tags: ["Engineering"] },
  { title: "Design Is a Skill, Not a Talent", description: "I used to think design was something you either had or didn't. Practicing UI/UX intentionally proved otherwise — taste is built through reps.", tags: ["UX"] },
  { title: "Teamwork & Communication", description: "Most technical problems are actually communication problems. Investing in clarity early always pays off.", tags: ["Soft Skills"] },
];

const Reflections = () => (
  <SubPage eyebrow="Personal" title="Reflections" subtitle="Lessons I've collected along the way." icon={Lightbulb} items={items} />
);
export default Reflections;
