import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Send, Calendar } from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";

const services = [
  "Social Media Ads Creation",
  "Social Media Automation",
  "Website Creation",
  "Landing Page Creation",
  "Blog Automation",
  "AI Video Editing",
  "AI Clone for Your Brand",
  "Chatbot Building",
];

const inputClasses =
  "bg-white/[0.03] border-white/10 focus:border-primary transition-colors";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setConsentChecked(false);
        setShowSuccessDialog(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-2xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="eyebrow mb-5">Get in touch</span>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Tell us about <span className="text-gradient">your project</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-card p-6 sm:p-8">
          <form
            action="https://formspree.io/f/xzzjlqlo"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="font-semibold text-foreground">
                Full Name *
              </Label>
              <Input id="name" name="name" type="text" placeholder="John Doe" required className={inputClasses} />
            </div>

            {/* WhatsApp Number Field with Country Code */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold text-foreground">
                WhatsApp Number *
              </Label>
              <div className="flex gap-2">
                <Select name="countryCode" required>
                  <SelectTrigger className={`w-[140px] ${inputClasses}`}>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] border-white/10 bg-card">
                    <SelectItem value="+1">🇺🇸 +1 (US)</SelectItem>
                    <SelectItem value="+44">🇬🇧 +44 (UK)</SelectItem>
                    <SelectItem value="+91">🇮🇳 +91 (India)</SelectItem>
                    <SelectItem value="+86">🇨🇳 +86 (China)</SelectItem>
                    <SelectItem value="+81">🇯🇵 +81 (Japan)</SelectItem>
                    <SelectItem value="+49">🇩🇪 +49 (Germany)</SelectItem>
                    <SelectItem value="+33">🇫🇷 +33 (France)</SelectItem>
                    <SelectItem value="+39">🇮🇹 +39 (Italy)</SelectItem>
                    <SelectItem value="+34">🇪🇸 +34 (Spain)</SelectItem>
                    <SelectItem value="+7">🇷🇺 +7 (Russia)</SelectItem>
                    <SelectItem value="+52">🇲🇽 +52 (Mexico)</SelectItem>
                    <SelectItem value="+55">🇧🇷 +55 (Brazil)</SelectItem>
                    <SelectItem value="+61">🇦🇺 +61 (Australia)</SelectItem>
                    <SelectItem value="+82">🇰🇷 +82 (S. Korea)</SelectItem>
                    <SelectItem value="+971">🇦🇪 +971 (UAE)</SelectItem>
                    <SelectItem value="+966">🇸🇦 +966 (Saudi)</SelectItem>
                    <SelectItem value="+65">🇸🇬 +65 (Singapore)</SelectItem>
                    <SelectItem value="+60">🇲🇾 +60 (Malaysia)</SelectItem>
                    <SelectItem value="+63">🇵🇭 +63 (Philippines)</SelectItem>
                    <SelectItem value="+66">🇹🇭 +66 (Thailand)</SelectItem>
                    <SelectItem value="+27">🇿🇦 +27 (S. Africa)</SelectItem>
                    <SelectItem value="+20">🇪🇬 +20 (Egypt)</SelectItem>
                    <SelectItem value="+234">🇳🇬 +234 (Nigeria)</SelectItem>
                    <SelectItem value="+254">🇰🇪 +254 (Kenya)</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="123 456 7890"
                  required
                  className={`flex-1 ${inputClasses}`}
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <Label htmlFor="service" className="font-semibold text-foreground">
                Service Interested In *
              </Label>
              <Select name="service" required>
                <SelectTrigger className={inputClasses}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-card">
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="font-semibold text-foreground">
                Additional Details (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us more about your project..."
                rows={4}
                className={`resize-none ${inputClasses}`}
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Checkbox
                id="consent"
                name="consent"
                required
                checked={consentChecked}
                onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed text-muted-foreground">
                I consent to providing my WhatsApp number to receive communication messages regarding my inquiry.
                I understand that I can opt-out at any time. *
              </Label>
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting || !consentChecked} className="btn-glow w-full">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Inquiry
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-md border-white/10 bg-card/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-center font-display text-2xl font-bold text-gradient">
              Thank You! 🎉
            </DialogTitle>
            <DialogDescription className="pb-4 pt-4 text-center text-base text-foreground">
              Thanks for sharing your details! We'll get back to you shortly. Want to move faster? Book a call now.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center pb-2">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-glow">
              <Calendar className="h-5 w-5" />
              Book Your Free Consultation Call
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactForm;
