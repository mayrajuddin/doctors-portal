import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import InfoCards from '../Info/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../OurService/Service';
import Testimonial from '../testimonial/Testimonial';
import DentalCare from '../DentalCare/DentalCare';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Service></Service>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;