import { SiBehance, SiInstagram, SiLinkedin } from "react-icons/si";
import { CONTENT } from "../content";

const socialIcons = [
  {
    icon: <SiInstagram size={16} />,
    url: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <SiBehance size={16} />,
    url: "https://behance.net",
    label: "Behance",
  },
  {
    icon: <SiLinkedin size={16} />,
    url: "https://linkedin.com",
    label: "LinkedIn",
  },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "oklch(0.07 0.025 265)",
        borderTop: "1px solid oklch(0.22 0.05 265)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.26 300), oklch(0.85 0.18 215))",
              }}
            >
              AT
            </div>
            <span
              className="font-bold tracking-wider"
              style={{ color: "oklch(0.96 0.015 265)" }}
            >
              AAYUSH THAKUR
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {CONTENT.navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs font-semibold tracking-wider transition-colors duration-200 hover:opacity-100"
                style={{ color: "oklch(0.67 0.06 265)" }}
                data-ocid="footer.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "oklch(0.12 0.03 265)",
                  border: "1px solid oklch(0.22 0.05 265)",
                  color: "oklch(0.67 0.06 265)",
                }}
                aria-label={s.label}
                data-ocid="footer.link"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div
          className="my-8 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.22 0.05 265), transparent)",
          }}
        />

        <div
          className="text-center text-xs"
          style={{ color: "oklch(0.50 0.04 265)" }}
        >
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.85 0.18 215)" }}
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
