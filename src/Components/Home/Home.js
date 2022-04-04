import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hook/useReview/useReview';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReview();

    const navigate = useNavigate();

    return (
        <div className='mb-16'>
            <div className='grid grid-cols-2 gap-4 mx-10 place-items-center'>
                <div className='p-12'>
                    <img className='rounded' src="/book.png" alt="The Alchemist-Paulo Coelho" />
                </div>
                <div className=''>
                    <h1 className='text-6xl font-bold'>This is the Title</h1>
                    <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut rem commodi, quo nobis omnis, praesentium quae quis consectetur cupiditate id doloribus eveniet. Aliquam alias consequuntur iusto omnis aspernatur nesciunt.</p>
                </div>
            </div>
            <div className='mx-36 my-16'>
                <h1 className='text-4xl font-medium mb-6'>Reviews</h1>
                <div>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                   } 
                </div>
            </div>
            <button onClick={()=> navigate('/reviews')} className='bg-rose-600 text-white px-8 py-4 rounded-md'> Go to review page</button>
        </div>
    );
};

export default Home;