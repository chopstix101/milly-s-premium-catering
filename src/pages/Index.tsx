import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChefHat, PartyPopper, Tent, Star, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-catering.jpg";
import foodImg from "@/assets/food-platter.jpg";

const eventTypes = [
  { icon: PartyPopper, title: "Parties & Festivals", desc: "Vibrant celebrations with unforgettable flavors." },
  { icon: ChefHat, title: "Luxury Dinners", desc: "Intimate fine dining experiences that leave a lasting impression." },
  { icon: Star, title: "Weddings", desc: "Your dream wedding deserves the finest catering." },
  { icon: Tent, title: "Corporate Events", desc: "Professional catering for conferences, launches & retreats." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <p className="text-primary tracking-[0.4em] uppercase text-sm mb-6">
            A Bite Above The Rest
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Milly's Outside{" "}
            <span className="gold-text">Catering</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium catering & events management serving Busia and Western Kenya
            since 2011. Making every occasion extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="gold-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowRight size={20} />
            </Link>
            <Link
              to="/menu"
              className="border border-primary/40 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors inline-flex items-center justify-center"
            >
              View Our Menu
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Event Types */}
      <section className="section-padding max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">What We Do</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold">Events We Cater</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.1}>
              <div className="glass-card p-8 text-center group hover:border-primary/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <event.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Our Story</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">About Milly's</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2011 by Milly Okina, Milly's Outside Catering has grown from a small local catering service
                in Busia to one of Western Kenya's most trusted names in events management and premium catering.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 850 events successfully delivered, we bring passion, precision, and a personal touch to
                every occasion — from intimate dinners to grand celebrations.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Read Our Full Story <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <img
                src={foodImg}
                alt="Premium Kenyan cuisine by Milly's Catering"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card px-6 py-4">
                <p className="text-3xl font-serif font-bold text-primary">850+</p>
                <p className="text-sm text-muted-foreground">Events Delivered</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Ready to Make Your Event <span className="gold-text">Unforgettable?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let us handle the catering while you enjoy every moment. Get a personalized quote today.
            </p>
            <Link
              to="/quote"
              className="gold-gradient text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get Your Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
