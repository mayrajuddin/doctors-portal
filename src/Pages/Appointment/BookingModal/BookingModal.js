import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDay }) => {
    const { slots, name } = treatment
    const date = format(selectedDay, 'PP')
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='my-9 grid grid-cols-1 gap-4'>
                        <input type="text" value={date} className='input input-bordered w-full disabled:bg-[#E6E6E6] border-0 disabled:text-black' disabled />
                        <select className="select select-bordered w-full bg-[#E6E6E6]">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder='your name' className='input input-bordered w-full' />
                        <input type="email" name="email" placeholder='Email Address' className='input input-bordered w-full' />
                        <input type="submit" value="Submit" className='btn btn-primary w-full text-white' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;