import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MyButton from '../../UI/button/MyButton';
import QuestionGender from '../QuestionGender/QuestionGender';
import QuestionSeason from '../QuestionSeason/QuestionSeason';
import QuestionStyle from '../QuestionStyle/QuestionStyle';
import s from './style.module.scss';
import { PostLookFunc } from '../../store/slices/looksSet';

const Styling = () => { 
    const dispatch = useDispatch()

    const [obj, setObj] = useState({
        questionStyle: '',
        questionGender: '',
        questionSeason: '',
    })

    return (
    <div className={s.styling}>
        <h2 className={s.styling__title}>LETS GET STYLING</h2>
        <h3 className={s.styling__question}>What clothes are you interested in?</h3>
        <QuestionGender setState={setObj} state={obj} />
        <h3 className={s.styling__question}>What season clothes?</h3>
        <QuestionSeason setState={setObj} state={obj} />
        <h3 className={s.styling__question}>What style do you need?</h3>
        <QuestionStyle setState={setObj} state={obj} />
        <Link to='/readylook'>
            <MyButton 
            disabled={obj.questionSeason && obj.questionGender && obj.questionStyle ? false 
            : true}
                onClick={() => dispatch(PostLookFunc(obj))}
            >Get a trendy Look</MyButton>
        </Link>
    </div>
)};

export default Styling;