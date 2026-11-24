import {
  Share2,
  Bot,
  Globe,
  FileText,
  PenTool,
  Video,
  UserCheck,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CALENDLY_URL } from "@/lib/site";

export const solutions = [
  {
    icon: Share2,
    title: "Social Media Ads Creation",
    description: "AI-driven campaigns that convert and engage your target audience with precision.",
    detailedDescription: "Our AI-powered social media advertising solution leverages advanced machine learning algorithms to create highly targeted campaigns across all major platforms including Facebook, Instagram, LinkedIn, and Twitter. We analyze your audience demographics, behavior patterns, and engagement metrics to craft compelling ad copy and visuals that drive conversions. Our system continuously optimizes your campaigns in real-time, adjusting targeting parameters, bid strategies, and creative elements to maximize ROI while minimizing ad spend.",
    color: "primary",
    delay: "0s"
  },
  {
    icon: Bot,
    title: "Social Media Automation",
    description: "Auto-posting & engagement systems that keep your brand active 24/7.",
    detailedDescription: "Transform your social media presence with our intelligent automation platform. Our AI system schedules and publishes content at optimal times when your audience is most active, ensuring maximum visibility and engagement. The platform monitors mentions, comments, and messages across all your social channels, automatically responding to common queries while flagging important conversations for human review. It also curates relevant content from your industry, suggests trending hashtags, and provides detailed analytics to refine your social media strategy.",
    color: "secondary",
    delay: "0.1s"
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Modern, responsive, animated websites that captivate and convert visitors.",
    detailedDescription: "We build stunning, high-performance websites that work flawlessly across all devices and browsers. Each website features modern design principles, smooth animations, and intuitive navigation that guides visitors toward conversion. Our development process includes SEO optimization, fast loading times, accessibility compliance, and integration with analytics tools. Whether you need an e-commerce platform, corporate website, or landing page, we deliver responsive designs with clean code, secure hosting, and ongoing maintenance support.",
    color: "neural",
    delay: "0.2s"
  },
  {
    icon: FileText,
    title: "Landing Page Creation",
    description: "Conversion-focused designs that turn visitors into customers instantly.",
    detailedDescription: "Our landing pages are meticulously crafted to maximize conversions through strategic placement of compelling headlines, persuasive copy, and clear calls-to-action. Each page is A/B tested for optimal performance, with heat mapping and user behavior analysis to continuously improve conversion rates. We implement proven psychological triggers, social proof elements, and urgency tactics while maintaining a clean, professional aesthetic. Every landing page is mobile-optimized, loads in under 2 seconds, and integrates seamlessly with your CRM and email marketing tools.",
    color: "accent",
    delay: "0.3s"
  },
  {
    icon: PenTool,
    title: "Blog Automation",
    description: "Auto-generate and post engaging blogs daily to boost your SEO ranking.",
    detailedDescription: "Elevate your content marketing with our AI-powered blog automation system. Our platform researches trending topics in your industry, generates well-written, SEO-optimized articles, and publishes them on a consistent schedule. Each blog post is tailored to your brand voice, includes relevant keywords, internal links, and engaging multimedia elements. The system also handles meta descriptions, image optimization, and social media promotion. Analytics tracking shows which topics resonate with your audience, allowing continuous refinement of your content strategy to improve search rankings and drive organic traffic.",
    color: "primary",
    delay: "0.4s"
  },
  {
    icon: Video,
    title: "AI Video Editing",
    description: "Smart, quick, professional video production that saves time and money.",
    detailedDescription: "Our AI video editing service transforms raw footage into polished, professional videos in a fraction of the time traditional editing requires. The AI automatically identifies the best clips, removes awkward pauses, adds smooth transitions, and synchronizes audio. It can add subtitles, overlay graphics, apply color grading, and even suggest background music that matches your video's mood. Perfect for creating social media content, product demos, testimonials, or marketing videos. The platform supports all major video formats and can optimize output for different platforms and devices.",
    color: "secondary",
    delay: "0.5s"
  },
  {
    icon: UserCheck,
    title: "AI Clone for Your Brand",
    description: "Personalized AI avatar and voice clone that represents your brand 24/7.",
    detailedDescription: "Create a digital version of yourself or your brand spokesperson that can engage with customers around the clock. Our AI cloning technology captures your voice, speech patterns, and communication style to create an authentic digital representative. This AI clone can handle video calls, answer customer questions, deliver presentations, and create personalized video messages at scale. It's perfect for customer support, sales demos, training videos, and maintaining a consistent brand presence across multiple channels simultaneously. The clone learns and improves from each interaction while maintaining your unique personality and expertise.",
    color: "neural",
    delay: "0.6s"
  },
  {
    icon: MessageSquare,
    title: "Chatbot Building",
    description: "Intelligent AI chatbots that handle customer queries, boost engagement, and drive sales 24/7.",
    detailedDescription: "Deploy sophisticated AI chatbots that provide instant, accurate responses to customer inquiries at any time of day. Our chatbots are trained on your business data, products, and services to deliver personalized assistance that feels natural and helpful. They can qualify leads, schedule appointments, process orders, troubleshoot issues, and seamlessly escalate complex queries to human agents when needed. The system integrates with your existing CRM, help desk, and e-commerce platforms, providing valuable insights into customer needs and behavior patterns. Advanced natural language processing ensures the chatbot understands context, intent, and sentiment for more meaningful conversations.",
    color: "accent",
    delay: "0.7s"
  }
];

const iconTile: Record<string, string> = {
  primary: "bg-primary/15 text-primary",
  secondary: "bg-secondary/15 text-secondary",
  neural: "bg-neural/15 text-neural",
  accent: "bg-accent/15 text-accent",
};

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <section id="solutions" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow mb-5">What we do</span>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            AI solutions that <span className="text-gradient">do the work for you</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A complete toolkit to automate, optimize, and accelerate your growth — built and managed end to end.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <button
              key={solution.title}
              onClick={() => setSelectedSolution(solution)}
              className="glass-card group flex flex-col items-start p-6 text-left"
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconTile[solution.color]}`}>
                <solution.icon className="h-6 w-6" />
              </div>

              <h3 className="font-display text-lg font-semibold">{solution.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="mb-6 text-muted-foreground">
            Not sure which fits your business? Let's map it out together.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-glow">
            Schedule Your Free Consultation
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Solution Details Dialog */}
      <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
        <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto border-white/10 bg-card/95 backdrop-blur-xl">
          <DialogHeader>
            <div className="mb-4 flex items-center gap-4">
              {selectedSolution && (
                <>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconTile[selectedSolution.color]}`}>
                    <selectedSolution.icon className="h-6 w-6" />
                  </div>
                  <DialogTitle className="font-display text-2xl">{selectedSolution.title}</DialogTitle>
                </>
              )}
            </div>
            <DialogDescription className="text-base leading-relaxed text-foreground/90">
              {selectedSolution?.detailedDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-glow">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Solutions;
