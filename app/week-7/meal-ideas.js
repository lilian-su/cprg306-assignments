"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if (!response.ok) {
                console.log(response.status);
                return [];
            }
            const data = await response.json();
            return data.meals;
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return [];
        }
    }

    async function loadMealIdeas() {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals || []);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            {meals ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas found.</p>
            )}
        </div>
    );
}
