"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-bg/85 backdrop-blur border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between py-4 md:py-5">
        <a
          href="#home"
          aria-label="Oisin Omaolchallan — Home"
          className="flex items-center gap-2 font-mono text-base md:text-lg tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="Oisin Omaolchallan logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-full"
          />
          <span className="text-white">oisin</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:oisin3264@gmail.com"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Get in touch
        </a>
        <nav className="md:hidden flex items-center gap-5 text-sm font-medium">
          {navItems.slice(1, 4).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
