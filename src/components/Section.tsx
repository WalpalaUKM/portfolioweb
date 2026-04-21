import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, subtitle, children, className }: SectionProps) => (
  <section id={id} className={cn("section-padding", className)}>
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-14"
      >
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">{eyebrow}</p>
        )}
        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);
