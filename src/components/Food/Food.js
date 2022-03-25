import React from 'react';
import './Food.css'

const Food = (props) => {
    const{ strMeal, strMealThumb } = props.food

    
    return (
        <div className='col-lg-4'>
            <div className="custom-card">
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Food;