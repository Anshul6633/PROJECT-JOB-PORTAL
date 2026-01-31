import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'
import quill from 'quill';

const ViewApplications = () => {
  return (
    <div className="container mx-auto p-4">
        <div>
            <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
                <thead className="bg-gray-100">
                    <tr className="border-b">
                        <th className="py-2 px-4 text-left font-semibold">#</th>
                        <th className="py-2 px-4 text-left font-semibold">Username</th>
                        <th className="py-2 px-4 text-left font-semibold" >Job Title</th>
                        <th className="py-2 px-4 text-left font-semibold">Location</th>
                        <th className="py-2 px-4 text-left font-semibold">Resume</th>
                        <th className="py-2 px-4 text-left font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                  {viewApplicationsPageData.map((application, index) => (
                    <tr key={application.id} className="border-b">
                       <td>{index + 1}</td>
                       <td>
                        <img src={assets.profile_img} alt="" className="w-8 h-8 mr-2" />
                        <span>{application.name}</span>
                       </td>
                       <td>{application.jobTitle}</td>
                       <td>{application.location}</td>
                       <td>
                        <a href="" target='_BLANK'
                        className='bg-blue-50 text-blue-400 px-3 py-1 rounded  inline-flex gap-2 items-center'>
                            Resume
                             <img className='w-4 h-4' src={assets.resume_download_icon} alt="" />

                        </a>
                        
                       </td>
                       <td className='py-2 px-4 relative'>
                        <div className='relative inline -block text-left group'>
                            <button className='text-black-200 action-button '>...</button>
                            <div className='z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block'>
                                <button className='block w-full  text-left px-4 py-2 text-blue-500 hover:bg-gray-100'>
                                   Accept </button>
                                   <button className='block w-full  text-left px-4 py-2 text-red-500 hover:bg-gray-100'>Reject</button>
                            </div>
                        </div>

                       </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewApplications