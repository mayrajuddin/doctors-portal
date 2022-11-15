import React, { } from 'react';
import bannerImg from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDay, setSelectedDay }) => {

    return (
        <section>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-9">
                    <img src={bannerImg} className="max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className='px-5 text-black'>

                        <DayPicker
                            mode="single"
                            selected={selectedDay}
                            onSelect={setSelectedDay}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;