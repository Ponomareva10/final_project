import React from 'react';
import { useLocation } from 'react-router-dom';
import s from './style.module.scss';
import imageCard from '../../image/dress2.png';
import imageIcon from '../../image/basket.svg';
import imageDelete from '../../image/delete.svg';

const Product = ({card}) => {
    const location = useLocation()
    return (
        <div className={s.card}>
            <div className={s.card__image}>
                <img className={s.image} src={imageCard} alt="image"/>
            </div>
            <div className={s.card__info}>
                <h2 className={s.info__title}>fgkfghgof</h2>
                <p className={s.info__description}>gfhfbhg</p>
                <div className={s.info__price}>200$
                    <div className={s.info__icon}>
                        {location.pathname !== '/basket' 
                        ? <img className={s.icon} src={imageIcon} alt="icon"/> 
                        : <img className={s.icon} src={imageDelete} alt="icon" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;