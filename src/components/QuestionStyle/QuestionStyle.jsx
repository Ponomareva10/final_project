import React from 'react';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';

const QuestionStyle = ({ setState, state }) => {

    return (
        <div className={s.styling__btn}>
            <MyButton onClick={() => setState({...state, questionStyle: 'Bussines'})} >BUSSINESS</MyButton>
            <MyButton onClick={() => setState({...state, questionStyle: 'Sport'})} >SPORT</MyButton>
            <MyButton onClick={() => setState({...state, questionStyle: 'Casual'})} >CASUAL</MyButton>
        </div>
    );
};

export default QuestionStyle;