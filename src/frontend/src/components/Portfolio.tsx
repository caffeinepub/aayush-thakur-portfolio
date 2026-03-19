import { ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { CONTENT } from "../content";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  year: string;
}

function ProjectCard({
  project,
  index,
  onClick,
}: { project: Project; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-ocid={`portfolio.item.${index + 1}`}
    >
      <button
        type="button"
        ref={cardRef}
        className="group relative rounded-2xl overflow-hidden cursor-pointer neon-border w-full text-left"
        style={{
          background: "oklch(0.12 0.03 265 / 0.8)",
          backdropFilter: "blur(10px)",
          transition: "transform 0.1s ease-out, box-shadow 0.3s ease",
          display: "block",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            style={{ background: "oklch(0.62 0.26 300 / 0.4)" }}
          >
            <ExternalLink style={{ color: "white" }} size={28} />
          </div>
          <div
            className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold"
            style={{
              background: "oklch(0.09 0.025 265 / 0.8)",
              color: "oklch(0.85 0.18 215)",
              border: "1px solid oklch(0.85 0.18 215 / 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            {project.year}
          </div>
        </div>

        <div className="p-5">
          <div
            className="text-xs font-semibold tracking-wider mb-2"
            style={{ color: "oklch(0.62 0.26 300)" }}
          >
            {project.category}
          </div>
          <h3
            className="font-bold text-base"
            style={{ color: "oklch(0.96 0.015 265)" }}
          >
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(0.15 0.04 265)",
                  color: "oklch(0.67 0.06 265)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="portfolio"
      className="py-24 relative"
      style={{ background: "oklch(0.09 0.025 265)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.85 0.18 215 / 0.5), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-8">
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
            MY WORK
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mt-2"
            style={{ color: "oklch(0.96 0.015 265)" }}
          >
            FEATURED{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              WORKS
            </span>
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="portfolio.list"
        >
          {CONTENT.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "oklch(0.05 0.02 265 / 0.9)",
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            data-ocid="portfolio.modal"
          >
            <motion.div
              className="w-full max-w-lg rounded-2xl overflow-hidden neon-border"
              style={{
                background: "oklch(0.12 0.03 265)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-56 object-cover"
                />
                <button
                  type="button"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.09 0.025 265 / 0.8)",
                    color: "oklch(0.96 0.015 265)",
                  }}
                  onClick={() => setSelected(null)}
                  data-ocid="portfolio.close_button"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <div
                    className="text-xs font-semibold tracking-wider"
                    style={{ color: "oklch(0.62 0.26 300)" }}
                  >
                    {selected.category} · {selected.year}
                  </div>
                  <h3
                    className="text-xl font-extrabold mt-1"
                    style={{ color: "oklch(0.96 0.015 265)" }}
                  >
                    {selected.title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.67 0.06 265)" }}
                >
                  {selected.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "oklch(0.15 0.04 265)",
                        border: "1px solid oklch(0.22 0.05 265)",
                        color: "oklch(0.85 0.18 215)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
