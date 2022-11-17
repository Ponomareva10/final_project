import React, { useState } from 'react';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';
import ModalWindow from '../../components/Modal/ModalWindow';
import SetLookItem from '../../components/SetLookItem/SetLookItem';

const ReadyLook = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <section className={s.look}>
            <div className={s.look__cards}>
                <SetLookItem />
                <SetLookItem />
                <SetLookItem />
                <SetLookItem />
            </div>
            <MyButton onClick={() => setModalActive(!modalActive)} >Leave feedback</MyButton>
            {modalActive && <ModalWindow setModalActive={setModalActive}/>}
        </section>
    );
};

export default ReadyLook;