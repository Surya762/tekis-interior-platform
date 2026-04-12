import kitchen1 from "@/assets/kitchen-1.jpg";
import bedroom1 from "@/assets/bedroom-1.jpg";
import living1 from "@/assets/living-1.jpg";
import office1 from "@/assets/office-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg.jpeg";
import kitchen3 from "@/assets/kitchen-3.jpg.jpeg";
import kitchen4 from "@/assets/kitchen-4.jpeg";
import kitchen5 from "@/assets/kitchen-5.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import bedroom3 from "@/assets/bedroom-3.jpg";
import bedroom4 from "@/assets/bedroom-4.jpg";
import bedroom5 from "@/assets/bedroom-5.jpg";
import living room2 from "@/assets/livingroom-2.jpg";
import livingroom3 from  "@/assets/livingroom-1.jpg";
import livingroom4 from "@/assets/livingroom-4.jpg";
import livingroom5 from "@/assets/livingroom-5.jpg";
import livingroom6 from "@/assets/livingroom-6.jpg";
import livingroom7 from "@/assets/livingroom-7.jpg";
import livingroom8 from "@/assets/livingroom-8.jpg";


export type DesignCategory = "kitchen" | "bedroom" | "living-room" | "office" ;
export type DesignStyle = "modern" | "minimalist" ;
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
  }

export const categoryLabels: Record<DesignCategory, string> = {
  kitchen: "Kitchen",
  bedroom: "Bedroom",
  "living-room": "Living Room",
  office: "Office",
};

