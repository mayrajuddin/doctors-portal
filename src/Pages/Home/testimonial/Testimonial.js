import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import TestCard from './TestCard';
const Testimonial = () => {
    const clientSays = [
        {
            id: 1,
            says: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Winson Herry',
            city: 'california'
        },
        {
            id: 2,
            says: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'Winson Herry',
            city: 'california'
        },
        {
            id: 3,
            says: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Winson Herry',
            city: 'california'
        }
    ]
    return (
        <section className='my-6'>
            <div className='flex justify-between'>
                <div >
                    <h4 className="text-primary capitalize font-bold text-sm">Testimonial</h4>
                    <h3 className="text-2xl capitalize text-black">what our patients says</h3>
                </div>
                <img src={quote} alt="" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    clientSays.map(data => <TestCard key={data.id} data={data}></TestCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;