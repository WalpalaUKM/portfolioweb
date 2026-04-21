import { motion } from "framer-motion";
import { Rocket, Mountain, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { goals } from "@/data/portfolio";

const tracks = [
  { icon: Rocket, title: "Short-term", items: goals.shortTerm, accent: "from-primary to-primary-glow" },
  { icon: Mountain, title: "Long-term", items: goals.longTerm, accent: "from-primary-glow to-primary" },
  { icon: Sparkles, title: "Skills to Develop", items: goals.toDevelop, accent: "from-primary to-primary-glow" },
];

export const Goals = () => (
  <Section
    id="goals"
    eyebrow="Future Goals"
    title="My roadmap — from undergrad to industry."
    subtitle="A clear picture of where I'm headed and the skills I'm investing in to get there."
    className="bg-gradient-soft"
  >
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-10">
        {tracks.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="p-7 rounded-2xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-semibold">{t.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {t.items.map((it) => (
                  <li key={it} className="flex gap-3 text-foreground/85">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-16 h-16 rounded-full bg-card border-4 border-primary/30 grid place-items-center shadow-glow">
                <span className="font-display font-bold text-primary text-lg">0{i + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
