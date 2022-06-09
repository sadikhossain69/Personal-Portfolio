import React from 'react';

const Skills = () => {
    return (
        <section className='my-10'>
            <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-green-500 text-green-500 mb-10'>My Skills</h2>
            <div className='grid grid-cols-1 gap-5 md:px-40'>
                <div>
                    <h2 className='text-3xl font-bold text-white'>Expertise:</h2>
                    <p className='space-x-3 space-y-1 my-2 text-green-500'>
                        <div className="badge badge-outline font-medium">Html</div>
                        <div className="badge badge-outline font-medium">Css</div>
                        <div className="badge badge-outline font-medium">Tailwind Css</div>
                        <div className="badge badge-outline font-medium">Bootstrap 5</div>
                        <div className="badge badge-outline font-medium">Javascript</div>
                        <div className="badge badge-outline font-medium">React</div>
                        <div className="badge badge-outline font-medium">React Router</div>
                        <div className="badge badge-outline font-medium">Daisy Ui</div>
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-white'>Comfortable:</h2>
                    <p className='space-x-3 space-y-1 my-2 text-green-500'>
                        <div className="badge badge-outline font-medium">Express</div>
                        <div className="badge badge-outline font-medium">MongoDB</div>
                        <div className="badge badge-outline font-medium">Payment Gateway</div>
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-white'>Familiar:</h2>
                    <p className='space-x-3 space-y-1 my-2 text-green-500'>
                        <div className="badge badge-outline font-medium">React Native</div>
                        <div className="badge badge-outline font-medium">Next Js</div>
                        <div className="badge badge-outline font-medium">Material Ui</div>
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-white'>Tools: </h2>
                    <p className='space-x-3 space-y-1 my-2 text-green-500'>
                        <div className="badge badge-outline font-medium">Github</div>
                        <div className="badge badge-outline font-medium">Vs Code</div>
                        <div className="badge badge-outline font-medium">Heroku</div>
                        <div className="badge badge-outline font-medium">Firebase Authentication</div>
                        <div className="badge badge-outline font-medium">Chrome Dev Tool</div>
                        <div className="badge badge-outline font-medium">Netlify</div>
                        <div className="badge badge-outline font-medium">Postman</div>
                        <div className="badge badge-outline font-medium">Figma</div>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;