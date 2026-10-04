import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../data/navItems";
import { contact } from "../../data/contact";
import { useScrolled } from "../../hooks/useScrolled";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";
import logo from "../../assets/logo.png";
import { useTheme } from "../../hooks/useTheme";
import ThemeToggle from "../animation/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const { theme, toggleTheme } = useTheme();

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-40 bg-surface/95 transition-shadow duration-300 ${
        scrolled ? "shadow-md backdrop-blur" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#top" aria-label="Tulas International School, back to top">
          <img
            src={logo}
            alt="Tulas International School"
            width={1080}
            height={1080}
            className="h-11 w-auto sm:h-12"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative py-2 font-display text-lg font-bold uppercase tracking-wide text-ink transition-colors hover:text-brand-text after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button href={contact.applyUrl} external>
            Apply Now
          </Button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-surface-alt lg:hidden"
          >
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <MobileNav id="mobile-nav" open={open} onClose={closeMenu} />
    </header>
  );
}
