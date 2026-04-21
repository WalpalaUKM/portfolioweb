import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { navSections, morePages } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (!onHome) return;
      const offsets = navSections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Number.POSITIVE_INFINITY };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const goSection = (id: string) => {
    setOpen(false);
    if (!onHome) {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-card" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg md:text-xl">
          <span className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground">
            U
          </span>
          <span className="text-gradient">Ulindu K.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => goSection(s.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                onHome && active === s.id
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {s.label}
              {onHome && active === s.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                />
              )}
            </button>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full text-foreground/70 hover:text-foreground transition-colors">
              More <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-2 w-64 glass rounded-2xl shadow-elegant p-2"
                >
                  {morePages.map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className="block px-4 py-2.5 text-sm rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" className="rounded-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.span>
            </AnimatePresence>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goSection(s.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors font-medium"
                >
                  {s.label}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-border">
                <p className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">More</p>
                {morePages.map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
