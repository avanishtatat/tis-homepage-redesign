import { MapPin, Mail, Phone } from "lucide-react";
import { contact, socials } from "../../data/contact";
import { footerLinks } from "../../data/footerLinks";
import Button from "../ui/Button";
import campusTopView from "../../assets/campus-top-view.webp";
import footerLogo from "../../assets/footer-logo.png";

const linkClass =
  "inline-flex min-h-8 items-center hover:underline underline-offset-4 focus-visible:outline-white";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden text-white">
      <img
        src={campusTopView}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/35 dark:bg-black/55"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img
              src={footerLogo}
              alt="Tulas International School"
              className="h-16 w-auto"
            />
            <address className="mt-6 space-y-3 text-base not-italic">
              <p className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 focus-visible:outline-white"
                >
                  {contact.address}
                </a>
              </p>
              <p className="flex gap-3">
                <Phone size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <span>
                  {contact.landlines.map((line, i) => (
                    <span key={line.href}>
                      {i > 0 && ", "}
                      <a
                        href={line.href}
                        className="hover:underline underline-offset-4 focus-visible:outline-white"
                      >
                        {line.label}
                      </a>
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex gap-3">
                <Mail size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:underline underline-offset-4 focus-visible:outline-white"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">
              Start Your Journey
            </h2>
            <p className="mt-4">
              Admissions Helpline
              <br />
              <a
                href={contact.helpline.href}
                className="text-lg font-bold hover:underline underline-offset-4 focus-visible:outline-white"
              >
                {contact.helpline.label}
              </a>
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Button href={contact.applyUrl} external variant="light">
                Apply Now
              </Button>
              <Button
                href={contact.virtualTourUrl}
                external
                variant="outlineLight"
              >
                Virtual Tour
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/30 pt-6 text-sm">
          © {new Date().getFullYear()} Tulas International School, Dehradun.
          Homepage redesign created as a frontend assessment project.
        </p>
      </div>
    </footer>
  );
}
