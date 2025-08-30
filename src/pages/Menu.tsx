import { Navigation } from "@/components/Navigation";
import { MenuSection } from "@/components/MenuSection";

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <MenuSection />
      </div>
    </div>
  );
};

export default Menu;