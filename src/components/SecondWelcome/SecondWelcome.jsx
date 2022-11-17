import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';

const SecondWelcome = () => {
    return (
        <section className={s.bg}>
            <p className={s.bg__text}> We'll help you shop from labels you already love, introduce you to up-and-coming designers, premium denim brands, bespoke suits and bring you vintage pieces you won't find anywhere else.
                <div className={s.btn}>
                    <Link to='/question'>
                        <MyButton>LETS GET STYLING</MyButton>
                    </Link>
                </div>
            </p>
        </section>
    );
};

export default SecondWelcome;