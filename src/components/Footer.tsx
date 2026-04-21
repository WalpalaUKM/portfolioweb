import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Footer = () => (
  <footer className="border-t border-border bg-gradient-soft">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-display font-semibold text-lg text-gradient">{profile.name}</p>
        <p className="text-sm text-muted-foreground">{profile.degree}</p>
      </div>
      <div className="flex items-center gap-3">
        <a href={`mailto:${profile.email}`} className="w-10 h-10 grid place-items-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition-colors" aria-label="Email">
          <Mail className="w-4 h-4" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition-colors" aria-label="LinkedIn">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition-colors" aria-label="GitHub">
          <Github className="w-4 h-4" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </div>
  </footer>
);
