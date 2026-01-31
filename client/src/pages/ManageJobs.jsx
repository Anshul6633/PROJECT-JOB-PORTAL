import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ManageJobs = () => {
    const navigate = useNavigate();
  return (
    <div className='max-w-7xl mx-auto'>
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
            <h1 className='text-2xl font-bold text-gray-900 mb-4'>Manage Jobs</h1>
            <p className='text-gray-600'>View and manage your job postings here.</p>
            <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">Job Postings</h2>
                <table className="mt-4 w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 tracking-wider font-medium text-gray-500 uppercase">
                                Job Title
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 tracking-wider font-medium text-gray-500 uppercase">
                                Location
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 tracking-wider font-medium text-gray-500 uppercase">
                                Applicants
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm leading-4 tracking-wider font-medium text-gray-500 uppercase">
                                DATE OF POST
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200" />
                        </tr>
                    </thead>
                    <tbody>
                        {manageJobsData.map((job) => (
                            <tr key={job._id}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    {job.title}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    {job.location}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    {job.applicants}
                                </td>
                                <td
                                     className="px-6 py-4 whitespace-no-wrap border-b border-gray-200   bg-green-100 text-green-800">
                                        {moment(job.date).format('MMMM D, YYYY')}
                                    
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                </div>
                <div className='flex justify-end gap-4'>
                    <button onClick={()=>navigate('/dashboard')} className='flex justify-end mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shift to right'>Back</button> 
                    <button onClick={()=>navigate('/dashboard/add-job')} className='flex justify-end mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shift to right'>Add new job</button>
                </div>
                </div>
  )
}

export default ManageJobs