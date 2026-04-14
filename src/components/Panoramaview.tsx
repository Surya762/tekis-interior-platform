import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { RotateCcw, Home, ChefHat, Bed, Building } from "lucide-react";
import panoInterior from "@/assets/pano-interior.jpeg";
import panoExterior from "@/assets/pano-exterior.jpeg";
import panoKitchen from "@/assets/pano-kitchen.jpeg";
import panoBedroom from "@/assets/pano-bedroom.jpeg";

const views = [
  { id: "exterior", label: "Exterior", icon: Building, img: panoExterior },
  { id: "living", label: "Living Room", icon: Home, img: panoInterior },
  { id: "kitchen", label: "Kitchen", icon: ChefHat, img: panoKitchen },
  { id: "bedroom", label: "Bedroom", icon: Bed, img: panoBedroom },
];

const PanoramaView = () => {
  const [activeView, setActiveView] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const walk = (e.pageX - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      const walk = (e.touches[0].pageX - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  return (
    <section id="360-view" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            360° Home Tour
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Drag to explore every corner of our home.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {views.map((v, i) => (
            <button
              key={v.id}
              onClick={() => {
                setActiveView(i);
                if (containerRef.current) containerRef.current.scrollLeft = 0;
              }}
              className={`px-4 py-2 border ${
                activeView === i ? "bg-black text-white" : ""
              }`}
            >
              <v.icon className="w-4 h-4 inline mr-2" />
              {v.label}
            </button>
          ))}
        </div>

        {/* Panorama */}
        <div className="relative border overflow-hidden">
          <div
            ref={containerRef}
            className="overflow-x-scroll cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <img
              src={views[activeView].img}
              className="h-[400px] w-auto max-w-none select-none"
              draggable={false}
            />
          </div>

          {/* Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 text-xs border">
            Drag to explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanoramaView;