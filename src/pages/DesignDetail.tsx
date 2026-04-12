import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Ruler, Palette, IndianRupee, User } from "lucide-react";
import { designs, categoryLabels, styleLabels } from "@/data/designs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DesignDetail() {
  const { id } = useParams();
  const design = designs.find((d) => d.id === id);

  if (!design) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Design not found</h2>
          <Button asChild><Link to="/designs">Back to Gallery</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <Link to="/designs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden aspect-[4/5]">
              <img src={design.image} alt={design.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">{categoryLabels[design.category]}</Badge>
                <Badge variant="outline">{styleLabels[design.style]}</Badge>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">{design.title}</h1>
              <div className="flex items-center gap-2 mt-3 text-muted-foreground">
                <User size={16} />
                <span>{design.designer}</span>
                <span>·</span>
                <Star size={16} className="fill-primary text-primary" />
                <span>{design.rating}</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">{design.description}</p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-5 border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <IndianRupee size={16} /> <span className="text-sm">Estimated Cost</span>
                </div>
                <p className="font-display text-xl font-bold text-foreground">{design.costEstimate}</p>
              </div>
              <div className="bg-card rounded-lg p-5 border border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Ruler size={16} /> <span className="text-sm">Category</span>
                </div>
                <p className="font-display text-xl font-bold text-foreground capitalize">{design.category}</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Palette size={18} /> Materials Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {design.materials.map((m) => (
                  <Badge key={m} variant="secondary">{m}</Badge>
                ))}
              </div>
            </div>

            {/* 3D Preview Placeholder */}
            <div className="bg-card rounded-lg border border-border p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Ruler size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">3D Room Preview</h3>
              <p className="text-muted-foreground text-sm mb-4">Interactive 3D visualization coming soon. Book a consultation to see a custom rendering.</p>
              <Button asChild>
                <Link to="/designs">Book Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
