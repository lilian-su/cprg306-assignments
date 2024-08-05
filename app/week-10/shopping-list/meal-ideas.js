"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        console.log(ingredient);
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if (!response.ok) {
                console.log(response.status);
                return [];
            }
            const data = await response.json();
            console.log(data);
            return data.meals;
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return [];
        }
    }

    async function loadMealIdeas() {
        const meals = await fetchMealIdeas(ingredient);
        // console.log(meals);
        setMeals(meals || []);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

   return (
        <div>
            <h1>Meal Ideas</h1>
            {meals && meals.length > 0 ? (
                <div>
                    <p>Here are some meal ideas for {ingredient}:</p>
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal}>
                                <h3>{meal.strMeal}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No meal ideas found.</p>
            )}
        </div>
    );
}
