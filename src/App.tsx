import { HashRouter as Router } from "react-router-dom"

import Index from "./pages/Index";
import Designs from "./pages/Designs";
import DesignDetail from "./pages/DesignDetail";
import About from "./pages/About";
import BudgetCalculator from "./pages/BudgetCalculator";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ThreeDView from "./pages/ThreeDView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/designs/:id" element={<DesignDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/budget-calculator" element={<BudgetCalculator />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/3d-view" element={<ThreeDView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}