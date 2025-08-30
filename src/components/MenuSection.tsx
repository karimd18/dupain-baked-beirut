import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const MenuSection = () => {
  const [currency, setCurrency] = useState<"USD" | "LBP">("USD");
  const exchangeRate = 89500; // USD to LBP rate - can be made dynamic

  const formatPrice = (price: number) => {
    if (currency === "USD") {
      return `$${price}`;
    }
    return `${(price * exchangeRate).toLocaleString()} LBP`;
  };

  const drinksHot: MenuCategory[] = [
    {
      title: "Coffee",
      items: [
        { name: "Espresso Single", price: 3.5 },
        { name: "Espresso Double", price: 4.5 },
        { name: "Americano", price: 4.5 },
        { name: "Black Coffee", price: 4.5 },
        { name: "French Press", price: 5.5 },
        { name: "V60", price: 6.5 },
        { name: "Café Latte", price: 5 },
        { name: "Cappuccino", price: 5 },
        { name: "Cortado", price: 4 },
        { name: "Flat White", price: 5 },
        { name: "Macchiato", price: 4 },
      ]
    },
    {
      title: "Specialty Drinks",
      items: [
        { name: "Matcha Latte", price: 6.5 },
        { name: "Hot Chocolate", price: 8 },
        { name: "Tea Selection", price: 5 },
        { name: "Dupain Special", price: 8 },
      ]
    }
  ];

  const drinksIced: MenuCategory[] = [
    {
      title: "Iced Coffee",
      items: [
        { name: "Iced Latte", price: 5 },
        { name: "Iced Matcha", price: 6.5 },
        { name: "Iced Black Coffee", price: 4.5 },
        { name: "Iced Americano", price: 4.5 },
      ]
    },
    {
      title: "Fresh Juices",
      items: [
        { name: "Orange", price: 7 },
        { name: "Carrot", price: 7 },
        { name: "Orange & Carrot", price: 7 },
        { name: "Apple", price: 7 },
      ]
    },
    {
      title: "Beverages",
      items: [
        { name: "Soft Drinks", price: 4 },
      ]
    }
  ];

  const food: MenuCategory[] = [
    {
      title: "Eggs",
      items: [
        { name: "Mushroom Omelette", price: 12, description: "Eggs, Avocado Slices, Grilled Mushrooms, Sucrine" },
        { name: "Truffle Omelette", price: 14, description: "Eggs, Avocado Slices, Truffle Paste, Sucrine" },
        { name: "Tomato Omelette", price: 13, description: "Eggs, Avocado Slices, Roasted Tomatoes, Sucrine" },
        { name: "Benedict Eggs", price: 13, description: "Poached Eggs, Avocado Slices, Hollandaise, Smoked Paprika — Add Salmon $7 | Turkey $9 | Spinach $4" },
        { name: "Scrambled Eggs", price: 8, description: "Creamy Eggs, Spinach, Toast, Chili Flakes" },
      ]
    },
    {
      title: "Salads",
      items: [
        { name: "Fetta Salad", price: 21, description: "Feta Cheese, Yellow & Red Vine Tomatoes, Zaatar, Shallots, Kalamata" },
        { name: "Green Salad", price: 13, description: "Mixed Greens, Granny Smith Apple, Carrots, Lemon Oil Dressing" },
        { name: "Zucchini Parmesan Salad", price: 21, description: "Zucchini, Smoked Salmon, Avocado, Sunflower & Pumpkin Seeds, Dill, Sweet Mustard Dressing" },
        { name: "Caesar Salad", price: 18, description: "Baby Gem, Parmesan, Melba Toast" },
        { name: "Nicoise Salad", price: 22, description: "Tuna, Baby Carrots, Brussels Sprouts, Fava Shoots, Kumquat, Quail Eggs, Calamansi Dressing" },
      ]
    },
    {
      title: "Toasts",
      items: [
        { name: "Avocado Toast", price: 12, description: "Sourdough, Avocado Mousse, Roasted Tomatoes, Chili Flakes, Olive Oil, Lemon Cheek" },
        { name: "Tuna Toast", price: 19, description: "Sourdough, Avocado Mousse, Yuzu Kosho, Seared Fresh Tuna, Chili Flakes, Olive Oil, Lemon Cheek" },
        { name: "Smoked Salmon Toast", price: 18, description: "Sourdough, Smoked Salmon, Avocado Mousse, Dill, Chives, Chili Flakes, Olive Oil, Lemon Cheek" },
      ]
    },
    {
      title: "Sandwiches",
      items: [
        { name: "Chicken Club Sando", price: 18, description: "Grilled Chicken Breast, Pain de Mie, Heirloom Tomatoes, Emmental, Cheddar, Japanese Mayo, Dijon, Baby Gem, American Dill Pickles" },
        { name: "Shrimp Club", price: 22, description: "Soft Bun, Grilled Shrimps, Avocado, Japanese Mayo, Basil, Orange Sauce, Kimchi Base" },
        { name: "Pastrami & Cheddar", price: 22, description: "Sourdough, Pastrami, Cheddar, Dijon Mustard, Ricotta Dill Sauce" },
      ]
    },
    {
      title: "Extras",
      items: [
        { name: "Avocado Dip", price: 5 },
        { name: "Creamy Spinach Dip", price: 5 },
        { name: "Ricotta Dip", price: 5 },
        { name: "French Fries", price: 5 },
        { name: "Sweet Potato Fries", price: 8 },
      ]
    }
  ];

  const renderMenuCategory = (category: MenuCategory) => (
    <div key={category.title} className="mb-8">
      <h3 className="text-lg font-playfair font-semibold text-foreground mb-4 uppercase tracking-wide">
        {category.title}
      </h3>
      <div className="space-y-3">
        {category.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start border-b border-accent/20 pb-3"
          >
            <div className="flex-1">
              <h4 className="font-inter font-medium text-foreground">
                {item.name}
              </h4>
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1 font-inter">
                  {item.description}
                </p>
              )}
            </div>
            <div className="ml-4">
              <Badge
                variant="secondary"
                className="bg-accent/10 text-accent font-inter font-semibold"
              >
                {formatPrice(item.price)}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Artisanal beverages and carefully crafted dishes made with the finest ingredients
          </p>
          
          {/* Currency Toggle */}
          <div className="flex justify-center mt-6">
            <div className="bg-secondary rounded-lg p-1">
              <Button
                variant={currency === "USD" ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrency("USD")}
                className="font-inter font-medium"
              >
                USD
              </Button>
              <Button
                variant={currency === "LBP" ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrency("LBP")}
                className="font-inter font-medium"
              >
                LBP
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="drinks" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="drinks" className="font-inter font-medium">
              Drinks
            </TabsTrigger>
            <TabsTrigger value="food" className="font-inter font-medium">
              Food
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drinks">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Hot Drinks */}
              <Card className="border border-accent/20">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-foreground">
                    Hot Drinks
                  </CardTitle>
                  <CardDescription className="font-inter">
                    Freshly brewed coffee and specialty beverages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {drinksHot.map(renderMenuCategory)}
                </CardContent>
              </Card>

              {/* Iced Drinks */}
              <Card className="border border-accent/20">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-foreground">
                    Iced & Fresh
                  </CardTitle>
                  <CardDescription className="font-inter">
                    Refreshing cold beverages and fresh juices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {drinksIced.map(renderMenuCategory)}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="grid md:grid-cols-2 gap-8">
              {food.map((category) => (
                <Card key={category.title} className="border border-accent/20">
                  <CardContent className="pt-6">
                    {renderMenuCategory(category)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};