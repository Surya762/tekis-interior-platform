import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Clock, Building2, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const milestones = [
  { year: "Founded", desc: "TEKI'S Interior & Contracts established with a vision for quality craftsmanship" },
  { year: "Growth", desc: "Expanded services to commercial interiors, offices & retail spaces" },
  { year: "20+", desc: "Successfully completed over 20 residential & commercial projects" },
  { year: "Today", desc: "One of the most trusted interior brands in the region" },
];

const values = [
  { icon: Award, title: "Quality First", desc: "We use only premium materials and trusted brands to ensure lasting results." },
  { icon: Users, title: "Client-Centric", desc: "Every project is tailored to the client's vision, budget, and lifestyle." },
  { icon: Clock, title: "Timely Delivery", desc: "We respect deadlines and ensure end-to-end project completion on time." },
  { icon: Heart, title: "Passion for Design", desc: "Our team brings creativity and attention to detail to every space we transform." },
];

const teamMembers = [
  { name: "Design Team", role: "Creative Designers", desc: "Expert interior designers who bring your vision to life with innovative concepts." },
  { name: "Execution Team", role: "Skilled Craftsmen", desc: "Experienced professionals ensuring precision and quality in every installation." },
  { name: "Project Managers", role: "Coordination & Delivery", desc: "Dedicated managers who keep your project on track from start to finish." },
];

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Crafting Spaces, <span className="text-gradient-gold">Building Trust</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            TEKI'S Interior & Contracts is a premier interior design and contracting firm 
            delivering exceptional modular kitchens, commercial interiors, and residential 
            transformations with uncompromising quality.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To deliver world-class interior solutions that blend functionality with aesthetics, using premium materials and skilled craftsmanship — all within our clients' budget and timelines.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become the most trusted name in interior design and contracting, known for innovation, quality, and client satisfaction across residential and commercial spaces.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Managing Director */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2 block">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Managing Director</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="max-w-3xl mx-auto bg-background border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="w-28 h-28 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-display font-bold text-primary">RT</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Rajiv Teki</h3>
            <p className="text-primary font-medium mb-6">Managing Director & Founder</p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              With years of hands-on experience in interior design and contracting, Rajiv Teki 
              founded TEKI'S Interior & Contracts with a clear mission — to bring premium quality 
              interiors within reach of every home and business. His deep understanding of materials, 
              design trends, and project execution has been the driving force behind the company's success.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Under his leadership, TEKI'S has built a reputation for delivering projects on time, 
              using only the finest brands like Century Ply, Blum, Saint Gobain, and Hettich, while 
              maintaining a personal touch with every client. Rajiv believes that great interiors are 
              not just about aesthetics — they're about creating spaces that improve lives.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">20+</p>
                <p className="text-xs text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">2+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Client Focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Milestones That Define Us</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">{m.year}</p>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2 block">Our People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Team Behind TEKI'S</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{t.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{t.role}</p>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
