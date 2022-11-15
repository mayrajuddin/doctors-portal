import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Schedule from '../Schedule/Schedule';

const Appointment = () => {
    const [selectedDay, setSelectedDay] = useState(new Date())
    return (
        <div>
            <AppointmentBanner selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            <Schedule selectedDay={selectedDay} />
        </div>
    );
};

export default Appointment;