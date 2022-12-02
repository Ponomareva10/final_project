import React from 'react';
import s from './style.module.scss';
// import imageCard from '../../image/bag2.png';

const ImageItem = ({item}) => {

    return (
        <div className={s.image}>
            <img className={s.image__picture} src={item.picture} alt='product' />
        </div>
    );
};

export default ImageItem;