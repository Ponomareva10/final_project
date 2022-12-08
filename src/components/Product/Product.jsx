import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PostAddedToBasketFunc, PatchBasketFunc } from '../../store/slices/basketProduct';
import s from './style.module.scss';
// import imageCard from '../../image/dress.jpg';
import imageIcon from '../../image/basket.svg';
import imageDelete from '../../image/delete.svg';

const Product = ({card}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    return (
        <div className={s.card}>
            <div className={s.card__image}>
                <img className={s.image} src={card.picture} alt="image"/>
            </div>
            <div className={s.card__info}>
                <h2 className={s.info__title}>{card.title}</h2>
                <p className={s.info__description}>{card.description}</p>
                <div className={s.info__price}>{card.price}
                    <div className={s.info__icon}>
                        {location.pathname !== '/basket' 
                        ? <img className={s.icon} src={imageIcon} alt="icon" onClick={() => dispatch(PostAddedToBasketFunc())} /> 
                        : <img className={s.icon} src={imageDelete} alt="icon" on onClick={() => dispatch(PatchBasketFunc())} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;