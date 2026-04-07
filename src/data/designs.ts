import kitchen1 from "@/assets/kitchen-1.jpg";
import bedroom1 from "@/assets/bedroom-1.jpg";
import living1 from "@/assets/living-1.jpg";
import office1 from "@/assets/office-1.jpg";
import bathroom1 from "@/assets/bathroom-1.jpg";

export type DesignCategory = "kitchen" | "bedroom" | "living-room" | "office" | "bathroom";
export type DesignStyle = "modern" | "minimalist" | "contemporary" | "scandinavian" | "industrial";
export type BudgetRange = "budget" | "mid-range" | "premium" | "luxury";

export interface Design {
  id: string;
  title: string;
  category: DesignCategory;
  style: DesignStyle;
  budget: BudgetRange;
  costEstimate: string;
  image: string;
  description: string;
  designer: string;
  rating: number;
  materials: string[];
  size: string;
}

export const categoryLabels: Record<DesignCategory, string> = {
  kitchen: "Kitchen",
  bedroom: "Bedroom",
  "living-room": "Living Room",
  office: "Office",
  bathroom: "Bathroom",
};

export const styleLabels: Record<DesignStyle, string> = {
  modern: "Modern",
  minimalist: "Minimalist",
  contemporary: "Contemporary",
  scandinavian: "Scandinavian",
  industrial: "Industrial",
};

export const budgetLabels: Record<BudgetRange, string> = {
  budget: "Under ₹5L",
  "mid-range": "₹5L – ₹10L",
  premium: "₹10L – ₹20L",
  luxury: "₹20L+",
};

export const designs: Design[] = [
  {
    id: "1",
    title: "Warm Marble Kitchen",
    category: "kitchen",
    style: "modern",
    budget: "premium",
    costEstimate: "₹12,50,000",
    image: kitchen1,
    description: "A stunning modern kitchen featuring marble countertops, warm wood cabinetry, and gold-accented pendant lighting. Every detail is curated for both functionality and elegance.",
    designer: "Priya Sharma",
    rating: 4.9,
    materials: ["Italian Marble", "Teak Wood", "Brass Fixtures"],
    size: "180 sq ft",
  },
  {
    id: "2",
    title: "Serene Minimal Bedroom",
    category: "bedroom",
    style: "minimalist",
    budget: "mid-range",
    costEstimate: "₹7,80,000",
    image: bedroom1,
    description: "A calming bedroom retreat with soft neutral linens, ambient lighting, and a clean minimal aesthetic that promotes restful sleep.",
    designer: "Arjun Mehta",
    rating: 4.8,
    materials: ["Linen", "Oak Wood", "Matte Paint"],
    size: "220 sq ft",
  },
  {
    id: "3",
    title: "Earthy Living Room",
    category: "living-room",
    style: "contemporary",
    budget: "premium",
    costEstimate: "₹15,00,000",
    image: living1,
    description: "A warm, inviting living room with exposed wooden beams, earthy tones, and curated art pieces. Perfect for entertaining and relaxation.",
    designer: "Neha Kapoor",
    rating: 4.7,
    materials: ["Jute", "Walnut Wood", "Natural Stone"],
    size: "350 sq ft",
  },
  {
    id: "4",
    title: "Productive Home Office",
    category: "office",
    style: "scandinavian",
    budget: "mid-range",
    costEstimate: "₹6,50,000",
    image: office1,
    description: "A thoughtfully designed home office that balances productivity and comfort, with built-in shelving and natural light optimization.",
    designer: "Vikram Iyer",
    rating: 4.6,
    materials: ["Plywood", "Steel", "Bamboo"],
    size: "120 sq ft",
  },
  {
    id: "5",
    title: "Spa-Inspired Bathroom",
    category: "bathroom",
    style: "modern",
    budget: "luxury",
    costEstimate: "₹22,00,000",
    image: bathroom1,
    description: "A luxurious spa-like bathroom with a freestanding bathtub, veined marble walls, and warm bronze fixtures that create an everyday retreat.",
    designer: "Priya Sharma",
    rating: 5.0,
    materials: ["Carrara Marble", "Bronze", "Teak"],
    size: "100 sq ft",
  },
  {
    id: "6",
    title: "Open-Plan Kitchen",
    category: "kitchen",
    style: "contemporary",
    budget: "luxury",
    costEstimate: "₹25,00,000",
    image: kitchen1,
    description: "A grand open-plan kitchen designed for the modern family, featuring an island with waterfall edges and integrated smart appliances.",
    designer: "Neha Kapoor",
    rating: 4.9,
    materials: ["Quartz", "Engineered Wood", "Stainless Steel"],
    size: "280 sq ft",
  },
];
