/* ============================================
   BLACK SYNDICATE - MAIN APP
   Complete dark theme digital store
   ============================================ */

import "@/App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturedSection } from "./components/FeaturedSection";
import { CategoryGrid } from "./components/CategoryGrid";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white noise-overlay">
      {/* Header - Fixed navigation */}
      <Header />
      
      {/* Main content */}
      <main>
        {/* Hero Section - Full screen intro */}
        <HeroSection />
        
        {/* Featured Section - Highlighted items carousel */}
        <FeaturedSection />
        
        {/* Category Grid - Main categories with electric hover */}
        <CategoryGrid />
        
        {/* About Section - Brand story */}
        <AboutSection />
        
        {/* Contact Section - Community/WhatsApp CTA */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
