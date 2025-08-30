import { Card, CardContent } from "@/components/ui/card";
import { Wheat, Croissant, Coffee } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      icon: Wheat,
      title: "Artisanal Breads",
      description: "Fresh sourdough, baguettes, and specialty breads baked daily with traditional French techniques.",
    },
    {
      icon: Croissant,
      title: "Viennoiseries",
      description: "Buttery croissants, pain au chocolat, and pastries made with premium French butter.",
    },
    {
      icon: Coffee,
      title: "Coffee & Drinks",
      description: "Specialty coffee, matcha lattes, fresh juices, and artisanal beverages crafted to perfection.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-accent/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-card-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};