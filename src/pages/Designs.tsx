import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import DesignCard from "@/components/DesignCard";
import { designs, categoryLabels, styleLabels, budgetLabels } from "@/data/designs";
import type { DesignCategory, DesignStyle, BudgetRange } from "@/data/designs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Designs() {
  const [category, setCategory] = useState<DesignCategory | "all">("all");
  const [style, setStyle] = useState<DesignStyle | "all">("all");
  const [budget, setBudget] = useState<BudgetRange | "all">("all");

  const filtered = useMemo(() => {
    return designs.filter((d) => {
      if (category !== "all" && d.category !== category) return false;
      if (style !== "all" && d.style !== style) return false;
      if (budget !== "all" && d.budget !== budget) return false;
      return true;
    });
  }, [category, style, budget]);

  const categories: Array<DesignCategory | "all"> = ["all", "kitchen", "bedroom", "living-room", "office", "bathroom"];

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Design Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Explore our curated collection of premium interior designs. Filter by room, style, or budget to find your perfect match.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat)}
            >
              {cat === "all" ? "All Rooms" : categoryLabels[cat]}
            </Button>
          ))}
        </div>

        {/* Advanced Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Select value={style} onValueChange={(v) => setStyle(v as DesignStyle | "all")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              {Object.entries(styleLabels).map(([k, v]) => (
                <SelectItem key={k} value={k}>{v}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={budget} onValueChange={(v) => setBudget(v as BudgetRange | "all")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Budgets</SelectItem>
              {Object.entries(budgetLabels).map(([k, v]) => (
                <SelectItem key={k} value={k}>{v}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {filtered.map((design, i) => (
              <DesignCard key={design.id} design={design} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No designs match your filters.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => { setCategory("all"); setStyle("all"); setBudget("all"); }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
