import React from 'react';
import { useSelector } from 'react-redux';
import s from './style.module.scss';

const PointOrder = () => {
    const {order} = useSelector((state) => state.orderSlice);

    return (
        <div className={s.order}>
            <h3 className={s.order__title}>YOUR LOOK </h3>
            <h4 className={s.order__description}>Point of issue of the order:</h4>
            <div className={s.order__description}>{order.address}</div>
            <div className={s.order__description}>Working hours:</div>
            <div className={s.order__time}>
            <div className={s.time}>from</div>
                <p className={s.time}>{order.from_time}</p>
                <div className={s.time}>to</div>
                <p className={s.time}>{order.to_time}</p>
            </div>
            <div className={s.order__description}>Phone number:</div>
            <a className={s.order__description} href={order.phone}>{order.phone}</a>
        </div>
    );
};

export default PointOrder;