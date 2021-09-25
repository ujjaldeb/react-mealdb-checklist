import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Main.css';

const Main = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    return (
        <div className="main-container">
            <div className="meals-container">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
            <div className="single-meal">
                <h3>A meal details:</h3>
            </div>
        </div>
    );
};

export default Main;