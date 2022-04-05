import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl text-slate-800 font-serif font-medium my-16'>Some Common QnA</h1>
            <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>What is Context API?</h4>
                <br />
                <p>
                    <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                    Normally in React, We passe data from parent element to down element by all level via props. It is inconvenient method for certain props that are required many components in react app. Here we can use Context. It pass values between components without passing props to every level of child components. Context has ability to communicate and share data at different level.
                </p>
            </div>
            <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>What is Semantic Tag?</h4>
                <br />
                <p>
                    <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                    Semantic Tag is basically some HTML element that clearly describe their meaning. It can accurately describe the purpose of  the element and type of content inside it. Semantic elements makes code easy to read and understand to human. It increases accessibility of code. So it offers a better user experience than old HTML elements.  
                </p>
            </div>
            <div className='text-left mt-10 mb-16 mx-24 font-serif text-slate-800'>
                <h4 className='text-lg font-semibold'><span className='text-2xl text-slate-500 font-bold'>Q: </span>What are the difference between inline, block and inline-block elements?</h4>
                <br />
                <div>
                    <span className='text-2xl text-slate-500 font-bold'>Ans: </span>
                    <table className='text-center mx-auto border-2 border-gray-400'>
                        <thead>
                            <tr className='border-2 border-gray-400'>
                                <th className='border-2 border-gray-400 p-6'>Inline</th>
                                <th className='border-2 border-gray-400 p-6'>Block</th>
                                <th className='border-2 border-gray-400 p-6'>Inline-block</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-2 border-gray-400'>
                                <td className='border-2 border-gray-400 p-6'>Displays as an element in its actual size with other elements in a line</td>
                                <td className='border-2 border-gray-400 p-6'>Displays as an element on a new line. It takes up the whole width available</td>
                                <td className='border-2 border-gray-400 p-6'>It display as an inline element but it's behavior is like block element</td>
                            </tr>
                            <tr className='border-2 border-gray-400'>
                                <td className='border-2 border-gray-400 p-6'>Height and Width properties will have no effect on those elements</td>
                                <td className='border-2 border-gray-400 p-6'>Height and Width will have effect on block elements</td>
                                <td className='border-2 border-gray-400 p-6'>Height and Width properties work on those elements</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;