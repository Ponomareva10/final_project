import React from 'react';
import s from './style.module.scss';

const ImageComponentsForReady = () => {
    return (
        <div className={s.forReady}>
            <h2 className={s.forReady__title}>Ready the perfect package for you!</h2>
            <h3 className={s.forReady__text}>This is your Looks</h3>
        </div>
    );
};

export default ImageComponentsForReady;