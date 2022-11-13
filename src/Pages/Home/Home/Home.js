import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import InfoCards from '../Info/InfoCards';
import Service from '../OurService/Service';
import Testimonial from '../testimonial/Testimonial';
import DentalCare from './DentalCare/DentalCare';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Service></Service>
            <DentalCare></DentalCare>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;