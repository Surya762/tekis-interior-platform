import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const areaFields = [
  { key: "kitchen", label: "Kitchen" },
  { key: "master", label: "Master Bedroom" },
  { key: "children", label: "Children Bedroom" },
  { key: "guest", label: "Guest Room" },
  { key: "tv", label: "TV Unit" },
  { key: "pooja", label: "Pooja Unit" },
  { key: "crockery", label: "Crockery Unit" },
  { key: "pantry", label: "Pantry" },
  { key: "vanity", label: "Vanity" },
  { key: "custom", label: "Customized Work" },
];

export default function BudgetCalculator() {
  const navigate = useNavigate();

  const [bhk, setBhk] = useState("");
  const [pkg, setPkg] = useState("Basic");

  const [areas, setAreas] = useState<Record<string, number>>({});

  const handleChange = (key: string, value: string) => {
    setAreas((prev) => ({
      ...prev,
      [key]: Number(value) || 0,
    }));
  };

  // ✅ Total sqft
  const totalSqft = Object.values(areas).reduce(
    (sum, val) => sum + (val || 0),
    0
  );

  // ✅ WhatsApp handler
  const handleEstimateClick = () => {
    if (!bhk) {
      alert("Please select BHK");
      return;
    }

    if (totalSqft === 0) {
      alert("Please enter at least one area");
      return;
    }

    // ✅ Only user-filled areas
    const selectedAreas = areaFields
      .map((field) => {
        const value = areas[field.key];
        if (value && value > 0) {
          return `${field.label}: ${value} sq.ft`;
        }
        return null;
      })
      .filter(Boolean)
      .join("%0A");

    const message =
      "Hi Tekis Interiors!🏠 I'd like an interior design estimate for the following areas:%0A%0A" +
      "BHK: " + bhk + "%0A" +
      "Package: " + pkg + "%0A%0A" +
      "Areas:%0A" +
      selectedAreas + "%0A%0A" +
      "Total Area: " + totalSqft + " sq.ft";
      "(this area and estimate may vary depends on the site condition)%0A%0A"
      "please share more details and guide me further. Thank you! 🙏";

    const phoneNumber = "916301780982"; // 🔴 change if needed

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-6">
            Interior Budget Calculator
          </h1>

          {/* BHK + Package */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-sm font-medium">Select BHK</label>
              <Select value={bhk} onValueChange={setBhk}>
                <SelectTrigger>
                  <SelectValue placeholder="Select BHK" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 BHK">1 BHK</SelectItem>
                  <SelectItem value="2 BHK">2 BHK</SelectItem>
                  <SelectItem value="3 BHK">3 BHK</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Select Package</label>
              <Select value={pkg} onValueChange={setPkg}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Basic">Basic</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {areaFields.map((field) => (
              <div key={field.key}>
                <label className="text-xs text-muted-foreground">
                  {field.label}
                </label>

                <Input
                  type="number"
                  placeholder="sq.ft"
                  value={areas[field.key] || ""}
                  onChange={(e) =>
                    handleChange(field.key, e.target.value)
                  }
                />
              </div>
            ))}
          </div>

          {/* Total */}
          <p className="text-center mb-6">
            Total Area: <b>{totalSqft} sq.ft</b>
          </p>

          {/* Button */}
          <Button
            size="lg"
            className="w-full"
            onClick={handleEstimateClick}
          >
            Get Quote
          </Button>

        </div>
      </main>

      <Footer />
    </div>
  );
}