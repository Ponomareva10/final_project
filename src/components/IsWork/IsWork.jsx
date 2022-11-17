import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../UI/button/MyButton';
import FliperSlide from '../FliperSlide/FliperSlide';
import s from './style.module.scss'

const IsWork = () => {
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
                        <div className={s.shoes}>
                            <span>shoes</span>
                        </div>
                        <div className={s.dress}>
                            <span>dresses</span>
                        </div>
                    </div>
                    <div className={s.img__wrapper}>
                        <div className={s.bag}>
                            <span>bags</span>
                        </div>
                        <div className={s.accesories}>
                            <span>accesories</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={s.cards__item}>
                    <h4 className={s.item__nomber}>3</h4>
                    <p className={s.item__text}>We will be happy to help you in choosing goods</p>
                    <div className={s.card__img}>
                        <h5 className={s.img__title}>title</h5>
                        <h6 className={s.img__desc}>description</h6>
                        <h5 className={s.img__price}>200$</h5>
                    </div>
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