import React from 'react';
import MyButton from '../../UI/button/MyButton';
import s from './style.module.scss';

const Styling = () => {
    return (
    <div className={s.styling}>
        <h2 className={s.styling__title}>LETS GET STYLING</h2>
        <h3 className={s.styling__question}>What clothes are you interested in?</h3>
        <div className={s.styling__btn}>
            <MyButton>MALE</MyButton>
            <MyButton>FEMALE</MyButton>
        </div>
        <h3 className={s.styling__question}>What season clothes?</h3>
        <div className={s.styling__btn}>
            <MyButton>SUMMER</MyButton>
            <MyButton>DEMI-SEASONE</MyButton>
            <MyButton>WINTER</MyButton>
        </div>
        <h3 className={s.styling__question}>What style do you need?</h3>
        <div className={s.styling__btn}>
            <MyButton>BUSSINESS</MyButton>
            <MyButton>SPORT</MyButton>
            <MyButton>CASUAL</MyButton>
        </div>
        <MyButton>Get a trendy Look</MyButton>
    </div>
);
};

export default Styling;
