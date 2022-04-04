import React from 'react';

const Review = (props) => {
    console.log(props)
    const { picture, name, ratings ,about } = props.review;
    return (
        <div className='flex'>
            <div>
                <img src={picture} alt="" />
                <h1>{name}</h1>
            </div>
            <div>
                <p>{about}</p>
                <h6>{ratings}</h6>
            </div>
        </div>
    );
};

export default Review;