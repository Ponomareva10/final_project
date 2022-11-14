import React, { useState } from 'react';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';
import ModalWindow from '../../components/Modal/ModalWindow';
import Product from '../Product/Product';

const ReadyLook = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <section className={s.look}>
            <h2 className={s.look__title}>Ready the perfect package for you!</h2>
            <h3 className={s.look__text}>This is your Look</h3>
            <div className={s.look__cards}>
                <Product/>
            </div>
            <MyButton onClick={() => setModalActive(!modalActive)} >Leave feedback</MyButton>
            {modalActive && <ModalWindow setModalActive={setModalActive}/>}
        </section>
    );
};

export default ReadyLook;