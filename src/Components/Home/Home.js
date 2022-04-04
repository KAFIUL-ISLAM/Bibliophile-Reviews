import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReview from '../../Hook/useReview/useReview';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReview();

    const navigate = useNavigate();

    return (
        <div className='mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 place-items-center'>
                <div className='p-12'>
                    <img className='rounded' src="/book.png" alt="The Alchemist-Paulo Coelho" />
                </div>
                <div className=''>
                    <h1 className='text-6xl font-bold mb-8' style={{ color: '#FF5A31'}}>This is the Title</h1>
                    <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut rem commodi, quo nobis omnis, praesentium quae quis consectetur cupiditate id doloribus eveniet. Aliquam alias consequuntur iusto omnis aspernatur nesciunt.</p>
                    <button target="_blank" className='mt-10 text-white font-medium px-8 py-4 rounded-md' style={{ backgroundColor: '#FF5A31' }}>Buy Now</button>
                </div>
            </div>
            <div className='mx-36 my-20'>
                <h1 className='text-5xl text-slate-900 font-serif font-medium'>Reviews</h1>
                <div>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                   } 
                </div>
            </div>
            <button onClick={()=> navigate('/reviews')} className='bg-rose-600 text-white font-medium px-8 py-4 rounded-md'> See All Reviews</button>
        </div>
    );
};

export default Home;