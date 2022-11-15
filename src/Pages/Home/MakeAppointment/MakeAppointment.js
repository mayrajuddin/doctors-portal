import React from 'react';
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className='py-6 mt-4'>
            <div className="hero border">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img src={doctor} className="max-w-md -mt-20" alt='' />
                    <div className='text-black'>
                        <h4 className="text-xl capitalize font-bold text-primary pb-2">appointment</h4>
                        <h4 className="text-2xl capitalize font-bold ">make an appointment today</h4>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;