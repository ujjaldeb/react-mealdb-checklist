import React from 'react';
import './AMealDetail.css';

const AMealDetail = (props) => {
    // console.log(props.aMealDetail);
    const { strMealThumb, strMeal, strInstructions, strArea, strCategory } = props.aMealDetail;
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <div style={{ padding: '25px' }}>
                <h2>{strMeal}</h2>
                <p>{strInstructions.slice(0, 150)}</p>
                <span><small>{strArea + ' ' + strCategory}</small></span>
            </div>
        </div>
    );
};

export default AMealDetail;