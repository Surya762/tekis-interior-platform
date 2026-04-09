import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Home, IndianRupee } from "lucide-react";

const bhkDefaults: Record<string, number[]> = {
  "1": [0, 0, 0, 0, 0, 0, 0, 0],
  "2": [0, 0, 0, 0, 0, 0, 0, 0],
  "3": [0, 0, 0, 0, 0, 0, 0, 0],
};

const pricing: Record<string, { min: number; max: number }> = {
  basic: { min: 1200, max: 1600 },
  premium: { min: 1800, max: 2500 },
  luxury: { min: 2800, max: 4500 },
};

const areaFields = [
  { key: "kitchen", label: "Kitchen" },
  { key: "master bedroom", label: "Master Bedroom" },
  { key: "Children Bedroom", label: "Children Bedroom" },
  { key: "Guest Room", label: "Guest Room" },
  { key: "tv", label: "TV Unit" },
  { key: "pooja", label: "Pooja Unit" },
  { key: "crockery", label: "Crockery Unit" },
  { key: "pantry", label: "Pantry" },
  { key: "vanity", label: "Vanity" },
  { key: "custom", label: "Customized Work" },
] as const;

type AreaKey = (typeof areaFields)[number]["key"];

export default function BudgetCalculator() {
  const [bhk, setBhk] = useState("");
  const [pkg, setPkg] = useState("basic");
  const [areas, setAreas] = useState<Record<AreaKey, number>>(
    Object.fromEntries(areaFields.map((f) => [f.key, 0])) as Record<AreaKey, number>
  );
  const [showResult, setShowResult] = useState(false);

  const handleBhkChange = (value: string) => {
    setBhk(value);
    const defaults = bhkDefaults[value];
    if (defaults) {
      const updated = { ...areas };
      areaFields.forEach((f, i) => {
        updated[f.key] = defaults[i];
      });
      setAreas(updated);
    }
    setShowResult(false);
  };

  const handleAreaChange = (key: AreaKey, value: string) => {
    setAreas((prev) => ({ ...prev, [key]: Number(value) || 0 }));
    setShowResult(false);
  };

  const totalSqft = useMemo(
    () => Object.values(areas).reduce((sum, v) => sum + v, 0),
    [areas]
  );

  const estimate = useMemo(() => {
    const p = pricing[pkg];
    return {
      min: totalSqft * p.min,
      max: totalSqft * p.max,
    };
  }, [totalSqft, pkg]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-medium">Budget Planner</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Interior Budget Calculator
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Get an instant estimate for your interior project based on your home type, package preference, and area requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-10"
          >
            {/* Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Home className="w-4 h-4 text-primary" /> Select Home Type
                </label>
                <Select value={bhk} onValueChange={handleBhkChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="-- Select BHK --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 BHK</SelectItem>
                    <SelectItem value="2">2 BHK</SelectItem>
                    <SelectItem value="3">3 BHK</SelectItem>
                    <SelectItem value="villa">Villa / Custom</SelectItem>
                    </SelectContent>
                    </Select>
                   </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-primary" /> Select Package
                </label>
                <Select value={pkg} onValueChange={(v) => { setPkg(v); setShowResult(false); }}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Area inputs */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Enter / Adjust Areas (sq.ft)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {areaFields.map((field) => (
                  <div key={field.key} className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">
                      {field.label}
                    </label>
                    <Input
                      type="number"
                      min={0}
                      value={areas[field.key] || ""}
                      onChange={(e) => handleAreaChange(field.key, e.target.value)}
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Total Area: <span className="font-semibold text-foreground">{totalSqft} sq.ft</span>
              </p>
            </div>

            <Button
              size="lg"
              className="w-full text-base"
              onClick={() => setShowResult(true)}
              disabled={totalSqft === 0}
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Estimate
            </Button>

            {/* Result */}
            {showResult && totalSqft > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center"
              >
                <p className="text-sm text-muted-foreground mb-2">Estimated Budget</p>
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  ₹{estimate.min.toLocaleString("en-IN")} – ₹{estimate.max.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  *Final cost may vary based on design & site conditions
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
