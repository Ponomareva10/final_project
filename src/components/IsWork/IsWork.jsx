import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetOutermostFunc, GetShoesFunc, GetPantsFunc, GetAccesoriesFunc, GetProductFunc } from '../../store/slices/Products';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';
import FliperSlide from '../FliperSlide/FliperSlide';
import product from '../../image/img6.jpg';

const IsWork = () => {
    const dispatch = useDispatch();

    return (
        <section className={s.work}>
            <h2 className={s.work__title}>How's it works</h2>
            <div className={s.work__cards}>
                <div className={s.cards__item}>
                    <h4 className={s.item__nomber}>1</h4>
                    <p className={s.item__text}>Уou can see our products</p>
                    <div className={s.card__img1}>
                    <FliperSlide />
                    </div>
                </div>  
                <div className={s.cards__item}>
                    <h4 className={s.item__nomber}>2</h4>
                    <p className={s.item__text}>Оur products are categorized</p>
                    <div className={s.card__img2}>
                    <div className={s.img__wrapper}>
                        <Link className={s.link} to='shoplist' >
                        <div className={s.shoes} onClick={() => dispatch(GetShoesFunc())} >
                            <span>shoes</span>
                        </div>
                        </Link>
                        <Link className={s.link}  to='shoplist' >
                        <div className={s.dress} onClick={() => dispatch(GetOutermostFunc())}>
                            <span>ouitermost</span>
                        </div>
                        </Link>
                    </div>
                    <div className={s.img__wrapper}>
                        <Link className={s.link}  to='shoplist' >
                        <div className={s.bag} onClick={() => dispatch(GetPantsFunc())} >
                            <span>pants</span>
                        </div>
                        </Link>
                        <Link className={s.link}  to='shoplist' >
                        <div className={s.accesories} onClick={() => dispatch(GetAccesoriesFunc())}>
                            <span>accesories</span>
                        </div>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className={s.cards__item}>
                    <h4 className={s.item__nomber}>3</h4>
                    <p className={s.item__text}>We will be happy to help you in choosing goods</p>
                    <Link to='shoplist'>
                    <div className={s.card__img}  onClick={() => dispatch(GetProductFunc())}>
                        <h5 className={s.img__title}>All items in stock</h5>
                        <h6 className={s.img__desc}>You can see</h6>
                    </div>
                    </Link>
                </div>  
            </div>
            <div className={s.btn}>
                <Link to='/question'>
                    <MyButton>LETS GET STYLING</MyButton>
                </Link>
            </div>
        </section>
    );
};

export default IsWork;