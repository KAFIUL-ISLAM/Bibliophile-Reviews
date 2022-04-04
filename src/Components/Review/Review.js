import React from 'react';

const Review = (props) => {
    console.log(props)
    const { picture, name, ratings, about } = props.review;
    return (
        <div className='grid grid-cols-5 gap-4 justify-items-center items-center my-24'>
            <div>
                <img className='rounded-full mx-auto' src={picture} alt="" style={{ width: '100px' }} />
                <h1 className='font-serif text-xl text-pink-500 font-semibold'>{name}</h1>
            </div>
            <div className='col-span-4 font-mono'>
                <q>{about}</q>
                <h6 className='text-xl text-amber-600 mt-4'>Rating: {ratings}/5</h6>
            </div>
        </div>
    );
};

export default Review;