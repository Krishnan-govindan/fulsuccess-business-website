import { Calendar, Clock, Video } from "lucide-react";
import { CALENDLY_EMBED_URL, CALENDLY_URL } from "@/lib/site";

const perks = [
  { icon: Clock, text: "Free 30-minute session" },
  { icon: Video, text: "Online video call" },
  { icon: Calendar, text: "Pick a time that suits you" },
];

const Booking = () => {
  return (
    <section id="book" className="relative overflow-hidden py-24">
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow mb-5">Book a call</span>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let's build your <span className="text-gradient">AI growth plan</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Grab a free strategy call. Pick a slot below and we'll map out exactly how AI can move your
            business forward — no pressure, no obligation.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {perks.map((p) => (
              <span
                key={p.text}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground"
              >
                <p.icon className="h-4 w-4 text-primary" />
                {p.text}
              </span>
            ))}
          </div>
        </div>

        {/* Inline Calendly embed */}
        <div className="glass-card overflow-hidden p-2 sm:p-3">
          <iframe
            title="Book a call with fulsuccess"
            src={CALENDLY_EMBED_URL}
            className="h-[700px] w-full rounded-xl"
            loading="lazy"
          />
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Prefer a new tab?{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Open the booking page →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Booking;
