import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 mx-10 place-items-center'>
                <div className='p-12'>
                    <img className='rounded' src="/book.png" alt="The Alchemist-Paulo Coelho" />
                </div>
                <div className=''>
                    <h1 className='text-6xl font-bold'>This is the Title</h1>
                    <p className='text-lg font-semi-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut rem commodi, quo nobis omnis, praesentium quae quis consectetur cupiditate id doloribus eveniet. Aliquam alias consequuntur iusto omnis aspernatur nesciunt.</p>
                </div>
            </div>
            <div>
                <h1>Reviews</h1>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;