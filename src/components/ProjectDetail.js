import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {

    const [projectDetail, setProjectDetail] = useState({})

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://gentle-mountain-57996.herokuapp.com/projects/${id}`)
            .then(res => res.json())
            .then(data => {
                setProjectDetail(data);
            })
    }, [id])

    const { name, image_1, image_2, image_3, bullet_1, bullet_2, bullet_3, bullet_4, bullet_5, client_code, live_website, server_code } = projectDetail

    return (
        <section className='bg-white mt-5'>
            <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-red-500 text-red-500 mb-10'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5' >
                <img className='border rounded shadow' src={image_1} alt="" />
                <img className='border rounded shadow' src={image_2} alt="" />
                <img className='border rounded shadow' src={image_3} alt="" />
            </div>

            <div className='flex justify-center items-center mt-5'>
                <div className="card w-full md:w-1/2 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold mx-auto text-3xl">
                            {name}
                        </h2>
                        <p className='font-bold text-2xl'>Feactures:</p>
                        <p className='px-5 md:px-14'>
                            <ol>
                                <li className='list-disc font-medium'>{bullet_1}</li>
                                <li className='list-disc font-medium'>{bullet_2}</li>
                                <li className='list-disc font-medium'>{bullet_3}</li>
                                {bullet_4 && <li className='list-disc font-medium'>{bullet_4}</li>}
                                {bullet_5 && <li className='list-disc font-medium'>{bullet_5}</li>}
                            </ol>
                        </p>
                        <div className="card-actions justify-center">
                            <button className='bg-blue-600 text-white px-3 py-1 hover:bg-blue-500 duration-300 ease-in-out hover:scale-110 rounded' ><a href={live_website} target='_blank' rel="noreferrer">Live Website</a></button>
                            <button className='bg-green-600 text-white px-3 py-1 hover:bg-green-500 duration-300 ease-in-out hover:scale-110 rounded' ><a href={client_code} target='_blank' rel="noreferrer">Client Code</a></button>
                            {
                                server_code && <button className='bg-yellow-600 text-white px-3 py-1 hover:bg-yellow-500 duration-300 ease-in-out hover:scale-110 rounded' ><a href={server_code} target='_blank' rel="noreferrer">Server Code</a></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;