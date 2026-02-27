import ScrollReveal from "@/components/ScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

const menuData: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Samosa Platter", desc: "Crispy minced beef or vegetable samosas with tamarind chutney", price: "KSh 350" },
    { name: "Coconut Soup", desc: "Creamy coconut soup infused with lemongrass and coriander", price: "KSh 400" },
    { name: "Grilled Prawns", desc: "Jumbo prawns marinated in garlic butter and herbs", price: "KSh 650" },
    { name: "Garden Fresh Salad", desc: "Mixed greens with avocado, cherry tomatoes, and honey-lime dressing", price: "KSh 300" },
  ],
  Mains: [
    { name: "Nyama Choma", desc: "Premium slow-roasted goat meat served with kachumbari and ugali", price: "KSh 1,200" },
    { name: "Pilau Rice & Chicken", desc: "Fragrant spiced pilau rice with tender braised chicken", price: "KSh 800" },
    { name: "Grilled Tilapia", desc: "Whole Lake Victoria tilapia grilled with lemon and herbs", price: "KSh 950" },
    { name: "Beef Stew", desc: "Slow-cooked beef in rich tomato and herb sauce", price: "KSh 750" },
    { name: "Lamb Chops", desc: "Pan-seared lamb chops with rosemary jus and roasted vegetables", price: "KSh 1,500" },
  ],
  Sides: [
    { name: "Ugali", desc: "Traditional Kenyan cornmeal staple, perfectly prepared", price: "KSh 150" },
    { name: "Chapati", desc: "Soft, flaky layered flatbread", price: "KSh 100" },
    { name: "Sukuma Wiki", desc: "Sautéed collard greens with tomatoes and onions", price: "KSh 200" },
    { name: "Mukimo", desc: "Mashed potatoes with corn, peas, and pumpkin leaves", price: "KSh 250" },
  ],
  Desserts: [
    { name: "Mandazi Bites", desc: "Kenyan doughnuts dusted with cardamom sugar", price: "KSh 250" },
    { name: "Tropical Fruit Platter", desc: "Seasonal fresh fruits — mango, pineapple, passion fruit", price: "KSh 400" },
    { name: "Chocolate Lava Cake", desc: "Rich molten chocolate cake with vanilla ice cream", price: "KSh 550" },
  ],
  Beverages: [
    { name: "Fresh Passion Juice", desc: "Freshly squeezed passion fruit juice", price: "KSh 200" },
    { name: "Kenyan Chai", desc: "Spiced milk tea brewed the traditional way", price: "KSh 100" },
    { name: "Mango Smoothie", desc: "Blended fresh mango with yogurt and honey", price: "KSh 300" },
    { name: "Hibiscus Cooler", desc: "Chilled roselle tea with ginger and lemon", price: "KSh 250" },
  ],
};

const categories = Object.keys(menuData);

const MenuPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Taste The Difference</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-muted-foreground text-lg">
            A selection of our most popular dishes. All menus are fully customizable for your event.
          </p>
        </div>
      </section>

      <section className="section-padding max-w-5xl mx-auto">
        <Tabs defaultValue="Starters">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="px-6 py-2.5 rounded-full border border-primary/20 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid gap-4">
                {menuData[cat].map((item) => (
                  <ScrollReveal key={item.name}>
                    <div className="glass-card p-6 flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                      <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm italic">
            Prices are per serving. Custom packages available for events of 50+ guests.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
