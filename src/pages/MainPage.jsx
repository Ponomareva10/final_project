import React from 'react';
// import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import IsWork from '../components/IsWork/IsWork';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';
import SecondWelcome from '../components/SecondWelcome/SecondWelcome';

const MainPage = () => {
    return (
        <div>
            {/* <Redirect to="/auth"/> */}
            <Header />
            <Welcome />
            <Main />
            <IsWork />
            <Reviews />
            <SecondWelcome />
            <Footer /> 
        </div>
    );
};

export default MainPage;