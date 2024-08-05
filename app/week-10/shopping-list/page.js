"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from 'react';
import { getItems, addItem } from "../_services/shopping-list-services";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth(); 
    // Function to load items from Firestore
    const loadItems = async () => {
        try {
            const itemsList = await getItems(user.uid);
            setItems(itemsList);
        } catch (error) {
            console.error("Error loading items: ", error);
        }
    };

    // useEffect hook to load items when the component mounts
    useEffect(() => {
    if (user) {
        loadItems(); // Just call loadItems without parameters
    }
}, [user]);


    // Handle adding a new item
    const handleAddItem = async (newItem) => {
        try {
            const newItemId = await addItem(user.uid, newItem);
            setItems([...items, { ...newItem, id: newItemId }]);
        } catch (error) {
            console.error("Error adding item: ", error);
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
