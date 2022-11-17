import React from 'react';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';

const QuestionGender = ({ setState, state }) => {
    return (
        <div className={s.styling__btn}>
            <MyButton onClick={() => setState({...state, questionGender: 'Male'})}  >MALE</MyButton>
            <MyButton onClick={() => setState({...state, questionGender: 'Female'})}  >FEMALE</MyButton>
        </div>
    );
};

export default QuestionGender;