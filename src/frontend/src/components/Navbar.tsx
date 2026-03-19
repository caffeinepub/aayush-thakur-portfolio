import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CONTENT } from "../content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div
          className="flex items-center justify-between px-6 py-3 rounded-full w-full max-w-5xl transition-all duration-300"
          style={{
            background: scrolled
              ? "oklch(0.12 0.03 265 / 0.85)"
              : "oklch(0.12 0.03 265 / 0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid oklch(0.22 0.05 265)",
            boxShadow: scrolled
              ? "0 8px 32px oklch(0.09 0.025 265 / 0.8)"
              : "none",
          }}
        >
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.26 300), oklch(0.85 0.18 215))",
              }}
            >
              AT
            </div>
            <span
              className="font-bold text-sm tracking-wider hidden sm:block"
              style={{ color: "oklch(0.96 0.015 265)" }}
            >
              AAYUSH THAKUR
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {CONTENT.navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs font-semibold tracking-widest transition-all duration-200 hover:opacity-100 relative group"
                style={{ color: "oklch(0.67 0.06 265)" }}
                data-ocid="nav.link"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "oklch(0.85 0.18 215)" }}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="hidden sm:flex items-center px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                color: "oklch(0.09 0.025 265)",
                boxShadow: "0 0 20px oklch(0.85 0.18 215 / 0.3)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px oklch(0.85 0.18 215 / 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              data-ocid="nav.primary_button"
            >
              LET'S CREATE
            </motion.button>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg"
              style={{ color: "oklch(0.96 0.015 265)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: "oklch(0.09 0.025 265 / 0.95)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center gap-8">
              {CONTENT.navLinks.map((link, i) => (
                <motion.button
                  type="button"
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-bold tracking-widest"
                  style={{ color: "oklch(0.96 0.015 265)" }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollTo("#contact")}
                className="mt-4 px-8 py-3 rounded-full text-sm font-bold tracking-wider"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                  color: "oklch(0.09 0.025 265)",
                }}
                data-ocid="nav.primary_button"
              >
                LET'S CREATE
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
