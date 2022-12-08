import React, { useState } from 'react';
import MyButton from '../../UI/button/MyButton';
import ImageItem from '../ImageItem/ImageItem';
import ModalReadyLook from '../../components/Modal/ModalReadyLook'
import s from './style.module.scss';

const SetLookItem = ({look}) => {
    const [modalLookActive, setModalLookActive] = useState(false);
    console.log(look)
    return (
        <div className={s.setLook}> 
            <ImageItem item={look} />
            <MyButton onClick={() => setModalLookActive(!modalLookActive)} >See more</MyButton>
            {modalLookActive && <ModalReadyLook item={look} setModalLookActive={setModalLookActive}/>}
        </div>
    );
};

export default SetLookItem;