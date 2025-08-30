import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Wheat } from "lucide-react";

export const About = () => {
  const timeline = [
    { time: "5:00 AM", activity: "Fresh dough preparation begins" },
    { time: "6:00 AM", activity: "First batch of breads in the oven" },
    { time: "7:00 AM", activity: "Viennoiseries and pastries baking" },
    { time: "8:00 AM", activity: "Coffee brewing and doors open" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            About Dupain
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Born from a passion for authentic French baking traditions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4 flex items-center gap-3">
                <Heart className="h-6 w-6 text-accent" />
                Our Story
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                Dupain was born from a simple belief: that the best bread comes from passion, 
                time, and the finest ingredients. Located in the vibrant Saifi district of Beirut, 
                we bring authentic French baking traditions to Lebanon.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Every morning, our bakers arrive before dawn to begin the sacred ritual of 
                bread-making. Using traditional techniques passed down through generations, 
                we craft each loaf, croissant, and pastry with meticulous care and attention to detail.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4 flex items-center gap-3">
                <Wheat className="h-6 w-6 text-accent" />
                Artisanal Process
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                We believe in slow fermentation, using natural starters and giving our dough 
                the time it needs to develop complex flavors. Our commitment to quality extends 
                beyond baking—we carefully source our ingredients and support local suppliers 
                whenever possible.
              </p>
            </div>
          </div>

          {/* Daily Timeline */}
          <div>
            <Card className="border border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-accent" />
                  Daily Baking Timeline
                </h3>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-inter font-semibold whitespace-nowrap">
                        {item.time}
                      </div>
                      <p className="text-muted-foreground font-inter">
                        {item.activity}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-accent/20">
                  <p className="text-sm text-muted-foreground font-inter italic text-center">
                    "Every day is a new opportunity to create something beautiful and delicious"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};