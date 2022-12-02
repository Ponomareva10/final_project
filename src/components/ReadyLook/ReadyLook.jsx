import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';
import ModalWindow from '../../components/Modal/ModalWindow';
import SetLookItem from '../../components/SetLookItem/SetLookItem';
import Spinner from 'react-bootstrap/esm/Spinner';
import { GetLookFunc } from '../../store/slices/looksSet';

const ReadyLook = () => {
    const dispatch = useDispatch();
    const { looks, louder } = useSelector((state) => state.lookSlice);
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        dispatch(GetLookFunc())
    }, []);

    return (
        <section className={s.look}>
            <div className={s.look__cards}>
                {
                louder ? <Spinner animation='grow' /> : looks.map((look) => (<SetLookItem key={look.id} look={look} />))
                }
            </div>
            <MyButton onClick={() => setModalActive(!modalActive)} >Leave feedback</MyButton>
            {modalActive && <ModalWindow setModalActive={setModalActive}/>}
        </section>
    );
};

export default ReadyLook;