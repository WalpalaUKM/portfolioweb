import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profilepicture.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { profile } from "@/data/portfolio";

export const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.08] dark:opacity-20"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  {/* NAME */}
  <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight">
    Hi, I'm <span className="text-gradient">{profile.name}</span>
  </h1>

   <p className="mt-6 text-lg md:text-xl font-medium text-whitey max-w-xl leading-relaxed">
        CT_2022_003 | Bachelor of Information and
        Communication Technology
        Honours | Faculty of Computing and Technology | University of Kelaniya
   </p>

  {/* TAGLINE */}
  <p className="mt-6 text-lg md:text-xl font-medium text-primary max-w-xl leading-relaxed">
    ICT Undergraduate | UI/UX Designer | Full-Stack Developer | Tech Enthusiast | Blogger
  </p>

  {/* BUTTONS */}
  <div className="mt-8 flex flex-wrap gap-3">
    <Button
      size="lg"
      onClick={() => scrollTo("projects")}
      className="rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-shadow"
    >
      View Projects <ArrowRight className="w-4 h-4 ml-1" />
    </Button>

    <Button
      size="lg"
      variant="outline"
      onClick={() => scrollTo("contact")}
      className="rounded-full"
    >
      <Mail className="w-4 h-4 mr-1" /> Contact Me
    </Button>
  </div>
</motion.div>

        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="relative justify-self-center"
>
  <div className="absolute inset-0 bg-gradient-primary rounded-[2rem] blur-2xl opacity-40 animate-glow-pulse" />

  {/* Bigger Image */}
  <div className="relative w-80 h-96 md:w-[420px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-elegant border border-border bg-card">
    <img
      src={profileImg}
      alt={profile.name}
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>
      </div>
    </section>
  );
};
