import ScrollReveal from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-catering.jpg";
import { Award, Users, Calendar, Heart } from "lucide-react";

const stats = [
  { icon: Calendar, value: "13+", label: "Years of Excellence" },
  { icon: Award, value: "850+", label: "Events Delivered" },
  { icon: Users, value: "50K+", label: "Guests Served" },
  { icon: Heart, value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutImg})` }} />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Our Story</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8 text-center">
            From Busia to <span className="gold-text">Western Kenya's Finest</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              In 2011, Milly Okina had a vision: to bring world-class catering to Western Kenya. Starting from
              her kitchen in Busia, she began serving small gatherings with the same dedication and quality that
              you'd find at a five-star hotel.
            </p>
            <p>
              Word spread quickly. What started as a one-woman operation grew into a full-service catering and
              events management company. Today, Milly's Outside Catering is the trusted partner for weddings,
              corporate events, festivals, and private celebrations across Busia and the entire Western Kenya region.
            </p>
            <p>
              With over 850 events and counting, our team of experienced chefs, event planners, and service staff
              ensures every detail is perfect. From sourcing the freshest local ingredients to crafting menus that
              celebrate Kenyan culinary heritage with a modern twist — we pour love into every dish.
            </p>
            <p>
              Our mission is simple: deliver exceptional food, impeccable service, and unforgettable experiences.
              Because at Milly's, every event is personal.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <p className="font-serif text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
