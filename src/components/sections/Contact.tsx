import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { profile } from "@/data/portfolio";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
  e.preventDefault();
  setSending(true);

  emailjs
    .send(
      "service_jxbb11g",     // 🔴 your Service ID
      "template_q55btpy",    // 🔴 your Template ID
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "7bEZkQjWfLwf_bhaZ"         // 🔴 your Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send message");
    })
    .finally(() => {
      setSending(false);
    });
};

  const links = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "ulindu kavmina", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "ulindu kavmina", href: profile.github },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great together."
      subtitle="Whether it's an internship, collaboration or a quick hello — my inbox is always open."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-3"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center flex-shrink-0">
                <l.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{l.label}</p>
                <p className="font-medium truncate">{l.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="lg:col-span-3 p-7 md:p-8 rounded-2xl bg-card border border-border shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a bit about your project or idea..." />
          </div>
          <Button type="submit" disabled={sending} size="lg" className="w-full sm:w-auto rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-shadow">
            {sending ? "Sending..." : <>Send Message <Send className="w-4 h-4 ml-1" /></>}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
};
