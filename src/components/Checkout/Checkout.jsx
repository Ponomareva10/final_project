import React from 'react';
import s from './style.module.scss';

const Checkout = () => {
    return (
        <div className={s.checkout}>
            <h2 className={s.checkout__title}>Your order has been completed</h2>
            <div className={s.checkout__text}>Total number of goods :</div>
            <div className={s.checkout__text}>6</div>
            <div className={s.checkout__text}>Total amount :</div>
            <div className={s.checkout__text}>2424 $</div>
        </div>
    );
};

export default Checkout;