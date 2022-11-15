import React from 'react';
import tretment from '../../../assets/images/treatment.png'
const DentalCare = () => {
    return (
        <section className='py-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src={tretment} className="max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className='lg:px-9'>
                        <h1 className="text-5xl font-bold text-neutral ">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;