import React from 'react';
import Typed from 'react-typed';
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'
import { Fade } from 'react-reveal';

const Hero = () => {
    return (
        <main className='bg-[#2D2B3B]'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Fade top>
                        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="Sadik.jpg" />
                    </Fade>
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                            <Typed
                                strings={[
                                    'Hi, There!🙋‍♂',
                                    "I'm a Frontend Developer😊",
                                    "Scroll Down To Explore My Projects👇"
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </h1>
                        <p className='my-2 text-xl text-white font-bold'>Email: <span className='text-blue-500'>sadikhossain433@gmail.com</span></p>
                        <p className='my-2 text-xl text-white font-bold'>Whatsapp: <span className='text-blue-500'>+8801842593133</span></p>
                        <p className="mb-8 leading-relaxed text-white font-medium">Hello, My name is sadik. I'm a professional Frontend Developer. I'm very passionate to this work. I have been learning for 2 years. I also have done some projects.</p>
                        <div className="flex justify-center flex-col">
                            <div className='mb-6'>
                                <a href='https://drive.google.com/file/d/1Q7S_UgYm-cLmP2UkX7YwdesWCv77VBRH/view' target='_blank' rel="noreferrer" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download My Resume</a>
                            </div>
                            <div className='flex justify-center gap-5'>
                                <a href='https://github.com/sadikhossain69' target='_blank' rel="noreferrer" className='text-white text-4xl'><BsGithub /></a>
                                <a href="https://www.linkedin.com/in/sadik-hossain-520848237/" target='_blank' rel="noreferrer" className='text-white text-4xl'><BsLinkedin /></a>
                                <a href="https://www.facebook.com/profile.php?id=100075373803592" target='_blank' rel="noreferrer" className='text-white text-4xl'><BsFacebook /></a>
                                <a href="https://twitter.com/JoarderSadik" target='_blank' rel="noreferrer" className='text-white text-4xl'><BsTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;