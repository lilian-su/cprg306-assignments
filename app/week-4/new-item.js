"use client";

import { useState } from "react";

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event)
        let newItem = {
            name: name,
            quantity: quantity,
            category: category,
        };
        alert(`This item is named ${newItem.name}
        \n Quantity: ${newItem.quantity}
        \n Category: ${newItem.category}`);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const handleItemName = (event) => {
        setName(event.target.value);
    }

    const handleItemQuantity = (event) => {
        
        setQuantity(event.target.value);
    }
    const handleItemCategory = (event) => {
        setCategory(event.target.value);
    }

    const linkStyles2="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight";




    return(
        <div className=" w-full max-w-xs  ">

        <form  onSubmit={handleSubmit} className="bg-white/50 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
                <input className={linkStyles2} required type="text" placeholder = "Item name" onChange={handleItemName} value={name} />
            </div>
            <div className="flex items-center justify-between">
                <input className="shadow border rounded w-15 py-2 px-3 leading-tight mr-10" type="number" onChange={handleItemQuantity} value={quantity} min="1" max="99" />


                <select className="shadow border rounded w-full py-2 px-3 leading-tight" onChange={handleItemCategory} value={category}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat">Meat</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Canned">Canned</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4" type="submit">+</button>
        </form>

        </div>

        

    )
    

};