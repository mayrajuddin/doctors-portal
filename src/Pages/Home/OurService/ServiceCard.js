import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, details } = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-3">
            <figure>
                <img src={img} alt="" />
            </figure>
            <div className="card-body text-black text-center">
                <h2 className="font-bold text-lg capitalize text-center">{title}</h2>
                <p className=''>{details}</p>
            </div>
        </div>
    );
};

export default ServiceCard;