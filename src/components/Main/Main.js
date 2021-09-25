import React, { useEffect, useState } from 'react';
import AMealDetail from '../AMealDetail/AMealDetail';
import Meal from '../Meal/Meal';
import './Main.css';

const Main = () => {
    const [meals, setMeals] = useState([]);
    const [aMealDetail, setAMealDetail] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    const showTheMealDetails = meal => {

        setAMealDetail(meal);
    };

    return (
        <div className="main-container">
            <div className="meals-container">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} showTheMealDetails={showTheMealDetails}></Meal>)
                }
            </div>
            <div className="single-meal">
                <h3>A meal details:</h3>
                {
                    aMealDetail.strMeal ? <AMealDetail aMealDetail={aMealDetail}></AMealDetail> : ''
                }
            </div>
        </div>
    );
};

export default Main;