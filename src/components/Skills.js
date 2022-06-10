import React from 'react';
import { Fade } from 'react-reveal';

const Skills = () => {
    return (
        <section className='my-10'>
            <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-green-500 text-green-500 mb-10'>My Skills</h2>
            <div className='grid grid-cols-1 gap-5 md:px-40'>
                <div>
                    <h2 className='text-3xl font-bold text-white'>Expertise:</h2>
                    <p className='space-x-3 space-y-1 my-2 text-green-500'>
                        {/* 
                        
                        
                        
                        
                        
                         */}
                        <Fade right >
                            <div className="badge badge-outline font-medium">Html</div>
                        </Fade>
                        <Fade right >
                            <div className="badge badge-outline font-medium">Css</div>
                        </Fade>
                        <Fade right >
                            <div className="badge badge-outline font-medium">Tailwind Css</div>
                        </Fade>
                        <Fade right >
                            <div className="badge badge-outline font-medium">Bootstrap 5</div>
                        </Fade>
                        <Fade right >
                            <div className="badge badge-outline font-medium">Javascript</div>
                        </Fade>
                        <Fade right >
                            <div className="badge badge-outline font-medium">React</div>
                        </Fade>
                        <Fade right >
                            <div className="badge badge-outline font-medium">React Router</div>
                        </Fade>
                        <Fade right >
                            <div className="badge badge-outline font-medium">Daisy Ui</div>
                        </Fade>
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-white'>Comfortable:</h2>
                    <p className='space-x-3 space-y-1 my-2 text-green-500'>
                        <Fade left>
                            <div className="badge badge-outline font-medium">Express</div>
                        </Fade>
                        <Fade left>
                            <div className="badge badge-outline font-medium">MongoDB</div>
                        </Fade>
                        <Fade left>
                            <div className="badge badge-outline font-medium">Payment Gateway
                            </div>
                        </Fade>
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-white'>Familiar:</h2>
                    <p className='space-x-3 space-y-1 my-2 text-green-500'>
                        <Fade big >
                            <div className="badge badge-outline font-medium">React Native</div>
                        </Fade>
                        <Fade big >
                            <div className="badge badge-outline font-medium">Next Js</div>
                        </Fade>
                        <Fade big >
                            <div className="badge badge-outline font-medium">Material Ui</div>
                        </Fade>
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-white'>Tools: </h2>
                    <p className='space-x-3 space-y-1 my-2 text-green-500'>
                        <Fade bottom >
                            <div className="badge badge-outline font-medium">Github</div>
                        </Fade>
                        <Fade bottom >
                            <div className="badge badge-outline font-medium">Vs Code</div>
                        </Fade>
                        <Fade bottom >
                            <div className="badge badge-outline font-medium">Heroku</div>
                        </Fade>
                        <Fade bottom >
                            <div className="badge badge-outline font-medium">Firebase Authentication</div>
                        </Fade>
                        <Fade bottom >
                            <div className="badge badge-outline font-medium">Chrome Dev Tool</div>
                        </Fade>
                        <Fade bottom >
                            <div className="badge badge-outline font-medium">Netlify</div>
                        </Fade>
                        <Fade bottom >
                            <div className="badge badge-outline font-medium">Postman</div>
                        </Fade>
                        <Fade bottom >
                            <div className="badge badge-outline font-medium">Figma</div>
                        </Fade>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;