import React from 'react'
import Navbar from '../components/Navbar';
import { assets, jobsApplied } from '../assets/assets.js'
import moment from 'moment';
import Footer from '../components/Footer.jsx';

// Applications component - displays user's job applications and resume management
const Applications = () => {
  // State for managing resume editing mode
  const [isediting,setIsediting]=React.useState(false);
  // State for storing uploaded resume file
  const[resume,setResume]=React.useState(null);
  return (
    <>
    <Navbar/>
    <div className="container px-4 2xl:px-20 mx-auto my-10">
      <h2 className="text-xl font-semibold "> YOUR RESUME</h2>
      <div className='flex gap-2 mb-6 mt-3'>
        {
          isediting ? <>
          {/* Resume upload interface when in editing mode */}
          <label htmlFor='resumeUpload'className='flex items-center gap-2 cursor-pointer'>
            <p className='bg-blue-100 text-blue-600 px-3 py-1 rounded'> Upload your Resume:</p>
            <input id='resumeUpload'  onChange={(e)=> setResume(e.target.files[0])} accept='application/pdf'type='file' hidden></input>
            <img className="w-8 h-8 " src={assets.profile_upload_icon} alt=""  />
          </label>
          <button onClick={()=>setIsediting(false)} className='bg-gray-100 text-black px-3 py-1 rounded'>SAVE</button>

          </>
          :
          <div className='flex gap-2'>
            {/* Resume display and edit button when not in editing mode */}
            <a className="bg-blue-100 text-blue-600 px-3 py-1 rounded" href="#" > Resume</a>
            <button onClick={()=> setIsediting(true)} className="bg-gray-100 text-black px-3 py-1 rounded"> Edit </button>

            </div>
        }

      </div>
      <h2 className='text-xl font-semibold mb-4'>jobs Applied</h2>
      {/* Enhanced table with improved styling, hover effects, and alternating row colors */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Table header with gray background and improved typography */}
        <thead className="bg-gray-50">
          <tr>
            <th className='py-4 px-6 border-b border-gray-200 text-left font-semibold text-gray-700'>Company</th>
            <th className='py-4 px-6 border-b border-gray-200 text-left font-semibold text-gray-700'>Job Title</th>
            <th className='py-4 px-6 border-b border-gray-200 text-left font-semibold text-gray-700 max-sm:hidden'>Location</th>
            <th className='py-4 px-6 border-b border-gray-200 text-left font-semibold text-gray-700 max-sm:hidden'>Date</th>
            <th className='py-4 px-6 border-b border-gray-200 text-left font-semibold text-gray-700'>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobsApplied.map((job,index)=> true ?(
            <tr key={index} className={`hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
              {/* Company cell with logo and improved spacing */}
              <td className='py-4 px-6 border-b border-gray-200 flex items-center'><img className='h-8 w-8 mr-3 rounded' src={job.logo} alt="" />
              {job.company}</td>

              {/* Job title with enhanced typography */}
              <td className='py-4 px-6 border-b border-gray-200 font-medium text-gray-900'>{job.title}</td>
              {/* Location - hidden on small screens for responsiveness */}
              <td className='py-4 px-6 border-b border-gray-200 text-gray-600 max-sm:hidden'>{job.location}</td>
              {/* Date formatted using moment.js */}
              <td className='py-4 px-6 border-b border-gray-200 text-gray-600 max-sm:hidden'>{moment(job.date).format('DD-MM-YYYY')}</td>
              {/* Status with color-coded badges */}
              <td className='py-4 px-6 border-b border-gray-200'>
                <span className= {`px-3 py-1 rounded-full text-sm font-medium ${
                  job.status==='Pending' ? 'bg-yellow-100 text-yellow-800' :
                  job.status==='Accepted' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                   {job.status}
                </span>
               </td>
            </tr>
          ):null)}
        </tbody>
      </table>

    </div>
    <Footer/>
    </>
  )
}

export default Applications;