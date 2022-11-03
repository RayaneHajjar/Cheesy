import React from 'react';
import classes from './Header.module.css';
import Pizzas from './pizzas.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>CHEESY</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={Pizzas} alt='A table full of Pizzas!'/>
        </div>
    </>
}

export default Header;