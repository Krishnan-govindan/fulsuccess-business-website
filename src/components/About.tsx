import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/human-ai-collaboration.jpg";

const features = [
  { icon: Users, title: "Expert Team", text: "AI specialists with proven track records." },
  { icon: Target, title: "Results-Driven", text: "Focused on measurable business growth." },
  { icon: Lightbulb, title: "Innovation", text: "Cutting-edge AI, implemented the right way." },
  { icon: TrendingUp, title: "Growth Focus", text: "Strategies designed for scalable success." },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <span className="eyebrow mb-5">Who we are</span>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              We make AI <span className="text-gradient">simple, accessible, and profitable</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              fulsuccess helps businesses adapt to the future with AI-driven solutions. We handle the
              strategy and the build, so you get the results without the complexity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="glass-card group p-5">
                  <f.icon className="mb-3 h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-display text-base font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="glass-card group relative overflow-hidden p-0">
              <img
                src={aboutImage}
                alt="Human and AI collaboration"
                className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Floating Stats */}
              <div className="absolute inset-x-6 bottom-6 flex gap-4">
                <div className="glass-card flex-1 px-4 py-4">
                  <div className="font-display text-2xl font-bold text-gradient">500+</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </div>
                <div className="glass-card flex-1 px-4 py-4">
                  <div className="font-display text-2xl font-bold text-gradient">95%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 -top-6 -z-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-full bg-secondary/15 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
