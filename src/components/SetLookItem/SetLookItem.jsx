import React, { useState } from 'react';
import MyButton from '../../UI/button/MyButton';
import ImageItem from '../ImageItem/ImageItem';
import ModalReadyLook from '../../components/Modal/ModalReadyLook'
import s from './style.module.scss';

const SetLookItem = ({look}) => {
    const [modalLookActive, setModalLookActive] = useState(false);

    return (
        <div className={s.setLook}> 
            {
                look.img(item => (<ImageItem item={item} />))
            } 
            <MyButton onClick={() => setModalLookActive(!modalLookActive)} >See more</MyButton>
            {modalLookActive && <ModalReadyLook setModalLookActive={setModalLookActive}/>}
        </div>
    );
};

export default SetLookItem;