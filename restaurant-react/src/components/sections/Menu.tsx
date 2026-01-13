"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

const categories = ["Breakfast", "Lunch", "Dinner", "Desserts", "Beverages"];

const menuItems = {
  Breakfast: [
    { name: "Fluffy Pancakes", description: "With maple syrup and fresh berries", price: "$12" },
    { name: "Avocado Toast", description: "Poached eggs on artisan sourdough", price: "$14" },
    { name: "Belgian Waffles", description: "Whipped cream and seasonal fruit", price: "$13" },
    { name: "Classic Omelette", description: "Three eggs with choice of fillings", price: "$11" },
  ],
  Lunch: [
    { name: "Gourmet Burger", description: "Angus beef with truffle fries", price: "$18" },
    { name: "Caesar Salad", description: "Grilled chicken and parmesan", price: "$15" },
    { name: "Pasta Primavera", description: "Fresh vegetables in light cream sauce", price: "$17" },
    { name: "Club Sandwich", description: "Triple decker with bacon and turkey", price: "$14" },
  ],
  Dinner: [
    { name: "Grilled Salmon", description: "With roasted vegetables and lemon butter", price: "$28" },
    { name: "Filet Mignon", description: "8oz tenderloin with red wine reduction", price: "$38" },
    { name: "Lobster Risotto", description: "Creamy arborio rice with fresh lobster", price: "$32" },
    { name: "Chicken Piccata", description: "Pan-seared with caper lemon sauce", price: "$24" },
  ],
  Desserts: [
    { name: "Chocolate Lava Cake", description: "Warm molten center with vanilla ice cream", price: "$10" },
    { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$9" },
    { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar", price: "$9" },
    { name: "Cheesecake", description: "New York style with berry compote", price: "$10" },
  ],
  Beverages: [
    { name: "Fresh Squeezed Juice", description: "Orange, grapefruit, or carrot", price: "$6" },
    { name: "Artisan Coffee", description: "Espresso, latte, cappuccino", price: "$5" },
    { name: "Premium Tea", description: "Selection of loose leaf teas", price: "$4" },
    { name: "Craft Cocktails", description: "Signature mixed drinks", price: "$12" },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <section id="menu" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-800">
              Our Menu
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Explore Our Specialty Cuisine
            </h2>
            <p className="text-gray-600">
              Crafted with the finest ingredients and culinary expertise
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card key={index} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle as="h3" className="text-lg">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {item.description}
                      </CardDescription>
                    </div>
                    <span className="ml-4 text-lg font-bold text-orange-600">
                      {item.price}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              *Prices subject to change. Please inform staff of any dietary restrictions or allergies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
