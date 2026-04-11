import { motion } from "framer-motion";
import { Paintbrush, Sofa, Home, Building2, Hammer, Layers } from "lucide-react";

const services = [
  { icon: Paintbrush, title: "Residential Interiors", desc: "Complete home interior solutions from concept to execution." },
  { icon: Sofa, title: "Modular Furniture", desc: "Custom modular kitchens, wardrobes, and TV units." },
  { icon: Home, title: "Turnkey Projects", desc: "End-to-end project management for hassle-free interiors." },
  { icon: Building2, title: "Commercial Interiors", desc: "Office, retail, and hospitality interior design." },
  { icon: Hammer, title: "Renovation & Remodeling", desc: "Transform existing spaces with modern upgrades." },
  { icon: Layers, title: "False Ceiling & Lighting", desc: "Designer ceilings and ambient lighting solutions." },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of interior design and contracting services to bring your vision to life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border"
            >
              <s.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
