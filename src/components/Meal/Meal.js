import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Meal.css';

const Meal = (props) => {
    const { strMealThumb, strMeal, strInstructions, strArea, strCategory } = props.meal;
    // console.log(props.meal);
    const faIcon = <FontAwesomeIcon icon={faCoffee} />

    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <div style={{ padding: '25px' }}>
                <h2>{strMeal}</h2>
                <p>{strInstructions.slice(0, 150)}</p>
                <span><small>{strArea + ' ' + strCategory}</small></span>
                <br />
                <button onClick={() => props.showTheMealDetails(props.meal)}>{faIcon} See details...</button>
            </div>
        </div>
    );
};

export default Meal;