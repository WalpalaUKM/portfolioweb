import { motion } from "framer-motion";
/*import { Code2, Wrench, Cpu } from "lucide-react";*/
import { Section } from "@/components/Section";
import { skills } from "@/data/portfolio";
import { Code2, Server, Database, Wrench, Key } from "lucide-react";

const categories = [
  { key: "frontend", icon: Code2, title: "Frontend", items: skills.frontend },
  { key: "backend", icon: Server, title: "Backend", items: skills.backend },
  { key: "database", icon: Database, title: "Database", items: skills.database},
  { key: "tools", icon: Wrench, title: "Tools & Technologies", items: skills.tools },
];

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="A broad toolkit across software, hardware and design."
    subtitle="I'm comfortable across the stack — from soldering a PCB to shipping a full-stack web app."
    className="bg-gradient-soft"
  >
    <div className="grid lg:grid-cols-3 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.key}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: ci * 0.1 }}
          className="p-7 rounded-2xl bg-card border border-border shadow-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
              <cat.icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-semibold">{cat.title}</h3>
          </div>
          <div className="space-y-4">
            {cat.items.map((s, i) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium">{s.name}</span>
                  <span className="text-xs text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                    className="h-full bg-gradient-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
