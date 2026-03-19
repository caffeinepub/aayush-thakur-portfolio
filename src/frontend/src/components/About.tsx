import { motion } from "motion/react";
import { CONTENT } from "../content";

function GeometricAvatar() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow background */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: "oklch(0.62 0.26 300 / 0.2)" }}
      />
      <div
        className="relative rounded-2xl overflow-hidden neon-border"
        style={{
          background: "oklch(0.12 0.03 265 / 0.7)",
          backdropFilter: "blur(10px)",
        }}
      >
        <img
          src="/assets/generated/about-avatar.dim_500x500.png"
          alt="Aayush Thakur"
          className="w-full object-cover"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.09 0.025 265 / 0.6), transparent)",
          }}
        />
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-bold tracking-wider"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.62 0.26 300), oklch(0.85 0.18 215))",
          color: "oklch(0.09 0.025 265)",
          boxShadow: "0 0 20px oklch(0.85 0.18 215 / 0.4)",
        }}
      >
        CREATIVE DIRECTOR
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.09 0.025 265)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.62 0.26 300 / 0.5), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GeometricAvatar />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span
                className="text-xs font-semibold tracking-widest"
                style={{ color: "oklch(0.85 0.18 215)" }}
              >
                WHO I AM
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mt-2"
                style={{ color: "oklch(0.96 0.015 265)" }}
              >
                ABOUT{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AAYUSH
                </span>
              </h2>
            </div>

            <p
              className="leading-relaxed"
              style={{ color: "oklch(0.67 0.06 265)" }}
            >
              {CONTENT.bio}
            </p>

            {/* Skill chips */}
            <div>
              <div
                className="text-xs font-semibold tracking-widest mb-3"
                style={{ color: "oklch(0.67 0.06 265)" }}
              >
                TOOLS & SKILLS
              </div>
              <div className="flex flex-wrap gap-2">
                {CONTENT.skillChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "oklch(0.15 0.04 265)",
                      border: "1px solid oklch(0.22 0.05 265)",
                      color: "oklch(0.85 0.18 215)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress bars */}
            <div className="flex flex-col gap-4 mt-2">
              <div
                className="text-xs font-semibold tracking-widest mb-1"
                style={{ color: "oklch(0.67 0.06 265)" }}
              >
                PROFICIENCY
              </div>
              {CONTENT.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span style={{ color: "oklch(0.96 0.015 265)" }}>
                      {skill.name}
                    </span>
                    <span style={{ color: "oklch(0.85 0.18 215)" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: "oklch(0.15 0.04 265)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                          i % 2 === 0
                            ? "linear-gradient(90deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))"
                            : "linear-gradient(90deg, oklch(0.62 0.26 300), oklch(0.65 0.28 330))",
                        boxShadow: "0 0 8px oklch(0.85 0.18 215 / 0.5)",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
