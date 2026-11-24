import { Linkedin, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { solutions } from "@/components/Solutions";
import { CALENDLY_URL, CONTACT_EMAIL, LINKEDIN_URL, FACEBOOK_URL } from "@/lib/site";

const Footer = () => {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  // Map footer service names to solution titles
  const serviceMapping: { [key: string]: string } = {
    "Social Media Automation": "Social Media Automation",
    "Website Creation": "Website Creation",
    "AI Video Editing": "AI Video Editing",
    "Blog Automation": "Blog Automation",
    "Landing Pages": "Landing Page Creation",
    "AI Brand Clone": "AI Clone for Your Brand",
    "Chatbot Building": "Chatbot Building",
  };

  const handleServiceClick = (serviceName: string) => {
    const solutionTitle = serviceMapping[serviceName];
    const solution = solutions.find((s) => s.title === solutionTitle);
    if (solution) setSelectedSolution(solution);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="fulsuccess" className="h-10 brightness-0 invert" />
              <span className="font-display text-2xl font-bold text-gradient">fulsuccess</span>
            </div>

            <p className="leading-relaxed text-muted-foreground">
              Transforming businesses with AI automation, creativity, and growth-focused strategies.
            </p>

            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-glow px-5 py-2.5 text-sm">
              <Calendar className="h-4 w-4" />
              Book Free Call
            </a>
          </div>

          {/* Navigation Links */}
          <div className="space-y-5">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "Solutions", id: "solutions" },
                { label: "About", id: "about" },
                { label: "Book a Call", id: "book" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="cursor-pointer text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              AI Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Social Media Automation",
                "Website Creation",
                "AI Video Editing",
                "Blog Automation",
                "Landing Pages",
                "AI Brand Clone",
                "Chatbot Building",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="cursor-pointer text-left text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-5">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">{CONTACT_EMAIL}</span>
            </a>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Follow us on social media</p>
              <div className="flex gap-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} fulsuccess. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors duration-300 hover:text-primary">Privacy Policy</a>
            <a href="#" className="transition-colors duration-300 hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Solution Details Dialog */}
      <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="border-white/10 bg-card/95 backdrop-blur-xl sm:max-w-[600px]">
          <DialogHeader>
            <div className="mb-4 flex items-center gap-4">
              {selectedSolution && (
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <selectedSolution.icon className="h-6 w-6" />
                </div>
              )}
              <DialogTitle className="font-display text-2xl">{selectedSolution?.title}</DialogTitle>
            </div>
            <DialogDescription className="text-base leading-relaxed text-foreground/80">
              {selectedSolution?.detailedDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-glow w-full">
              <Calendar className="mr-1 h-4 w-4" />
              Schedule a Consultation
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
