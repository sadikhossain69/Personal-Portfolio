import React from 'react';

const About = () => {
    return (
        <section>
            <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-yellow-500 text-yellow-500'>About Me</h2>
            <section className="text-gray-400  body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                        <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/Jr3Lv9N/sadiks-1.jpg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hello, My name is sadik.
                        </h1>
                        <p className="mb-8 leading-relaxed text-white font-medium text-base">
                        I'm a professional Frontend Developer. I'm very passionate to this work. I have been learning for 1 year. I also have done some projects. My first responsibility is satisfying my client My  My goal is to become a Software Engineer. Now I'm learning express js, next js and react native. My hobby is playing video games like Grand Theft Auto, Dying Light 2, Apex Legend and many more.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;