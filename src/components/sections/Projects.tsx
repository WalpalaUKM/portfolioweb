import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title="Selected work from coursework and personal builds."
    subtitle=""
  >
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-background/80 backdrop-blur text-foreground border border-border">
              {p.course}
            </div>
          </div>
          <div className="p-7">
            <h3 className="text-2xl font-display font-bold">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.objective}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/80">{p.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-muted/50">
                <p className="uppercase tracking-wider text-muted-foreground mb-1">Role</p>
                <p className="font-medium">{p.role}</p>
              </div>
              <div className="p-3 rounded-xl bg-muted/50">
                <p className="uppercase tracking-wider text-muted-foreground mb-1">Outcome</p>
                <p className="font-medium">{p.outcome}</p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-1" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);
