import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Palette, CalendarCheck, Star, Home, Building2, Hammer, Phone, Mail, TreePine, Layers, Wrench, CloudSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import DesignCard from "@/components/DesignCard";
import { designs } from "@/data/designs";
import heroImage from "@/assets/hero-living.jpg";
import BudgetCalculator from "@/components/BudgetCalculator";


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
    icon: TreePine,
    title: "Plywood",
    desc: "Premium grade plywood for lasting durability",
    brands: ["Century Ply", "Green Ply", "Vanam Ply", "Royal Touche", "Magnus", "Gurjan", "Saburi"],
  },
  {
    icon: Layers,
    title: "Laminates / Acrylics / Veneers",
    desc: "Stunning surface finishes for every taste",
    brands: ["Century", "Green Lams", "Feel Touch", "Vergo", "Royal Touche"],
  },
  {
    icon: Wrench,
    title: "Hardware & Kitchen Accessories",
    desc: "Precision-engineered fittings & mechanisms",
    brands: ["Sleek", "Blum", "Ebco", "Nimmi", "Hettitch", "Olive"],
  },
  {
    icon: CloudSun,
    title: "False Ceiling",
    desc: "Industry-standard ceiling solutions",
    brands: ["Saint Gobain (Gypsum)", "Tata Prime", "Jindal", "Everest", "Jitex", "Gypcore"],
  },
];

const testimonials = [
  { name: "Naga raju", text: "Very Good with Interiors... planning & execution was very professional.. & quite budgeted Plans.. a big kudos to Teki Interior Contracts Team!", rating: 5 },
  { name: "Jhansi Vani Nimmagadda", text: "A big thanks to the Teki's interior team for the amazing work on our home! Everything was designed perfectly as per our needs. The finish and creativity are excellent. Highly satisfied!", rating: 5 },
  { name: "Rakesh Banala", text: "They perfectly understood my requirements and turned my vision into reality with creative and practical designs.", rating: 5 },
  { name: "Praveen ch", text: "The interior design work was excellent, elegant finish. The team understood my requirements perfectly and delivered beyond expectations. Highly satisfied with the overall outcome.", rating: 5 },
  { name: "Sindhuja Anupoju", text: "So much obliged and thankful to the whole Tekis Contracts team. Very good Designs and the staff are very friendly and their detailing was very professional. Mainly thankful to Director Mr. Teki Rajiv garu, who is a very humble person.", rating: 5 },
  { name: "Ram Mohan", text: "Really it's amazing... Teki's interior designers are doing their best with very comfortable, affordable and very reasonable prices compared to other contractors. Felt very happy to be a fully satisfied customer!", rating: 5 },
  { name: "Sindhuja dharmavarapu", text: "A beautifully designed modern bedroom that perfectly blends elegance, comfort, and functionality with smart space utilization. We are fully satisfied with Teki's Interiors and Contracts.", rating: 5 },
];

export default function Index() {
  const featured = designs.slice(0, 4);

  return (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl"
    >
      <p className="text-white/70 text-sm mb-4">
        TEKI'S Interior & Contracts
      </p>

      <h1 className="text-5xl md:text-7xl font-bold text-white">
        Designing Dreams.
      </h1>

      <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
        Building Trust.
      </h1>

      {/* Pricing */}
      <div className="mt-6">
        <p className="text-white/70 text-sm">Starting from</p>
        <p className="text-2xl font-bold text-yellow-400 mb-4">
          ₹2.5 Lakhs*
        </p>

        <a
      href="https://wa.me/916301780982?text=Hi%20Tekis!%20🏠%20Please%20share%20more%20details%20about%201%20BHK%20interior%20design"
      target="_blank"
    >
      <Button variant="outline">1 BHK</Button>
    </a>

    <a
      href="https://wa.me/916301780982?text=Hi%20Tekis!%20🏠%20Please%20share%20more%20details%20about%202%20BHK%20interior%20design"
      target="_blank"
    >
      <Button className="bg-white text-black">2 BHK ⭐</Button>
    </a>

    <a
      href="https://wa.me/916301780982?text=Hi%20Tekis!%20🏠%20Please%20share%20more%20details%20about%203%20BHK%20interior%20design"
      target="_blank"
    >
      <Button variant="outline">3 BHK</Button>
    </a>
  </div>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap">
        <Button asChild>
          <Link to="/designs">Explore Designs</Link>
        </Button>

        <Button asChild>
          <Link to="/budget-calculator">Calculate Budget</Link>
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
      <section className="bg-cream section-padding overflow-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-background rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cat.icon size={26} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.brands.map((brand, j) => (
                    <motion.span
                      key={brand}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.04 }}
                      className="text-sm font-medium bg-muted text-foreground px-4 py-2 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
                    >
                      {brand}
                    </motion.span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{t.name}</p>
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
                <Phone size={18} /> +91 95050 45084
              </a>
              <a href="mailto:tekisinteriorscontracts@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail size={18} /> tekisinteriorscontracts@gmail.com
              </a>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="contact">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
