import React from 'react';
import Product from '../Product/Product';
import s from './style.module.scss';

const Basket = () => {
    return (
        <div className={s.basket}>
            <div className={s.basket__wrapper}>
                <Product />
            </div>
            <div className={s.total}>Total amount :
                <div className={s.total__price}>23232 $</div>
            </div>
        </div>
    );
};

export default Basket;