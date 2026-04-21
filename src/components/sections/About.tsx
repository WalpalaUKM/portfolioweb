import { motion } from "framer-motion";
import { GraduationCap, Heart, Target, Compass } from "lucide-react";
import { Section } from "@/components/Section";

const items = [

  {
    icon: Heart,
    title: "Interests",
    body: "Full-stack development, embedded systems, design systems, photography, and exploring emerging technologies.",
  },
  {
    icon: GraduationCap,
    title: "Higher Education",
    body: "BICT (Hons) undergraduate at the Faculty of Computing and Technology, University of Kelaniya — focusing on software engineering, IoT and UI/UX.",
  }
  
];

export const About = () => (
  <Section
    id="about"
    eyebrow="About Me"
    title="Engineering thoughtful experiences with curiosity and care."
    subtitle="I'm an ICT undergraduate passionate about the intersection of software, hardware and human-centered design. I love turning ideas into polished, working products."
  >
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center mb-4 group-hover:scale-110 transition-transform">
            <it.icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-display font-semibold mb-2">{it.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{it.body}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);
