import React from 'react';
import './Header.css'

const Header = ({searchFood}) => {
    return (
        <div className='cs-container'>
            <nav className='nav'>
                <div className='logo'>
                    mealDB
                </div>
                <div>
                    <section className='search-box'>
                        <input type="text" placeholder='search your food here'/>
                        <button onClick={()=> searchFood()}>Search</button>
                    </section>
                </div>
                <div className='menu'>
                    <p>Order</p>
                    <p>Cart</p>
                    <p>Account</p>
                </div>
            </nav>
        </div>
    );
};

export default Header;