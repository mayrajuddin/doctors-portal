import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import InfoCards from '../Info/InfoCards';
import Service from '../OurService/Service';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Service></Service>
        </div>
    );
};

export default Home;