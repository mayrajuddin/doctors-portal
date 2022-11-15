import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ScheduleCard from './ScheduleCard';
import BookingModal from '../BookingModal/BookingModal';

const Schedule = ({ selectedDay }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState({})
    useEffect(() => {
        fetch('treatment.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <section className='my-8'>
            <p className='text-primary capitalize text-xl text-center py-4'>you have selected  {format(selectedDay, 'PP')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-4 mt-4">
                {
                    services.map(service => <ScheduleCard key={service._id} service={service} setTreatment={setTreatment} />)
                }
            </div>
            <BookingModal treatment={treatment} selectedDay={selectedDay} />
        </section>
    );
};

export default Schedule;