import React from 'react';

const TestCard = ({ data }) => {
    const { says, img, city, name } = data
    console.log(7 > 6 && 8 < 6 && 6 > 4)
    return (
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-xl ">
            <article className='text-black'>
                <p className="mt-4 ">{says}</p>
                <div className="flex items-center mt-8 ">
                    <img src={img} alt="" className="w-10 h-10 rounded-full mr-3 border-2 border-primary" />
                    <div>
                        <h3 className="text-sm font-medium">{name}</h3>
                        <p>{city} </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default TestCard;