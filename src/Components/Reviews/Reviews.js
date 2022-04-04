import React from 'react';
import useReview from '../../Hook/useReview/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div>
            <h1 className='text-4xl text-slate-900 font-serif font-medium mt-16'>Top Reviews from Readers</h1>
            <div className='mx-16'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;