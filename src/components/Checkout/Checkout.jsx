import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyInput from '../../UI/input/MyInput';
import MyButton from '../../UI/button/MyButton';
import s from './style.module.scss';
import { CheckoutOrderFunc } from '../../store/slices/basketProduct';

const Checkout = () => {
    const dispatch = useDispatch();
    const {basket, total, error} = useSelector((state) => state.basketSlice);

    const [order, setOrder] = useState({
        name: '',
        phone: '',
        address: '',
    });

    return (
        <div className={s.checkout}>
            <h2 className={s.checkout__title}>Your order has been completed</h2>
            <div className={s.checkout__text}>Total number of goods :</div>
            <div className={s.checkout__text}>{basket.length}</div>
            <div className={s.checkout__text}>Total amount :</div>
            <div className={s.checkout__text}>{total} $</div>
            <MyInput className={s.checkout__input} placeholder='Your name' type='text'
            value={order.name}
            onChange={(e) => setOrder({...order, name:e.target.value})} 
            />
            <MyInput className={s.checkout__input} placeholder='Your phone' type='tel'
            value={order.phone}
            onChange={(e) => setOrder({...order, phone:e.target.value})}  
            />
            <MyInput className={s.checkout__input} placeholder='Your address' type='text'
            value={order.address}
            onChange={(e) => setOrder({...order, address:e.target.value})} 
            />
            {error && <p color='red'>{error}</p>}
            <MyButton
                onClick={() => dispatch(CheckoutOrderFunc())}
            >Order</MyButton>
        </div>
    );
};

export default Checkout;