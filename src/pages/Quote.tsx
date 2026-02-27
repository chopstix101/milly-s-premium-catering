import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, MapPin, DollarSign } from "lucide-react";

const eventTypes = [
  "Wedding", "Corporate Event", "Birthday Party", "Festival",
  "Graduation", "Funeral/Memorial", "Baby Shower", "Other",
];

const Quote = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", date: "",
    guests: "", location: "", budget: "", requests: "",
  });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // In production, this would call the API route to send email via Resend
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Quote Request Received! 🎉",
        description: "We'll review your request and get back to you within 24 hours.",
      });
      setForm({
        name: "", email: "", phone: "", eventType: "", date: "",
        guests: "", location: "", budget: "", requests: "",
      });
    }, 2000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground";

  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Book With Us</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">Request a Quote</h1>
          <p className="text-muted-foreground text-lg">
            Tell us about your event and we'll create a custom package just for you.
          </p>
        </div>
      </section>

      <section className="section-padding max-w-3xl mx-auto">
        <ScrollReveal>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal */}
            <div className="glass-card p-8 space-y-5">
              <h3 className="font-serif text-xl font-semibold text-primary flex items-center gap-2">
                <Users size={20} /> Your Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
              </div>
              <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
            </div>

            {/* Event */}
            <div className="glass-card p-8 space-y-5">
              <h3 className="font-serif text-xl font-semibold text-primary flex items-center gap-2">
                <Calendar size={20} /> Event Details
              </h3>
              <select value={form.eventType} onChange={(e) => update("eventType", e.target.value)} required className={inputClass}>
                <option value="">Select Event Type *</option>
                {eventTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="date" required value={form.date} onChange={(e) => update("date", e.target.value)} className={inputClass} />
                <input type="number" placeholder="Number of Guests *" required min={1} value={form.guests} onChange={(e) => update("guests", e.target.value)} className={inputClass} />
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-muted-foreground shrink-0" />
                <input type="text" placeholder="Event Location *" required value={form.location} onChange={(e) => update("location", e.target.value)} className={inputClass} />
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-muted-foreground shrink-0" />
                <input type="text" placeholder="Estimated Budget (KSh)" value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputClass} />
              </div>
            </div>

            {/* Requests */}
            <div className="glass-card p-8 space-y-5">
              <h3 className="font-serif text-xl font-semibold text-primary">Special Requests</h3>
              <textarea
                rows={4}
                placeholder="Any dietary requirements, themes, or special requests..."
                value={form.requests}
                onChange={(e) => update("requests", e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full gold-gradient text-primary-foreground py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Quote Request"}
            </button>
          </form>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Quote;
