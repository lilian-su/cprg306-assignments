"use client";

import { useState } from 'react';
import Item from './item.js';

export default function ItemList({ items = [], onItemSelect }) {
    let itemArray = items.map((item) => ({ ...item }));

    let [sortBy, setSortBy] = useState("name");

    itemArray = itemArray.sort((a, b) => {
        if (isNaN(parseInt(a[sortBy]))) {
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else {
            return parseInt(a[sortBy]) - parseInt(b[sortBy]);
        }
    });

    return (
        <div>
            <section className='flex my-3 p-4 bg-white/50 shadow-md rounded'>
                <div>
                    <div className='flex-1'>
                        <label className='text-xl'>Sort by:</label>
                        <button className='bg-blue-100 border-2 border-amber-900 active:bg-amber-300 hover:bg-cyan-500 focus:bg-cyan-500 focus:outline-none focus:ring text-black font-bold rounded p-3 mx-3' onClick={() => setSortBy('name')}>Name</button>
                        <button className='bg-blue-100 border-2 border-amber-900 active:bg-amber-300 hover:bg-cyan-500 focus:bg-cyan-500 focus:outline-none focus:ring text-black font-bold rounded p-3 mx-3' onClick={() => setSortBy('category')}>Category</button>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-1 gap-4'>
                {itemArray.map((item) => (
                    <div
                        key={item.name}
                        className="p-2 my-4 bg-cyan-500 border-2 border-amber-900 w-80"
                        onClick={() => onItemSelect(item)}
                    >
                        <h3 className="text-2xl">{item.name}</h3>
                        <p>Buy {item.quantity} in {item.category}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
