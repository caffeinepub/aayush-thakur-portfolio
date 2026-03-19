import { Layers, Monitor, PenTool, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { CONTENT } from "../content";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers size={28} />,
  PenTool: <PenTool size={28} />,
  Monitor: <Monitor size={28} />,
  Share2: <Share2 size={28} />,
};

export function Services() {
  return (
    <section
      id="services"
      className="py-24 relative"
      style={{
        background: "oklch(0.09 0.025 265)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.62 0.26 300 / 0.5), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.62 0.26 300 / 0.04), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold tracking-widest"
            style={{ color: "oklch(0.85 0.18 215)" }}
          >
            WHAT I DO
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mt-2"
            style={{ color: "oklch(0.96 0.015 265)" }}
          >
            MY{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.26 300), oklch(0.65 0.28 330))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SERVICES
            </span>
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTENT.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl p-6 flex flex-col gap-4 neon-border group cursor-default"
              style={{
                background: "oklch(0.12 0.03 265 / 0.7)",
                backdropFilter: "blur(10px)",
                transition: "box-shadow 0.3s ease",
              }}
              data-ocid={`services.card.${i + 1}`}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "oklch(0.15 0.04 265)",
                  border: "1px solid oklch(0.22 0.05 265)",
                  color: "oklch(0.85 0.18 215)",
                  boxShadow: "0 0 20px oklch(0.85 0.18 215 / 0)",
                }}
              >
                {iconMap[service.icon]}
              </div>

              <div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "oklch(0.96 0.015 265)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.67 0.06 265)" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "oklch(0.62 0.26 300 / 0.04)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
