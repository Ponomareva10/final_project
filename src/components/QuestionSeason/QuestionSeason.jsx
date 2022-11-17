import React from 'react';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';

const QuestionSeason = ({ setState, state }) => {
    
    return (
    <div className={s.styling__btn}>
        <MyButton onClick={() => setState({...state, questionSeason: 'Summer'})}  >SUMMER</MyButton>
        <MyButton onClick={() => setState({...state, questionSeason: 'Demi-Seasone'})}  >DEMI-SEASONE</MyButton>
        <MyButton onClick={() => setState({...state, questionSeason: 'Winter'})}  >WINTER</MyButton>
    </div>
    );
};

export default QuestionSeason;