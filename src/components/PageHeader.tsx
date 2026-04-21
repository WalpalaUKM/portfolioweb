import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const PageHeader = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <section className="pt-32 pb-12 px-6 md:px-10 bg-gradient-soft border-b border-border">
    <div className="max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
      </motion.div>
    </div>
  </section>
);
