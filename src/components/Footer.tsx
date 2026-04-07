import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Intério</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Premium interior design services that transform your space into a reflection of your lifestyle.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/designs" className="hover:opacity-100 transition-opacity">Design Gallery</Link></li>
              <li><Link to="/" className="hover:opacity-100 transition-opacity">How It Works</Link></li>
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Careers</Link></li>
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="mailto:hello@interio.com" className="hover:opacity-100 transition-opacity">hello@interio.com</a></li>
              <li><span>+91 98765 43210</span></li>
              <li><span>Mumbai, India</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Intério. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
