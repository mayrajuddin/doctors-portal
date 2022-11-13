import React from 'react';

const InfoCard = ({ info }) => {
    const { title, details, bgClass, img } = info
    return (
        <div className={`card card-side bg-base-100 shadow-xl p-5 ${bgClass} `}>
            <figure>
                <img src={img} alt="" className='' />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title capitalize"> {title} </h2>
                <p className='capitalize'>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;