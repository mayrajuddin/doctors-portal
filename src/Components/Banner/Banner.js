import React from 'react';
import bannerImg from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')] ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="max-w-md rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;