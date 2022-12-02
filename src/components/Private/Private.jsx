import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage';

const PrivatePage = ({children, isRequired, redirectLink}) => {

    if (!isRequired) return <Navigate to={redirectLink} replace={true} />

    return children
};

export default PrivatePage;