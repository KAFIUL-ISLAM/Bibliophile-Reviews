import React from 'react';
import useReview from '../../Hook/useReview/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div>
            <h1>This is reviews</h1>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;