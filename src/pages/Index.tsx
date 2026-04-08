import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Palette, CalendarCheck, Star, Home, Building2, Hammer, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";
import { designs } from "@/data/designs";
import heroImage from "@/assets/hero-living.jpg";

const steps = [
  { icon: Palette, title: "Explore Designs", desc: "Browse our portfolio of modular kitchens, commercial interiors, and residential projects." },
  { icon: Ruler, title: "Customize Your Space", desc: "Work with our experienced team to tailor every detail with premium finishes and high-quality materials." },
  { icon: CalendarCheck, title: "Book & Build", desc: "Schedule a consultation and let us handle end-to-end project execution." },
];

const services = [
  {
    icon: Home,
    title: "Modular Kitchen Designs",
    items: ["Acrylic Finish Kitchens", "PVC & Laminate Kitchens", "Customized Storage Solutions", "Modern Hardware & Soft-close Systems"],
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    items: ["Office Interiors", "Showrooms", "Retail Shops & Exec. Spaces"],
  },
  {
    icon: Hammer,
    title: "Contract Works",
    items: ["Experienced & Skilled Team", "Modern Design as per Client Budget", "High-Quality Materials", "End-to-End Project Handling"],
  },
];

const specialties = [
  "Acrylic Cream & Blue Finish Kitchens",
  "Modern False & Floating Ceilings",
  "Luxury Marble & Texture Finishes",
  "Elegant White & Aqua Theme Concepts",
];

const brandCategories = [
  {
    title: "Plywood",
    brands: ["Century Ply", "Green Ply", "Vanam Ply", "Royal Touche", "Magnus", "Gurjan", "Saburi"],
  },
  {
    title: "Laminates / Acrylics / Veneers",
    brands: ["Century", "Green Lams", "Feel Touch", "Vergo", "Royal Touche"],
  },
  {
    title: "Hardware & Kitchen Accessories",
    brands: ["Sleek", "Blum", "Ebco", "Nimmi", "Hettitch", "Olive"],
  },
  {
    title: "False Ceiling",
    brands: ["Saint Gobain (Gypsum)", "Tata Prime", "Jindal", "Everest", "Jitex", "Gypcore"],
  },
];

const testimonials = [
  { name: "Ananya R.", text: "TEKI'S Interior transformed our apartment into a space we're truly proud of. The attention to detail was extraordinary.", rating: 5 },
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
          <img src={heroImage} alt="Luxury interior by TEKI'S" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-4">TEKI'S Interior & Contracts</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-primary-foreground">
              Designing Dreams.
              <br />
              <span className="text-gradient-gold">Building Trust.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-lg">
              We transform residential and commercial spaces with premium finishes, smart design, and high-quality materials.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/designs">
                  Explore Designs <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/#services">Our Services</Link>
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
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Our Portfolio</p>
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

      {/* Services */}
      <section id="services" className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-background rounded-lg p-8 border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">What Sets Us Apart</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Specialties</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, i) => (
            <motion.div
              key={specialty}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border text-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Palette size={20} className="text-primary" />
              </div>
              <p className="font-display text-base font-semibold text-foreground">{specialty}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands We Trust */}
      <section className="bg-cream section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Quality Materials</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Brands We Trust</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">We partner with industry-leading brands to ensure durability, aesthetics, and premium quality in every project.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-background rounded-lg p-6 border border-border"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.brands.map((brand) => (
                    <span key={brand} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                      {brand}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* CTA / Contact */}
      <section id="contact" className="bg-foreground section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Let's Collaborate!
            </h2>
            <p className="font-display text-xl text-primary-foreground/80 italic mb-8">
              And create stunning interiors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <a href="tel:+916301780982" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone size={18} /> +91 63017 80982
              </a>
              <a href="mailto:tekisinteriorscontracts@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail size={18} /> tekisinteriorscontracts@gmail.com
              </a>
            </div>
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
