import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiBehance, SiInstagram, SiLinkedin } from "react-icons/si";
import { useActor } from "../hooks/useActor";

const socialIcons = [
  {
    icon: <SiInstagram size={20} />,
    label: "Instagram",
    url: "https://instagram.com",
  },
  {
    icon: <SiBehance size={20} />,
    label: "Behance",
    url: "https://behance.net",
  },
  {
    icon: <SiLinkedin size={20} />,
    label: "LinkedIn",
    url: "https://linkedin.com",
  },
];

export function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !actor) return;
    setStatus("loading");
    try {
      await actor.submitContactForm(
        form.name,
        form.email,
        form.message,
        BigInt(Date.now()),
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "oklch(0.09 0.025 265)",
    border: "1px solid oklch(0.22 0.05 265)",
    color: "oklch(0.96 0.015 265)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
    fontFamily: "Poppins, sans-serif",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
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
            SAY HELLO
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight mt-2"
            style={{ color: "oklch(0.96 0.015 265)" }}
          >
            LET'S{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CONNECT
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.67 0.06 265)" }}
            >
              Have a project in mind or want to collaborate? I'd love to hear
              about your vision. Let's create something amazing together.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: "Email", value: "aayush@design.studio" },
                { label: "Location", value: "Mumbai, India" },
                { label: "Availability", value: "Open to projects" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "oklch(0.85 0.18 215)",
                      boxShadow: "0 0 8px oklch(0.85 0.18 215 / 0.7)",
                    }}
                  />
                  <div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.67 0.06 265)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.96 0.015 265)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div
                className="text-xs font-semibold tracking-widest mb-4"
                style={{ color: "oklch(0.67 0.06 265)" }}
              >
                FIND ME ON
              </div>
              <div className="flex gap-4">
                {socialIcons.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "oklch(0.15 0.04 265)",
                      border: "1px solid oklch(0.22 0.05 265)",
                      color: "oklch(0.67 0.06 265)",
                    }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: "oklch(0.85 0.18 215 / 0.5)",
                    }}
                    data-ocid="contact.link"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 sm:p-8 flex flex-col gap-5 neon-border"
              style={{
                background: "oklch(0.12 0.03 265 / 0.7)",
                backdropFilter: "blur(10px)",
              }}
              data-ocid="contact.modal"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold tracking-wider"
                    style={{ color: "oklch(0.67 0.06 265)" }}
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    required
                    data-ocid="contact.input"
                    onFocus={(e) => {
                      e.target.style.borderColor = "oklch(0.85 0.18 215 / 0.5)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "oklch(0.22 0.05 265)";
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold tracking-wider"
                    style={{ color: "oklch(0.67 0.06 265)" }}
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    required
                    data-ocid="contact.input"
                    onFocus={(e) => {
                      e.target.style.borderColor = "oklch(0.85 0.18 215 / 0.5)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "oklch(0.22 0.05 265)";
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold tracking-wider"
                  style={{ color: "oklch(0.67 0.06 265)" }}
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  required
                  data-ocid="contact.textarea"
                  onFocus={(e) => {
                    e.target.style.borderColor = "oklch(0.85 0.18 215 / 0.5)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "oklch(0.22 0.05 265)";
                  }}
                />
              </div>

              {status === "success" && (
                <div
                  className="flex items-center gap-2 text-sm rounded-xl p-3"
                  style={{
                    background: "oklch(0.25 0.1 155 / 0.2)",
                    color: "oklch(0.75 0.18 155)",
                  }}
                  data-ocid="contact.success_state"
                >
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div
                  className="flex items-center gap-2 text-sm rounded-xl p-3"
                  style={{
                    background: "oklch(0.25 0.1 27 / 0.2)",
                    color: "oklch(0.75 0.2 27)",
                  }}
                  data-ocid="contact.error_state"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm tracking-wider"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.18 215), oklch(0.62 0.26 300))",
                  color: "oklch(0.09 0.025 265)",
                  boxShadow: "0 0 20px oklch(0.85 0.18 215 / 0.3)",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
                whileHover={{
                  scale: status === "loading" ? 1 : 1.02,
                  boxShadow: "0 0 30px oklch(0.85 0.18 215 / 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                data-ocid="contact.submit_button"
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
