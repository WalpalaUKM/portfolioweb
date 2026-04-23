import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { Section } from '@/components/Section';

export const About = () => (
  <Section id="about" eyebrow="About Me" title="" subtitle="">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* LEFT SIDE - Description */}
      <div>
        <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
          I'm a second-year BICT (Hons) undergraduate at the Faculty of
          Computing and Technology, University of Kelaniya. I am passionate
          about software engineering, UI/UX design, and modern web development,
          aiming to build user-friendly and innovative digital solutions.I'm a
          second-year BICT (Hons) undergraduate at the Faculty of Computing and
          Technology, University of Kelaniya. I am passionate about software
          engineering, UI/UX design, and modern web development, aiming to build
          user-friendly and innovative digital solutions.I'm a second-year BICT
          (Hons) undergraduate at the Faculty of Computing and Technology,
          University of Kelaniya. I am passionate about software engineering,
          UI/UX design, and modern web development, aiming to build
          user-friendly and innovative digital solutions.
        </p>
      </div>

      {/* RIGHT SIDE - ONE EDUCATION CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
      >
        {/* Card Header */}
        <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center mb-4 group-hover:scale-110 transition-transform">
          <GraduationCap className="w-5 h-5" />
        </div>

        <h3 className="text-xl font-display font-semibold mb-5">Education</h3>

        {/* School */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <School className="w-4 h-4 text-primary" />
            <h4 className="font-semibold">School Education</h4>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Completed primary and secondary education with strong foundations in
            mathematics, science, and ICT, developing analytical and
            problem-solving skills.
          </p>
        </div>

        {/* University */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h4 className="font-semibold">Higher Education</h4>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            BICT (Hons) undergraduate at the Faculty of Computing and
            Technology, University of Kelaniya — focusing on software
            engineering, IoT and UI/UX.
          </p>
        </div>
      </motion.div>
    </div>
  </Section>
);
