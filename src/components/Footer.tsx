import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-1">TEKI'S</h3>
            <p className="text-xs tracking-[0.2em] uppercase opacity-60 mb-4">Interior & Contracts</p>
            <p className="text-sm opacity-70 leading-relaxed italic">
              Designing Dreams. Building Trust.
            </p>
            <p className="text-sm opacity-70 leading-relaxed mt-3">
              A professional interior design and contracting company specializing in modern, functional, and elegant spaces.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Modular Kitchen Designs</li>
              <li>Commercial Interiors</li>
              <li>Contract Works</li>
              <li>3D Design Visualization</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Specialties</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Acrylic Cream & Blue Finish Kitchens</li>
              <li>Modern False & Floating Ceilings</li>
              <li>Luxury Marble & Texture Finishes</li>
              <li>Elegant White & Aqua Themes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+916301780982" className="hover:opacity-100 transition-opacity">+91 63017 80982</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:tekisinteriorscontracts@gmail.com" className="hover:opacity-100 transition-opacity">tekisinteriorscontracts@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm opacity-50">
          © {new Date().getFullYear()} TEKI'S Interior & Contracts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
