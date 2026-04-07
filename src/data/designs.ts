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
    title: "Acrylic Cream Finish Kitchen",
    category: "kitchen",
    style: "modern",
    budget: "premium",
    costEstimate: "₹12,50,000",
    image: kitchen1,
    description: "A stunning acrylic finish kitchen with cream tones, soft-close systems, and customized storage solutions. Designed with modern hardware and premium finishes for lasting elegance.",
    designer: "TEKI'S Design Team",
    rating: 4.9,
    materials: ["Acrylic Panels", "Marine Plywood", "Soft-close Hardware", "Quartz Countertop"],
    size: "180 sq ft",
  },
  {
    id: "2",
    title: "Elegant White & Aqua Bedroom",
    category: "bedroom",
    style: "minimalist",
    budget: "mid-range",
    costEstimate: "₹7,80,000",
    image: bedroom1,
    description: "A calming bedroom featuring our signature white and aqua theme concept with floating ceiling accents and luxury marble-texture finishes.",
    designer: "TEKI'S Design Team",
    rating: 4.8,
    materials: ["PVC Laminate", "Gypsum Ceiling", "Texture Paint", "Oak Wood"],
    size: "220 sq ft",
  },
  {
    id: "3",
    title: "Premium Living Room Interior",
    category: "living-room",
    style: "contemporary",
    budget: "premium",
    costEstimate: "₹15,00,000",
    image: living1,
    description: "A warm, inviting living room with modern false ceiling, luxury marble finishes, and curated art pieces. Designed as per client budget with high-quality materials.",
    designer: "TEKI'S Design Team",
    rating: 4.7,
    materials: ["Natural Stone", "Walnut Veneer", "LED False Ceiling", "Italian Marble"],
    size: "350 sq ft",
  },
  {
    id: "4",
    title: "Modern Office Interior",
    category: "office",
    style: "modern",
    budget: "mid-range",
    costEstimate: "₹6,50,000",
    image: office1,
    description: "A functional commercial office interior designed for productivity and style, featuring built-in storage and modern finishes by our experienced team.",
    designer: "TEKI'S Design Team",
    rating: 4.6,
    materials: ["Laminate Panels", "Modular Furniture", "Glass Partitions", "LED Lighting"],
    size: "120 sq ft",
  },
  {
    id: "5",
    title: "Luxury Marble Bathroom",
    category: "bathroom",
    style: "modern",
    budget: "luxury",
    costEstimate: "₹22,00,000",
    image: bathroom1,
    description: "A luxurious spa-like bathroom with luxury marble and texture finishes, freestanding bathtub, and bronze fixtures that create an everyday retreat.",
    designer: "TEKI'S Design Team",
    rating: 5.0,
    materials: ["Carrara Marble", "Bronze Fixtures", "Teak Accents", "Texture Wall Finish"],
    size: "100 sq ft",
  },
  {
    id: "6",
    title: "PVC & Laminate Kitchen",
    category: "kitchen",
    style: "contemporary",
    budget: "mid-range",
    costEstimate: "₹8,50,000",
    image: kitchen1,
    description: "A budget-friendly yet stylish PVC and laminate kitchen with customized storage solutions, modern hardware, and practical design for the modern family.",
    designer: "TEKI'S Design Team",
    rating: 4.9,
    materials: ["PVC Panels", "Laminate Finish", "Stainless Steel", "Granite Countertop"],
    size: "150 sq ft",
  },
];
