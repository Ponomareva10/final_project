import React from 'react';
import ReadyLook from '../components/ReadyLook/ReadyLook';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ImageComponentsForReady from '../components/ImageComponentsForReady/ImageComponentsForReady';

const ReadyLookPage = () => {
    return (
        <div>
            <Header />
            <ImageComponentsForReady />
            <ReadyLook/>
            <Footer/>
        </div>
    );
};

export default ReadyLookPage;