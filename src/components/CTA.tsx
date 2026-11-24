import { ArrowRight, Calendar, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import ctaImage from "@/assets/ai-handshake.jpg";
import { CALENDLY_URL } from "@/lib/site";

const benefits = [
  { icon: Rocket, title: "Fast Results", text: "See improvements within the first 30 days." },
  { icon: Sparkles, title: "Expert Guidance", text: "Work with specialists who know your industry." },
  { icon: ShieldCheck, title: "Scalable Growth", text: "Solutions that grow right alongside you." },
];

const CTA = () => {
  const toBook = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-card relative overflow-hidden px-6 py-16 text-center sm:px-16">
          {/* Background image + gradient wash */}
          <div
            className="absolute inset-0 -z-10 opacity-15"
            style={{ backgroundImage: `url(${ctaImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />

          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Ready to put your growth <span className="text-gradient">on autopilot?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Don't let competitors get ahead. Book a free strategy session and walk away with a
            personalized AI roadmap for your business.
          </p>

          {/* Benefits */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <b.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="font-display text-base font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-glow w-full sm:w-auto">
              <Calendar className="h-5 w-5" />
              Book a Free Discovery Call
            </a>
            <a href="#book" onClick={toBook} className="btn-ghost-outline w-full sm:w-auto">
              See available times
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> No long-term contracts
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> 30-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neural" /> Free strategy session
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
