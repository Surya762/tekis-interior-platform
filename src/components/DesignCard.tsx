import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Design } from "@/data/designs";
import { categoryLabels, styleLabels } from "@/data/designs";
import { Badge } from "@/components/ui/badge";

interface DesignCardProps {
  design: Design;
  index?: number;
}

export default function DesignCard({ design, index = 0 }: DesignCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/designs/${design.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
          <img
            src={design.image}
            alt={design.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-primary-foreground text-sm font-medium">{design.costEstimate}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">{categoryLabels[design.category]}</Badge>
            <Badge variant="outline" className="text-xs">{styleLabels[design.style]}</Badge>
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {design.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{design.designer}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-primary text-primary" />
              {design.rating}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
