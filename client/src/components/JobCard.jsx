import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const JobCard = ({job}) => {
  const navigate= useNavigate();
  return (
    <div className='border p-6 shadow rounded'>
        <div className='flex justify-between items-center mb-4'>
            <img className ='h-8' src={assets.company_icon} alt="" />
        </div>
        <h4 className='font-medium texl-xl mt-2' >{job.title}</h4>
        <div className='flex item-center gap-3 mt-2 text-xs'>
        <span className='bg-blue-50 border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
        <span className='bg-red-50 border-red-200 px-4 py-1.5 rounded '>{job.level} </span>
    </div>
    <p className='text-gray-600 text-sm mt-4 leading-relaxed font-light line-clamp-3' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
    <div className='mt-4 gap-1.5 text-sm lg:auto'>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className='bg-blue-600 text-white px-4 py-2 rounded'>Apply Now</button>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className='ml-2 bg-gray-200 text-gray-800 px-4 py-2 rounded'>Learn More!</button>
    </div>  
    </div>
  )
}

export default JobCard;