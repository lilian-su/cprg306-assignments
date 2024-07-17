"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useState } from 'react';

export default function Page() {
    const [items, setItems] = useState(itemsData.map((item) => ({ ...item })));
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
    // Clean the item name by removing special characters, emojis, and anything after a comma or semicolon
    let cleanItemName = item.name.replace(/[^\w\s,]/g, "");
    cleanItemName = cleanItemName.split(/[;,]/)[0].trim();
    cleanItemName = cleanItemName
      .toLowerCase()
      .replace(/\b\w/g, (s) => s.toUpperCase());
    console.log("Selected item:", cleanItemName);
    setSelectedItemName(cleanItemName);
  };
    return (
        <main className="p-5 bg-amber-300">
            <h1 className="text-4xl text-yellow-800 font-bold font-mono">Shopping List</h1>
            <div className="flex">
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}

