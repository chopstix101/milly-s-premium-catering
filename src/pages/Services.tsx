import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import {
  ChefHat, PartyPopper, Tent, Speaker, Droplets, Bath, Sparkles, ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  { icon: ChefHat, title: "Outside Catering", desc: "Full-service catering for events of any size. Our expert chefs prepare a wide variety of Kenyan and international cuisines, served buffet or plated." },
  { icon: PartyPopper, title: "Events Management", desc: "End-to-end event planning and coordination. From concept to execution, we handle every detail so you can relax and enjoy." },
  { icon: Tent, title: "Tents & Seats", desc: "Elegant marquee tents, chairs, tables, and linens for hire. We provide complete event furniture solutions for outdoor and indoor venues." },
  { icon: Speaker, title: "PA System & Sound", desc: "Professional sound systems, microphones, and DJ equipment for your event. Crystal-clear audio for speeches, music, and entertainment." },
  { icon: Droplets, title: "Water Bowser", desc: "Clean water delivery service for events in remote locations. Reliable water supply ensures your event runs smoothly anywhere." },
  { icon: Bath, title: "Portable Toilets", desc: "Clean, modern portable sanitation facilities for outdoor events. Maintained to the highest hygiene standards throughout your event." },
  { icon: Sparkles, title: "Decoration", desc: "Transform any venue with our stunning decorations. From floral arrangements to thematic setups, we create the perfect ambiance." },
];

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 2-4 weeks in advance for most events. For weddings and large corporate events, 1-3 months is ideal to ensure availability." },
  { q: "Do you cater for dietary restrictions?", a: "Absolutely! We accommodate vegetarian, vegan, halal, gluten-free, and other dietary requirements. Just let us know when you request your quote." },
  { q: "What areas do you serve?", a: "We primarily serve Busia and the greater Western Kenya region, but we can travel further for larger events. Contact us to discuss your location." },
  { q: "Can I customize the menu?", a: "Yes! All our menus are fully customizable. We'll work with you to create the perfect menu that fits your event theme and budget." },
  { q: "Do you provide a tasting session?", a: "We offer tasting sessions for wedding and large event bookings. This allows you to sample and finalize your menu choices before the big day." },
];

const Services = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">What We Offer</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg">
            Complete event solutions — from catering to setup, we handle it all.
          </p>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="glass-card p-8 h-full group hover:border-primary/40 transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">FAQ</p>
              <h2 className="font-serif text-4xl font-bold">Common Questions</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Let's Plan Your <span className="gold-text">Perfect Event</span>
            </h2>
            <Link
              to="/quote"
              className="gold-gradient text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight size={20} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Services;
