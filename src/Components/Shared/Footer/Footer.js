import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-6 text-black ">
            <div className="container grid grid-cols-1 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col gap-3">
                    <h2 className="font-medium uppercase text-[#939393]">service</h2>
                    <div className="flex flex-col text-md gap-2">
                        <Link to="#">Emergency Checkup</Link>
                        <Link to="#">Monthly Checkup</Link>
                        <Link to="#">Weekly Checkup</Link>
                        <Link to="#">Deep Checkup</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="font-medium uppercase text-[#939393]">oral health</h2>
                    <div className="flex flex-col text-md gap-2">
                        <Link to="#">Fluoride Treatment</Link>
                        <Link to="#">Cavity Filling</Link>
                        <Link to="#">Teath Whitening</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="font-medium uppercase text-[#939393]">our address</h2>
                    <div className="flex flex-col text-md gap-2">
                        <p className="capitalize">mirsarai, chattogram</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-md">
                <span className="">© Copyright All Rights Reserved. by <span className="font-bold uppercase text-primary">doctors portal</span></span>
            </div>
        </footer>
    );
};

export default Footer;