export const styleLabels: Record<DesignStyle, string> = {
  modern: "Modern",
  minimalist: "Minimalist",
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
    costEstimate: "₹2,50,000",
    image: kitchen1,
    description: "A stunning acrylic finish kitchen with cream tones, soft-close systems, and customized storage solutions. Designed with modern hardware and premium finishes for lasting elegance.",
    designer: "TEKI'S Design Team",
    rating: 4.9,
    materials: ["Acrylic Panels", "Marine Plywood", "Soft-close Hardware", "Quartz Countertop"],
    
  },
  {
    id: "2",
    title: "Elegant White & Aqua Bedroom",
    category: "bedroom",
    style: "minimalist",
    budget: "mid-range",
    costEstimate: "₹1,80,000",
    image: bedroom1,
    description: "A calming bedroom featuring our signature white and aqua theme concept with floating ceiling accents and luxury marble-texture finishes.",
    designer: "TEKI'S Design Team",
    rating: 4.8,
    materials: ["PVC Laminate", "Gypsum Ceiling", "Texture Paint", "Oak Wood"],
    
  },
  {
    id: "3",
    title: "Premium Living Room Interior",
    category: "living-room",
    style: "minimalist",
    budget: "premium",
    costEstimate: "₹2,50,000",
    image: living1,
    description: "A warm, inviting living room with modern false ceiling, luxury marble finishes, and curated art pieces. Designed as per client budget with high-quality materials.",
    designer: "TEKI'S Design Team",
    rating: 4.7,
    materials: ["Natural Stone", "Walnut Veneer", "LED False Ceiling", "Italian Marble"],
    
  },
  {
    id: "4",
    title: "Modern Office Interior",
    category: "office",
    style: "modern",
    budget: "mid-range",
    costEstimate: "₹4,50,000",
    image: office1,
    description: "A functional commercial office interior designed for productivity and style, featuring built-in storage and modern finishes by our experienced team.",
    designer: "TEKI'S Design Team",
    rating: 4.6,
    materials: ["Laminate Panels", "Modular Furniture", "Glass Partitions", "LED Lighting"],
    
  },
  {
    id: "5",
    title: "PVC & Laminate Kitchen",
    category: "kitchen",
    style: "modern",
    budget: "mid-range",
    costEstimate: "₹8,50,000",
    image: kitchen1,
    description: "A budget-friendly yet stylish PVC and laminate kitchen with customized storage solutions, modern hardware, and practical design for the modern family.",
    designer: "TEKI'S Design Team",
    rating: 4.9,
    materials: ["PVC Panels", "Laminate Finish", "Stainless Steel", "Granite Countertop"],
    ,
  },
  {
    id: "6",
    title: "Scandinavian Style Bedroom",
    category: "bedroom",
    style: "minimalist",
    budget: "budget",
    costEstimate: "₹1,00,000",
    image: bedroom1,
    description: "A cozy Scandinavian-inspired bedroom with light wood finishes, soft textiles, and a minimalist design approach. Perfect for those seeking comfort on a budget.",
    designer: "TEKI'S Design Team",
    rating: 4.7,
    materials: ["Light Wood", "Soft Textiles", "Minimalist Furniture"],
    ,
  },
  {
    id: "7",
    title: "Industrial Chic Living Room",
    category: "living-room",  
    style: "modern",
    budget: "luxury",
    costEstimate: "₹3,00,000",
    image: livingroom5,
    description: "An industrial chic living room with exposed brick walls, metal accents, and a blend of vintage and modern furniture. Designed for those who appreciate bold aesthetics.",
    designer: "TEKI'S Design Team",
    rating: 4.8,
    materials: ["Exposed Brick", "Metal Accents", "Vintage Furniture"]
  },
  {
    id: "8",
    title: "kitchen with Quartz Countertops",
    category: "kitchen",
    style: "modern",
    budget: "luxury",
    costEstimate: "₹5,00,000",
    image:kitchen2.jpg.jpeg ,
  },
  {
    id: "9",
    title: "Minimalist bedroom with Floating Ceiling",
    category: "bedroom",
    style: "minimalist",
    budget: "premium",
    costEstimate: "₹1,50,000",
    image: bedroom1,
    description: "A serene minimalist bedroom with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered sleeping environment.",
    designer: "TEKI'S Design Team",
    rating: 4.6,
    materials: ["Gypsum Ceiling", "Texture Paint", "Oak Wood"],
    
  },
  {
    id: "10",
    title: "kitchen with Quartz Countertops",
    category: "kitchen",
    style: "modern",
    budget: "luxury",
    costEstimate: "₹5,00,000",
    image: kitchen2.jpg.jpeg,
  },
  {
    id: "11",
    title: "Contemporary Office Space",
    category: "office",
    style: "modern",
    budget: "premium",
    costEstimate: "₹4,50,000",
    image: office1,
    description: "A contemporary office space designed for productivity and style, featuring built-in storage and modern finishes by our experienced team.",
    designer: "TEKI'S Design Team",
    rating: 4.6,
    materials: ["Laminate Panels", "Modular Furniture", "Glass Partitions", "LED Lighting"],
    
  },
  {
    id: "12",
    title: "kitchen with Quartz Countertops",
    category: "kitchen",
    style: "minimalist",
    budget: "premium",
    costEstimate: "₹5,00,000",
    image: kitchen3.jpg.jpeg,
  },
  {
    id: "13",
    title: "Minimalist kitchen with Quartz Countertops",
    category: "kitchen",
    style: "minimalist",
    budget: "luxury",
    costEstimate: "₹5,00,000",
    image: kitchen4.jpg.jpeg,
  
  },
  {
    id: "14",
    title: "Minimalist kitchen with Quartz Countertops",
    category: "kitchen",
    style: "minimalist",
    budget: "mid-range",
    costEstimate: "₹5,00,000",
    image: kitchen5.jpeg,
  },
  {
    id: "15",
    title: "Luxury Kitchen with Granite Countertops",
    category: "kitchen",
    style: "modern",
    budget: "luxury",
    costEstimate: "₹5,00,000",
    image: kitchen5.jpg.jpeg,
  
  },
  {
    id: "16",
    title: "Minimalist bedroom with Floating Ceiling",
    category: "bedroom",
    style: "minimalist",
    budget: "luxury",
    costEstimate: "₹1,50,000",
    image:bedroom2.jpg, ,
    description: "A serene minimalist bedroom with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered sleeping environment.",
    designer: "TEKI'S Design Team",
    rating: 4.6,
    materials: ["Gypsum Ceiling", "Texture Paint", "Oak Wood"],
    size: "220 sq ft",
  },
  {
    id: "17",
    title: "modern bedroom with Floating Ceiling",
    category: "bedroom",
    style: "modern",
    budget: "mid-range",
    costEstimate: "₹1,50,000",
    image: bedroom3.jpg,
    description: "A serene minimalist bedroom with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered sleeping environment.",
  },
  {
    id: "18",
    title: "modern bedroom with Floating Ceiling",
    category: "bedroom",
    style: "modern",
    budget: "premium",
    costEstimate: "₹1,50,000",
    image: bedroom5.jpg,
    description: "A serene minimalist bedroom with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered sleeping environment.",
  },  
{
    id: "19",
    title: "modern bedroom with Floating Ceiling",
    category: "bedroom",
    style: "modern",
    budget: "luxury",
    costEstimate: "₹1,50,000",
    image: bedroom6.jpg,
    description: "A serene modern bedroom with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered sleeping environment.",
  },
  {
    id: "20",
    title: "modern bedroom with Floating Ceiling",
    category: "bedroom",
    style: "modern",
    budget: "budget",
    costEstimate: "₹1,50,000",
    image: bedroom4.jpg,
    description: "A serene modern bedroom with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered sleeping environment.",
  },
  {
    id: "21",
    title: "modern bedroom with Floating Ceiling",
    category: "bedroom",  
    style: "modern",
    budget: "mid-range",
    costEstimate: "₹1,50,000",
    image: bedroom3.jpg,
    description: "A serene modern bedroom with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered sleeping environment.",
  },
  {
    id: "22",
    title: "living room with Floating Ceiling",
    category: "living room",
    style: "modern",
    budget: "premium",
    costEstimate: "₹1,50,000",
    image: livingroom6.jpg,
    description: "A serene modern living room with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered relaxation environment.",
  },
  {
    id: "23",
    title: "living room with Floating Ceiling",
    category: "living room",  
    style: "minimalist",
    budget: "luxury",
    costEstimate: "₹1,50,000",
    image: livingroom4.jpg,
    description: "A serene minimalist living room with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered relaxation environment.",
  },
  {
    id: "24",
    title: "living room with Floating Ceiling",
    category: "living room",
    style: "modern",
    budget: "mid-range",
    costEstimate: "₹1,50,000",
    image: livingroom3.jpg,
    description: "A serene modern living room with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered relaxation environment.",
  },
  {
    id: "25",
    title: "living room with Floating Ceiling",
    category: "living room",
    style: "minimalist",
    budget: "budget",
    costEstimate: "₹1,50,000",
    image: livingroom2.jpg,
    description: "A serene minimalist living room with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered relaxation environment.",
  },
  {
    id: "26",
    title: "living room with Floating Ceiling",
    category: "living room",  
      style: "modern",
    budget: "budget",
    costEstimate: "₹2,50,000",
    image: livingroom8.jpg,
    description: "A serene modern living room with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered relaxation environment.",
  },
  {
    id: "27",
    title: "living room with Floating Ceiling",
    category: "living room",
    style: "minimalist",
    budget: "mid-range",
    costEstimate: "₹2,50,000",
    image: livingroom7.jpg,
    description: "A serene minimalist living room with a floating ceiling, clean lines, and a neutral color palette. Designed for a peaceful and uncluttered relaxation environment.",

  }

];
