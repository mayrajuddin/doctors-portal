import React from 'react';

const ScheduleCard = ({ service, setTreatment }) => {
    const { slots, name } = service
    return (
        <div className="card text-primary-content shadow-xl py-3 px-4 text-center">
            <div className="card-body">
                <h2 className="text-lg font-bold">{name} </h2>
                <p className='capitalize text-md'>{slots.length > 0 ? slots[0] : 'try another day'} </p>
                <p className='capitalize text-md'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available </p>
                <div className="text-center">
                    <label onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary" disabled={slots.length < 1} >book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;