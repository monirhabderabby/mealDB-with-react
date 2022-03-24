import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([]);

    function loadApi (){
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then(res=> res.json())
        .then(data => setFoods(data.meals))
    }
    
    useEffect(()=>{
        loadApi()
    }, [])
    return (
        <div className='margin'>
            <div className='row'>
            {
                foods.map(food=> <Food food={food} key={food.idMeal}></Food>)
            }
            </div>
        </div>
    );
};

export default Foods;