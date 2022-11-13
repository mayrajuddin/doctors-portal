import React from 'react';
import InfoCard from './InfoCard';
import img1 from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    const info = [
        {
            id: 1,
            title: 'opening houres',
            details: 'monday to thuresday 9am to 5 pm',
            bgClass: 'bg-primary',
            img: img1
        },
        {
            id: 2,
            title: 'visit ours location',
            details: 'mirsarai chattogram ',
            bgClass: 'bg-neutral',
            img: img2
        },
        {
            id: 3,
            title: 'contact now',
            details: '+8801628649295',
            bgClass: 'bg-primary',
            img: img3
        },
    ]
    return (
        <section className='my-8'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    info.map(card => <InfoCard key={card.id} info={card}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default InfoCards;