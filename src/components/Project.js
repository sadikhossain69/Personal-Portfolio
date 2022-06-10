import React from 'react';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {

    const { name, image_1, description, _id } = project

    return (
        <>
            <Zoom >
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={image_1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                            {name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-medium'>{description}</p>
                        <div className="card-actions justify-end">
                            <button className='bg-blue-600 text-white px-3 py-1 hover:bg-blue-500 duration-300 ease-in-out hover:scale-110 rounded' ><Link to={`projects/${_id}`} >See Detail</Link></button>
                        </div>
                    </div>
                </div>
            </Zoom>
        </>
    );
};

export default Project;