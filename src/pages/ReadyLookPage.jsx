import React from 'react';
import ReadyLook from '../components/ReadyLook/ReadyLook';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const ReadyLookPage = () => {
    return (
        <div>
            <Header />
            <ReadyLook/>
            <Footer/>
        </div>
    );
};

export default ReadyLookPage;