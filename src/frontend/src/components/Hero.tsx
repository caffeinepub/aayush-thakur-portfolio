import { motion } from "motion/react";
import { Suspense } from "react";
import { CONTENT } from "../content";
import { HeroScene } from "./HeroScene";

export function Hero() {
  const scrollToPortfolio = () => {
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% -20%, oklch(0.25 0.1 270 / 0.4), transparent), oklch(0.09 0.025 265)",
      }}
    >
      {/* Ambient background blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "oklch(0.62 0.26 300 / 0.08)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "oklch(0.85 0.18 215 / 0.06)" }}
      />

      <div className="container mx-auto px-4 sm:px-8 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest px-4 py-2 rounded-full mb-4"
              style={{
                background: "oklch(0.85 0.18 215 / 0.1)",
                border: "1px solid oklch(0.85 0.18 215 / 0.3)",
                color: "oklch(0.85 0.18 215)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "oklch(0.85 0.18 215)" }}
              />
              AVAILABLE FOR PROJECTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight uppercase"
            style={{ color: "oklch(0.96 0.015 265)" }}
          >
            {CONTENT.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {CONTENT.name}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base leading-relaxed max-w-md"
            style={{ color: "oklch(0.67 0.06 265)" }}
          >
            {CONTENT.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={scrollToPortfolio}
              className="px-8 py-4 rounded-full font-bold text-sm tracking-wider transition-all"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                color: "oklch(0.09 0.025 265)",
                boxShadow: "0 0 30px oklch(0.85 0.18 215 / 0.4)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px oklch(0.85 0.18 215 / 0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              data-ocid="hero.primary_button"
            >
              EXPLORE PORTFOLIO
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full font-bold text-sm tracking-wider border transition-all"
              style={{
                color: "oklch(0.96 0.015 265)",
                borderColor: "oklch(0.22 0.05 265)",
                background: "transparent",
              }}
              whileHover={{
                borderColor: "oklch(0.85 0.18 215 / 0.5)",
                boxShadow: "0 0 20px oklch(0.85 0.18 215 / 0.1)",
              }}
              whileTap={{ scale: 0.97 }}
              data-ocid="hero.secondary_button"
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex gap-8 pt-4"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "120+", label: "Projects Done" },
              { value: "40+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-extrabold"
                  style={{ color: "oklch(0.85 0.18 215)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.67 0.06 265)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full h-[400px] lg:h-[550px] relative"
        >
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: "oklch(0.62 0.26 300 / 0.12)",
              transform: "scale(0.8)",
            }}
          />
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div
          className="text-xs tracking-widest"
          style={{ color: "oklch(0.67 0.06 265)" }}
        >
          SCROLL
        </div>
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.85 0.18 215), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
