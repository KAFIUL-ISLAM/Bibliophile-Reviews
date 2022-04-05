import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
    const { picture, name, ratings, about } = props.review;
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 justify-items-center items-center my-16 border shadow-md p-8'>
            <div className=''>
                <img className='rounded-full mx-auto' src={picture} alt="" style={{ width: '100px' }} />
                <h1 className='font-serif text-xl font-semibold' style={{ color: '#FF5A31' }}>{name}</h1>
            </div>
            <div className='col-span-4 text-slate-600 font-mono'>
                <q>{about}</q>
                <h6 className='text-xl mt-4'>Rating:
                    <span className='text-gray-400'>
                        <Rating
                            initialRating={ratings}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </span>
                    <span className='text-rose-600'>{ratings}/5</span>
                </h6>
            </div>
        </div>
    );
};

export default Review;