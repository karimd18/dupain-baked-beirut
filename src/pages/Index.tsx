import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { MenuSection } from "@/components/MenuSection";
import { Gallery } from "@/components/Gallery";
import { VisitUs } from "@/components/VisitUs";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeatureCards />
      <MenuSection />
      <Gallery />
      <VisitUs />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
