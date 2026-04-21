import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageHeader } from "@/components/PageHeader";
import { LucideIcon } from "lucide-react";

export interface SubItem {
  title: string;
  meta?: string;
  description: string;
  tags?: string[];
}

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: SubItem[];
}

export const SubPage = ({ eyebrow, title, subtitle, icon: Icon, items }: Props) => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
    <main className="flex-1 px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto grid gap-5">
        {items.map((it, i) => (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex gap-5 p-6 md:p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg md:text-xl font-display font-semibold">{it.title}</h3>
                {it.meta && <span className="text-xs text-muted-foreground">{it.meta}</span>}
              </div>
              <p className="mt-2 text-foreground/80 leading-relaxed">{it.description}</p>
              {it.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {it.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);
