import React from 'react';

const ContactUs = () => {
    return (
        <section className="py-8">
            <div className='bg-black'>
                <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow  ng-untouched ng-pristine ng-valid text-black">
                    <h2 className="text-center text-xl text-primary font-bold leading-tight">Contact us</h2>
                    <h3 className="text-3xl capitalize text-white text-center"> stay connected with us</h3>
                    <div>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <input id="name" type="text" placeholder="Subject" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary w-full text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;