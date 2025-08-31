import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Coffee,
  Snowflake,
  Leaf,
  Sandwich as SandwichIcon,
  Egg,
  CupSoda,
} from "lucide-react";

/* ================= BRAND PALETTE (brown-dominant) ================= */
const BRAND = {
  brown: "#3A2720", // deep chocolate (bg)
  cocoa: "#4A2F24", // slightly lighter brown
  caramel: "#B5895A", // accent / borders
  cream: "#F2E6D7", // text on dark, light surfaces
  offwhite: "#FBF7F2", // very light
  ink: "#2A1A14", // text on light
};

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}
interface MenuCategory {
  title: string;
  items: MenuItem[];
}

/* ================= SHARED UI ================= */
const PricePill = ({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <Badge
    variant="secondary"
    className="font-inter text-[13px] font-semibold tracking-tight"
    style={{
      backgroundColor: dark ? `${BRAND.cream}22` : `${BRAND.caramel}1F`,
      color: dark ? BRAND.cream : BRAND.caramel,
      borderColor: dark ? `${BRAND.cream}55` : `${BRAND.caramel}66`,
    }}
  >
    {children}
  </Badge>
);

const MenuRow = ({
  item,
  price,
  dark,
}: {
  item: MenuItem;
  price: string;
  dark?: boolean;
}) => (
  <div className="space-y-1">
    <div className="flex items-baseline gap-3">
      <h4
        className="font-inter text-[15px] font-medium"
        style={{ color: dark ? BRAND.cream : BRAND.ink }}
      >
        {item.name}
      </h4>

      {/* dotted leader */}
      <div
        className="flex-1 border-b border-dotted relative top-[2px]"
        style={{
          borderColor: dark ? `${BRAND.cream}66` : `${BRAND.caramel}66`,
        }}
      />

      <div className="shrink-0">
        <PricePill dark={dark}>{price}</PricePill>
      </div>
    </div>

    {item.description && (
      <p
        className="text-sm font-inter"
        style={{ color: dark ? `${BRAND.cream}CC` : "#6B5C55" }}
      >
        {item.description}
      </p>
    )}
  </div>
);

const Panel = ({
  title,
  description,
  icon: Icon,
  tone = "dark",
  children,
}: {
  title: string;
  description?: string;
  icon: any;
  tone?: "dark" | "light";
  children: React.ReactNode;
}) => {
  const dark = tone === "dark";
  return (
    <Card
      className="relative overflow-hidden border backdrop-blur h-full"
      style={{
        borderColor: dark ? `${BRAND.cream}33` : `${BRAND.caramel}55`,
        background: dark
          ? `linear-gradient(180deg, ${BRAND.cocoa}E6 0%, ${BRAND.brown}E6 70%)`
          : `${BRAND.offwhite}F2`,
      }}
    >
      {/* watermark icon */}
      <div
        className="pointer-events-none absolute -right-6 -top-6 opacity-10"
        style={{ color: dark ? BRAND.cream : BRAND.caramel }}
      >
        <Icon size={120} />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              backgroundColor: dark ? `${BRAND.cream}22` : `${BRAND.caramel}20`,
              color: dark ? BRAND.cream : BRAND.caramel,
            }}
          >
            <Icon size={18} />
          </span>
          <CardTitle
            className="font-playfair text-2xl"
            style={{
              color: dark ? BRAND.cream : BRAND.ink,
              textShadow: dark ? "0 1px 0 rgba(0,0,0,.25)" : "none",
            }}
          >
            {title}
          </CardTitle>
        </div>
        {description && (
          <CardDescription
            className="font-inter"
            style={{ color: dark ? `${BRAND.cream}CC` : "#7A6A61" }}
          >
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-5">{children}</CardContent>
    </Card>
  );
};

/* ================= DATA (same as yours) ================= */
export const MenuSection = () => {
  const [currency, setCurrency] = useState<"USD" | "LBP">("USD");
  const exchangeRate = 89000;
  const formatPrice = (price: number) =>
    currency === "USD"
      ? `$${price}`
      : `${Math.round(price * exchangeRate).toLocaleString()} LBP`;

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
      ],
    },
    {
      title: "Specialty Drinks",
      items: [
        { name: "Matcha Latte", price: 6.5 },
        { name: "Hot Chocolate", price: 8 },
        { name: "Tea Selection", price: 5 },
        { name: "Dupain Special", price: 8 },
      ],
    },
  ];

  const drinksIced: MenuCategory[] = [
    {
      title: "Iced Coffee",
      items: [
        { name: "Iced Latte", price: 5 },
        { name: "Iced Matcha", price: 6.5 },
        { name: "Iced Black Coffee", price: 4.5 },
        { name: "Iced Americano", price: 4.5 },
      ],
    },
    {
      title: "Fresh Juices",
      items: [
        { name: "Orange", price: 7 },
        { name: "Carrot", price: 7 },
        { name: "Orange & Carrot", price: 7 },
        { name: "Apple", price: 7 },
      ],
    },
    { title: "Beverages", items: [{ name: "Soft Drinks", price: 4 }] },
  ];

  const food: MenuCategory[] = [
    {
      title: "Eggs",
      items: [
        {
          name: "Mushroom Omelette",
          price: 12,
          description: "Eggs, Avocado Slices, Grilled Mushrooms, Sucrine",
        },
        {
          name: "Truffle Omelette",
          price: 14,
          description: "Eggs, Avocado Slices, Truffle Paste, Sucrine",
        },
        {
          name: "Tomato Omelette",
          price: 13,
          description: "Eggs, Avocado Slices, Roasted Tomatoes, Sucrine",
        },
        {
          name: "Benedict Eggs",
          price: 13,
          description:
            "Poached Eggs, Avocado Slices, Hollandaise, Smoked Paprika — Add Salmon $7 | Turkey $9 | Spinach $4",
        },
        {
          name: "Scrambled Eggs",
          price: 8,
          description: "Creamy Eggs, Spinach, Toast, Chili Flakes",
        },
      ],
    },
    {
      title: "Salads",
      items: [
        {
          name: "Fetta Salad",
          price: 21,
          description: "Feta, Tomatoes, Zaatar, Shallots, Kalamata",
        },
        {
          name: "Green Salad",
          price: 13,
          description: "Mixed Greens, Granny Smith, Carrots, Lemon Oil",
        },
        {
          name: "Zucchini Parmesan Salad",
          price: 21,
          description: "Zucchini, Smoked Salmon, Avocado, Seeds, Dill",
        },
        {
          name: "Caesar Salad",
          price: 18,
          description: "Baby Gem, Parmesan, Melba Toast",
        },
        {
          name: "Nicoise Salad",
          price: 22,
          description: "Tuna, Baby Carrots, Brussels Sprouts, Quail Eggs",
        },
      ],
    },
    {
      title: "Toasts",
      items: [
        {
          name: "Avocado Toast",
          price: 12,
          description:
            "Sourdough, Avocado Mousse, Roasted Tomatoes, Chili Flakes",
        },
        {
          name: "Tuna Toast",
          price: 19,
          description: "Sourdough, Avocado Mousse, Yuzu Kosho, Seared Tuna",
        },
        {
          name: "Smoked Salmon Toast",
          price: 18,
          description: "Sourdough, Smoked Salmon, Avocado Mousse, Dill",
        },
      ],
    },
    {
      title: "Sandwiches",
      items: [
        {
          name: "Chicken Club Sando",
          price: 18,
          description:
            "Grilled Chicken, Pain de Mie, Cheeses, Mayo, Dijon, Pickles",
        },
        {
          name: "Shrimp Club",
          price: 22,
          description:
            "Soft Bun, Grilled Shrimps, Avocado, Japanese Mayo, Basil",
        },
        {
          name: "Pastrami & Cheddar",
          price: 22,
          description: "Sourdough, Pastrami, Cheddar, Dijon, Ricotta Dill",
        },
      ],
    },
    {
      title: "Extras",
      items: [
        { name: "Avocado Dip", price: 5 },
        { name: "Creamy Spinach Dip", price: 5 },
        { name: "Ricotta Dip", price: 5 },
        { name: "French Fries", price: 5 },
        { name: "Sweet Potato Fries", price: 8 },
      ],
    },
  ];

  const renderMenuCategory = (category: MenuCategory, dark?: boolean) => (
    <div key={category.title} className="mb-6">
      <h3
        className="mb-3 font-playfair text-lg tracking-wide uppercase"
        style={{ color: dark ? BRAND.cream : BRAND.cocoa }}
      >
        {category.title}
      </h3>
      <div className="space-y-4">
        {category.items.map((it, i) => (
          <MenuRow
            key={i}
            item={it}
            price={formatPrice(it.price)}
            dark={dark}
          />
        ))}
      </div>
    </div>
  );

  const currencyToggle = useMemo(
    () => (
      <div
        className="inline-flex rounded-full p-1 backdrop-blur"
        style={{ backgroundColor: `${BRAND.caramel}20` }}
      >
        {(["USD", "LBP"] as const).map((c) => {
          const active = currency === c;
          return (
            <Button
              key={c}
              onClick={() => setCurrency(c)}
              size="sm"
              variant={active ? "default" : "ghost"}
              className="rounded-full font-inter font-medium"
              style={{
                backgroundColor: active ? BRAND.caramel : "transparent",
                color: active ? "white" : BRAND.caramel,
              }}
            >
              {c}
            </Button>
          );
        })}
      </div>
    ),
    [currency]
  );

  return (
    <section
      id="menu"
      className="relative py-20"
      style={{
        /* Brown-heavy gradient (≈80% brown) with subtle vignette */
        background: `linear-gradient(135deg, ${BRAND.brown} 0%, ${BRAND.cocoa} 65%, ${BRAND.offwhite} 100%)`,
      }}
    >
      {/* subtle top gloss */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-gradient-to-b from-white to-transparent" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-4 font-playfair text-4xl font-bold"
            style={{
              color: BRAND.cream,
              textShadow: "0 1px 0 rgba(0,0,0,.35)",
            }}
          >
            Our Menu
          </h2>
          <p
            className="mx-auto max-w-2xl font-inter text-lg"
            style={{ color: `${BRAND.cream}CC` }}
          >
            Artisanal beverages and carefully crafted dishes made with the
            finest ingredients.
          </p>
          <div className="mt-6 flex justify-center">{currencyToggle}</div>
        </div>

        <Tabs defaultValue="drinks" className="mx-auto max-w-6xl">
          <TabsList className="mb-8 grid w-full grid-cols-2 bg-white/10 backdrop-blur rounded-full">
            <TabsTrigger
              value="drinks"
              className="font-inter text-[15px] data-[state=active]:bg-white/20 data-[state=active]:text-white rounded-full text-white/80"
            >
              Drinks
            </TabsTrigger>
            <TabsTrigger
              value="food"
              className="font-inter text-[15px] data-[state=active]:bg-white/20 data-[state=active]:text-white rounded-full text-white/80"
            >
              Food
            </TabsTrigger>
          </TabsList>

          {/* DRINKS */}
          <TabsContent value="drinks">
            <div className="grid gap-8 md:grid-cols-2">
              <Panel
                title="Hot Drinks"
                description="Freshly brewed coffee & specialty cups"
                icon={Coffee}
                tone="dark" // white text inside
              >
                {drinksHot.map((cat) => renderMenuCategory(cat, true))}
              </Panel>

              <Panel
                title="Iced & Fresh"
                description="Cold coffee, fresh juices & sodas"
                icon={Snowflake}
                tone="light" // dark text inside
              >
                {drinksIced.map((cat) => renderMenuCategory(cat, false))}
                <div className="mt-2">
                  <div
                    className="mt-4 rounded-lg border px-3 py-2"
                    style={{
                      borderColor: `${BRAND.caramel}55`,
                      color: BRAND.ink,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <CupSoda size={16} style={{ color: BRAND.caramel }} />
                      <span className="text-sm font-inter">
                        Looking for soft drinks? Find them under{" "}
                        <b>Beverages</b>.
                      </span>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>
          </TabsContent>

          {/* FOOD */}
          <TabsContent value="food">
            <div className="grid gap-8 lg:grid-cols-3">
              {" "}
              {/* was md:grid-cols-2 */}
              <Panel title="Eggs & Toasts" icon={Egg} tone="light">
                {renderMenuCategory(food[0], false)}
                {renderMenuCategory(food[2], false)}
              </Panel>
              <Panel title="Sandwiches & Sides" icon={SandwichIcon} tone="dark">
                {renderMenuCategory(food[3], true)}
                {renderMenuCategory(food[4], true)}
              </Panel>
              <Panel title="Salads" icon={Leaf} tone="light">
                {renderMenuCategory(food[1], false)}
              </Panel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
