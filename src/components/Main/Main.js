import React, { useEffect, useState } from 'react';
import AMealDetail from '../AMealDetail/AMealDetail';
import Meal from '../Meal/Meal';
import './Main.css';

const Main = () => {
    const [meals, setMeals] = useState([]);
    const [aMealDetail, setAMealDetail] = useState({});
    const [searchedMeals, setSearchedMeals] = useState('');

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeals}`)
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
            });
    }, [searchedMeals]);

    const showTheMealDetails = meal => {
        setAMealDetail(meal);
    };

    const handleSearch = (event) => {
        const searchText = event.target.value;
        setSearchedMeals(searchText);
    };

    return (
        <>
            <div className="search-area">
                <input onChange={handleSearch} type="text" placeholder="Enter your search text here" />
            </div>
            <div className="main-container">
                <div className="meals-container">
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal} showTheMealDetails={showTheMealDetails}></Meal>)
                    }
                </div>
                <div className="single-meal">

                    {
                        aMealDetail.strMeal ? <AMealDetail aMealDetail={aMealDetail}></AMealDetail> : ''
                    }
                </div>
            </div>
        </>
    );
};

export default Main;