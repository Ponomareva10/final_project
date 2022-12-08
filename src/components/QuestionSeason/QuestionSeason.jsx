import React from 'react';
import s from './style.module.scss';
import MyButton from '../../UI/button/MyButton';

const QuestionSeason = ({ setState, state }) => {
    
    return (
    <div className={s.styling__btn}>
        <MyButton onClick={() => setState({...state, season: 'summer'})}  >SUMMER</MyButton>
        <MyButton onClick={() => setState({...state, season: 'demi'})}  >DEMI-SEASONE</MyButton>
        <MyButton onClick={() => setState({...state, season: 'winter'})}  >WINTER</MyButton>
    </div>
    );
};

export default QuestionSeason;