import React, { useState } from 'react';
import MyButton from '../../UI/button/MyButton';
import ImageItem from '../ImageItem/ImageItem';
import ModalReadyLook from '../../components/Modal/ModalReadyLook'
import s from './style.module.scss';

const SetLookItem = () => {
    const [modalLookActive, setModalLookActive] = useState(false);

    return (
        <div className={s.setLook}>
            <ImageItem />
            <ImageItem />
            <ImageItem />
            <ImageItem />
            <ImageItem />
            <ImageItem />
            <MyButton onClick={() => setModalLookActive(!modalLookActive)} >See more</MyButton>
            {modalLookActive && <ModalReadyLook setModalLookActive={setModalLookActive}/>}
        </div>
    );
};

export default SetLookItem;