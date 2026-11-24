import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-brain.jpg";
import { CALENDLY_URL } from "@/lib/site";

const stats = [
  { value: "500+", label: "Projects delivered" },
  { value: "95%", label: "Client satisfaction" },
  { value: "24/7", label: "AI automation" },
];

const Hero = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background image (very subtle) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)",
        }}
      />
      {/* Grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-secondary/15 blur-[120px] float-delayed" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center animate-fade-up">
        <span className="eyebrow mb-7">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          AI Automation Agency
        </span>

        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          Grow your business on
          <br className="hidden sm:block" />{" "}
          <span className="text-gradient">autopilot with AI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          We build AI-powered systems — social media, websites, chatbots, video, and brand clones —
          that automate the busywork and turn attention into customers.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-glow w-full sm:w-auto">
            <Calendar className="h-5 w-5" />
            Book a Free Strategy Call
          </a>
          <a href="#solutions" onClick={(e) => scrollTo(e, "solutions")} className="btn-ghost-outline w-full sm:w-auto">
            Explore Solutions
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card px-4 py-6">
              <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
