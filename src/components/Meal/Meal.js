import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { strMealThumb, strMeal, strInstructions, strArea, strCategory } = props.meal;
    console.log(props.meal);
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <div style={{ padding: '25px' }}>
                <h3>{strMeal}</h3>
                <p>{strInstructions.slice(0, 150)}</p>
                <span><small>{strArea + ' ' + strCategory}</small></span>
            </div>
        </div>
    );
};

export default Meal;