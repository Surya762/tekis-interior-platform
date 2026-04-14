import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Designs from "./pages/Designs";
import DesignDetail from "./pages/DesignDetail";
import About from "./pages/About";
import BudgetCalculator from "./pages/BudgetCalculator";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PanoramPage from "./pages/panoram";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/designs/:id" element={<DesignDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/budget-calculator" element={<BudgetCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/360-view" element={<PanoramPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;