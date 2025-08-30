import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/dupain-hero.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dupain Bakery Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary-foreground mb-4">
            Dupain
          </h1>
          <p className="text-xl md:text-2xl font-inter text-primary-foreground/90 tracking-wide">
            Born To Bake
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl font-inter text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Artisanal French bakery in the heart of Saifi, Beirut. 
          Fresh breads, viennoiseries, and specialty coffee crafted with passion daily.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold px-8 py-6 text-lg"
          >
            <Link to="/menu">View Menu</Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-inter font-semibold px-8 py-6 text-lg"
            onClick={() => window.open("tel:+9611234567", "_self")}
          >
            <Phone className="mr-2 h-5 w-5" />
            Order Now
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="text-primary-foreground hover:bg-primary-foreground/10 font-inter font-semibold px-8 py-6 text-lg"
            onClick={() => scrollToSection("visit")}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Find Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};