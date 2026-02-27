import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Grace Wanjiku",
    role: "Bride, Busia Wedding 2023",
    text: "Milly's team made our wedding day absolutely magical. The food was incredible, the setup was stunning, and every guest raved about the service. We couldn't have asked for a better catering partner.",
    rating: 5,
  },
  {
    name: "James Ochieng",
    role: "Corporate Event Manager",
    text: "We've used Milly's Outside Catering for three consecutive corporate retreats and they never disappoint. Professional, punctual, and the food quality is consistently outstanding.",
    rating: 5,
  },
  {
    name: "Sarah Nafula",
    role: "Birthday Celebration",
    text: "From the initial consultation to the last plate served, Milly's team was exceptional. The pilau and nyama choma were the talk of the party. Highly recommend for any event!",
    rating: 5,
  },
  {
    name: "Dr. Peter Wekesa",
    role: "Medical Conference, Kakamega",
    text: "Organizing a conference for 200 doctors is stressful enough without worrying about catering. Milly's handled everything flawlessly — the food, the serving, and even the tent setup.",
    rating: 5,
  },
  {
    name: "Faith Auma",
    role: "Festival Organizer",
    text: "We hired Milly's for a two-day community festival and they delivered beyond our expectations. Over 500 guests served hot, delicious meals without a single complaint. Truly a bite above the rest!",
    rating: 5,
  },
  {
    name: "Michael Barasa",
    role: "Graduation Party",
    text: "My daughter's graduation party was perfect thanks to Milly's. The decorations were beautiful, the food was amazing, and the prices were very reasonable. Thank you, Milly!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Happy Clients</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">Testimonials</h1>
        </div>
      </section>

      <section className="section-padding max-w-4xl mx-auto">
        <div className="relative">
          <div className="glass-card p-10 sm:p-14 text-center min-h-[300px] flex flex-col justify-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed italic mb-8">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="font-serif text-lg font-semibold text-primary">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
