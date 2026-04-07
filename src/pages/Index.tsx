import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Palette, CalendarCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";
import { designs } from "@/data/designs";
import heroImage from "@/assets/hero-living.jpg";

const steps = [
  { icon: Palette, title: "Explore Designs", desc: "Browse curated interiors by room type, style, and budget." },
  { icon: Ruler, title: "Customize Your Space", desc: "Work with our designers to tailor every detail to your needs." },
  { icon: CalendarCheck, title: "Book & Build", desc: "Schedule a consultation and watch your vision come to life." },
];

const testimonials = [
  { name: "Ananya R.", text: "Intério transformed our apartment into a space we're truly proud of. The attention to detail was extraordinary.", rating: 5 },
  { name: "Rahul & Meera K.", text: "From the first consultation to the final reveal, the experience was seamless and the results exceeded our expectations.", rating: 5 },
  { name: "Deepak S.", text: "The 3D visualization helped us see exactly what our kitchen would look like. No surprises, just perfection.", rating: 5 },
];

export default function Index() {
  const featured = designs.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury interior" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-primary-foreground">
              Design Your
              <br />
              <span className="text-gradient-gold">Dream Home</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-lg">
              Premium interior design services that transform ordinary spaces into extraordinary living experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/designs">
                  Explore Designs <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/#how-it-works">How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Curated Collection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Featured Designs</h2>
          </div>
          <Link to="/designs" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((design, i) => (
            <DesignCard key={design.id} design={design} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/designs">View All Designs</Link>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Simple Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Client Love</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Book a free consultation with our expert designers and take the first step toward your dream home.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/designs">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
