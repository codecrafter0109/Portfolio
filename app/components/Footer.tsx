import Image from "next/image";
import { LinkedInIcon, GithubIcon, MailIcon } from "./Icons";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line mt-8">
      <div className="section-container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <a
            href="#home"
            aria-label="Oisin Omaolchallan — Home"
            className="flex items-center gap-2 font-mono text-sm tracking-tight mb-2"
          >
            <Image
              src="/logo.png"
              alt="Oisin Omaolchallan logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full"
            />
            <span className="text-white">oisin</span>
          </a>
          <p className="text-xs text-muted">
            © {year} Oisin Omaolchallan · Senior Full Stack Web Developer
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-5 text-xs text-muted">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-accent transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-muted">
          <a
            href="mailto:oisin3264@gmail.com"
            aria-label="Email"
            className="hover:text-accent transition-colors"
          >
            <MailIcon />
          </a>
          <a
            href="https://uk.linkedin.com/in/oisin-o-aba110248/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/codecrafter0109"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
