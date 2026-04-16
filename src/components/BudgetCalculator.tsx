import { useState, useMemo } from "react";
import { motion } from "framer-motion";
 
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
  basic: { min: 850, max: 1250 },
  premium: { min: 1300, max: 1800 },
  luxury: { min: 1950, max: 4000 },
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

  const [includedAreas, setIncludedAreas] = useState<Record<AreaKey, boolean>>(
    Object.fromEntries(areaFields.map((f) => [f.key, false])) as Record<AreaKey, boolean>
  );

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
    setShowResult(true);
  };

  const totalSqft = useMemo(
    () =>
      Object.entries(areas).reduce((sum, [key, value]) => {
        const isIncluded = includedAreas[key as AreaKey];
        const areaValue = Number(value) || 0;

        if (!isIncluded || areaValue === 0) return sum;
        return sum + areaValue;
      }, 0),
    [areas, includedAreas]
  );

  const estimate = useMemo(() => {
    const p = pricing[pkg];
    return {
      min: totalSqft * p.min,
      max: totalSqft * p.max,
    };
  }, [totalSqft, pkg]);

  const handleEstimateClick = () => {
    if (totalSqft === 0) return;

    const selectedAreas = areaFields
      .filter((f) => includedAreas[f.key] && (areas[f.key] || 0) > 0)
      .map((f) => `• ${f.label}: ${areas[f.key]} sq.ft`)
      .join("\n");

    const message = `Hi Tekis Interiors! 🏠

I'd like an interior design estimate:

*Home Type:* ${bhk} BHK
*Package:* ${pkg.charAt(0).toUpperCase() + pkg.slice(1)}

*Selected Areas:*
${selectedAreas}

*Total Area:* ${totalSqft} sq.ft

💰 *Estimated Budget:*
₹${estimate.min.toLocaleString("en-IN")} – ₹${estimate.max.toLocaleString("en-IN")}

Please share more details and guide me further. Thank you!`;

    const phoneNumber = "916301780982";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-medium">Budget Planner</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Interior Budget Calculator
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Get instant estimate for your interiors.
            </p>
          </motion.div>

          {/* Card */}
          <div className="bg-card border rounded-2xl p-6 md:p-10">

            {/* Selectors */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">

              {/* BHK */}
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Home className="w-4 h-4" /> Select Home Type
                </label>
                <Select value={bhk} onValueChange={handleBhkChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="-- Select BHK --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 BHK</SelectItem>
                    <SelectItem value="2">2 BHK</SelectItem>
                    <SelectItem value="3">3 BHK</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Package */}
              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <IndianRupee className="w-4 h-4" /> Select Package
                </label>
                <Select value={pkg} onValueChange={setPkg}>
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

            {/* Areas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {areaFields.map((field) => (
                <div key={field.key}>
                  <div className="flex justify-between text-xs mb-1">
                    {field.label}
                    <input
                      type="checkbox"
                      checked={includedAreas[field.key]}
                      onChange={(e) =>
                        setIncludedAreas((prev) => ({
                          ...prev,
                          [field.key]: e.target.checked,
                        }))
                      }
                    />
                  </div>

                  <Input
                    type="number"
                    disabled={!includedAreas[field.key]}
                    value={areas[field.key] || ""}
                    onChange={(e) =>
                      handleAreaChange(field.key, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>

            {/* Total */}
            <p className="text-center mb-6">
              Total Area: <b>{totalSqft} sq.ft</b>
            </p>

            {/* BUTTON */}
            <Button
              className="w-full"
              size="lg"
              onClick={handleEstimateClick}
              disabled={totalSqft === 0}
            >
              <Calculator className="w-4 h-4 mr-2" />
              Get Estimate on WhatsApp
            </Button>
          </div>
        </div>
      </main>
      
    </div>
  );
}