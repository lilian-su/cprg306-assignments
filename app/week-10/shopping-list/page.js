"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from 'react';
import { getItems, addItem } from "../_services/shopping-list-services";
import { useAuth } from "../_utils/auth"; // Assuming you have an auth context or hook

export default function Page() {
    const { user } = useAuth(); // Getting the current user
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        if (user && user.uid) {
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]); // Dependency array includes user to reload items when user changes

    const handleAddItem = async (newItem) => {
        if (user && user.uid) {
            try {
                const newItemId = await addItem(user.uid, newItem);
                const updatedItem = { id: newItemId, ...newItem };
                setItems([...items, updatedItem]);
            } catch (error) {
                console.error("Error adding item:", error);
            }
        }
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
