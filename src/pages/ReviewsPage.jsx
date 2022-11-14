import React from 'react';
import Header from '../components/Header/Header';
import ImageComponentsForReviews from '../components/ImageCompomentForReviews/ImageComponentsForReviews';
import Reviews2 from '../components/Reviews2/Reviews2';
import Footer from '../components/Footer/Footer';

const ReviewsPage = () => {
    return (
        <div>
            <Header />
            <ImageComponentsForReviews />
            <Reviews2 />
            <Footer />
        </div>
    );
};

export default ReviewsPage;