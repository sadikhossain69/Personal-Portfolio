import React from 'react';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {

    const { name, image, description, id, website, frontend } = project

    return (
        <>
            <Zoom >
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                            {name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='font-medium'>{description}</p>
                        <div className="card-actions justify-end">
                            {
                                frontend ?
                                    <button className='bg-green-600 text-white px-3 py-1 hover:bg-green-500 duration-300 ease-in-out hover:scale-110 rounded' ><a href={frontend} >Github Code</a></button>
                                    :
                                    <button className='bg-red-600 text-white px-3 py-1 hover:bg-red-500 duration-300 ease-in-out hover:scale-110 rounded' ><p >Currently the code is private</p></button>
                            }
                            <button className='bg-blue-600 text-white px-3 py-1 hover:bg-blue-500 duration-300 ease-in-out hover:scale-110 rounded' ><a href={website} >Live Site</a></button>
                        </div>
                    </div>
                </div>
            </Zoom>
        </>
    );
};

export default Project;