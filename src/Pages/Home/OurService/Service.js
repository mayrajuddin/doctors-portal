import React from 'react';
import img1 from '../../../assets/images/cavity.png'
import img2 from '../../../assets/images/whitening.png'
import img3 from '../../../assets/images/fluoride.png'
import ServiceCard from './ServiceCard';

const Service = () => {
    const serviceDetails = [
        {
            id: 1,
            title: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: img1
        },
        {
            id: 2,
            title: 'visit ours location',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
            img: img2
        },
        {
            id: 3,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: img3
        },
    ]
    return (
        <section className='my-8'>
            <h3 className="text-xl capitalize text-primary font-bold text-center"> our service </h3>
            <h2 className="text-3xl capitalize text-black text-center"> service we provide </h2>
            <div className="grid md:grid-cols-3 pt-9 gap-4">
                {
                    serviceDetails.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Service;