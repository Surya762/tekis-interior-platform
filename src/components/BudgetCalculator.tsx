import { useState } from "react";

const pricing = {
  basic:   { min: 1200, max: 1600 },
  premium: { min: 1800, max: 2500 },
  luxury:  { min: 2800, max: 4500 },
} as const;

type Package = keyof typeof pricing;

const presets = {
  "1": { kitchen: 40, wardrobe: 40, tv: 15, pooja: 10, crockery: 15, pantry: 15, vanity: 10, custom: 20 },
  "2": { kitchen: 60, wardrobe: 80, tv: 25, pooja: 15, crockery: 20, pantry: 25, vanity: 15, custom: 30 },
  "3": { kitchen: 80, wardrobe: 120, tv: 30, pooja: 20, crockery: 30, pantry: 40, vanity: 20, custom: 40 },
} as const;

type BHK = keyof typeof presets;

const fieldLabels: Record<string, string> = {
  kitchen: "Kitchen",
  wardrobe: "Wardrobes",
  tv: "TV Unit",
  pooja: "Pooja Unit",
  crockery: "Crockery Unit",
  pantry: "Pantry",
  vanity: "Vanity",
  custom: "Custom Work",
};

const defaultAreas = { kitchen: 0, wardrobe: 0, tv: 0, pooja: 0, crockery: 0, pantry: 0, vanity: 0, custom: 0 };

export default function BudgetCalculator() {
  const [selectedBHK, setSelectedBHK] = useState<BHK | null>(null);
  const [selectedPkg, setSelectedPkg] = useState<Package>("basic");
  const [areas, setAreas] = useState(defaultAreas);
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const handleBHK = (bhk: BHK) => {
    setSelectedBHK(bhk);
    setAreas(presets[bhk]);
    setResult(null);
  };

  const handleArea = (field: string, value: string) => {
    setAreas((prev) => ({ ...prev, [field]: parseInt(value) || 0 }));
    setResult(null);
  };

  const totalSqft = Object.values(areas).reduce((s, v) => s + v, 0);

  const calculate = () => {
    if (totalSqft === 0) return;
    const p = pricing[selectedPkg];
    setResult({ min: totalSqft * p.min, max: totalSqft * p.max });
  };

  const pkgConfig: Record<Package, { label: string; active: string; inactive: string }> = {
    basic:   { label: "Basic",   active: "bg-emerald-50 text-emerald-800 border-emerald-300", inactive: "border-gray-200 text-gray-500 hover:border-gray-300" },
    premium: { label: "Premium", active: "bg-amber-50 text-amber-800 border-amber-300",       inactive: "border-gray-200 text-gray-500 hover:border-gray-300" },
    luxury:  { label: "Luxury",  active: "bg-purple-50 text-purple-800 border-purple-300",    inactive: "border-gray-200 text-gray-500 hover:border-gray-300" },
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs tracking-widest uppercase text-amber-600 mb-2 font-medium">Plan your space</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Interior Budget Estimator</h2>
          <p className="text-gray-500 text-sm">Select your home type, choose a package, and adjust areas to get an instant cost range.</p>
        </div>

        {/* BHK Selection */}
        <div className="mb-8">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Home Type</p>
          <div className="grid grid-cols-3 gap-3">
            {(["1", "2", "3"] as BHK[]).map((bhk) => (
              <button
                key={bhk}
                onClick={() => handleBHK(bhk)}
                className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                  selectedBHK === bhk
                    ? "bg-gray-900 text-white border-gray-900"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                }`}
              >
                {bhk} BHK
              </button>
            ))}
          </div>
        </div>

        {/* Package Selection */}
        <div className="mb-8">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Package</p>
          <div className="grid grid-cols-3 gap-3">
            {(Object.keys(pkgConfig) as Package[]).map((pkg) => (
              <button
                key={pkg}
                onClick={() => { setSelectedPkg(pkg); setResult(null); }}
                className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                  selectedPkg === pkg ? pkgConfig[pkg].active : pkgConfig[pkg].inactive
                }`}
              >
                {pkgConfig[pkg].label}
                <div className="text-xs font-normal mt-0.5 opacity-70">
                  ₹{pricing[pkg].min.toLocaleString()}–{pricing[pkg].max.toLocaleString()}/sqft
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Area Inputs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Areas (sq ft)</p>
            {totalSqft > 0 && (
              <span className="text-xs text-gray-400">Total: <span className="text-gray-700 font-medium">{totalSqft} sq ft</span></span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {Object.keys(areas).map((field) => (
              <div key={field}>
                <label className="block text-xs text-gray-400 mb-1">{fieldLabels[field]}</label>
                <input
                  type="number"
                  min="0"
                  value={areas[field as keyof typeof areas] || ""}
                  onChange={(e) => handleArea(field, e.target.value)}
                  placeholder="0"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-gray-800 placeholder-gray-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          disabled={totalSqft === 0}
          className="w-full py-3.5 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 active:scale-[0.99] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Calculate Estimate
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 p-5 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Estimated Budget</p>
            <p className="text-2xl font-semibold text-gray-900">
              ₹{result.min.toLocaleString("en-IN")} – ₹{result.max.toLocaleString("en-IN")}
            </p>
            <p className="text-xs text-gray-400 mt-1">*Final cost may vary based on design & site conditions</p>

            {/* Breakdown */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              {Object.entries(areas)
                .filter(([, v]) => v > 0)
                .map(([field, sqft]) => {
                  const p = pricing[selectedPkg];
                  return (
                    <div key={field} className="flex justify-between text-xs text-gray-500">
                      <span>{fieldLabels[field]} <span className="text-gray-400">({sqft} sq ft)</span></span>
                      <span>₹{(sqft * p.min).toLocaleString("en-IN")} – ₹{(sqft * p.max).toLocaleString("en-IN")}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}