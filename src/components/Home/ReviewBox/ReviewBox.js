import React from 'react';
import './ReviewBox.css';

const ReviewBox = ({ reviewDetails }) => {

    const { user, review, image } = reviewDetails;

    return (
        <div className='col-lg-4 col-md-6'>
            <div className="px-2 py-3 text-center">
                <img src={image} className='review-user-img' alt="review user" />
                <h5 className='primary-color-text pt-4 pb-2 review-user'>{user}</h5>
                <p className='secondary-text review-text'>{review}</p>
            </div>
        </div>
    );
};

export default ReviewBox;