import React from 'react';
import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.webp'

const Projects = () => {
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={project1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                            Manufacture Website
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <a href="">Hello</a>
                        </div>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={project2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={project3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;