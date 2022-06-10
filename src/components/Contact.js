import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import Loading from './Loading';
import toast from 'react-hot-toast';
import { Flip } from 'react-reveal';

const Contact = () => {

    const [sendingLoading, setSendingLoading] = useState(false)

    const form = useRef();

    if (sendingLoading) {
        return <Loading />
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setSendingLoading(true)

        emailjs.sendForm('service_kpgu2qj', 'template_1w9zbrw', form.current, 'izhjd_XATNZhThYrx')
            .then((result) => {
                console.log(result.text);
                setSendingLoading(false)
                toast.success('Success To Send Email', { id: 'success' })
            }, (error) => {
                console.log(error.text);
                setSendingLoading(false)
                toast.error('Failed To Send Email', { id: 'failed' })
            });
        e.target.reset()
    };

    return (
        <Flip bottom >
            <section>
                <form ref={form} onSubmit={sendEmail}>
                    <section className="text-white body-font relative">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-12">
                                <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-blue-500 text-blue-500 mb-5'>Contact Me</h2>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
                                            <input type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-white font-medium">Email</label>
                                            <input type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                                            <textarea id="message" name="message" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </section>
        </Flip>
    );
};

export default Contact;