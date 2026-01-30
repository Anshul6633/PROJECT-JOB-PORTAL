import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { assets, jobsData } from '../assets/assets.js'
import Loading from '../components/Loading.jsx'
import Navbar from '../components/Navbar.jsx' 
import moment from 'moment'
import JobCard from '../components/JobCard.jsx'
import Footer from '../components/Footer.jsx'

const ApplyJob = () => {
  const {id} = useParams();
  const[JobData,setJobData]= useState(null);
  const{jobs}= useContext(AppContext);
  const fetchjob = async() =>{
    const data= jobs.filter((job)=> job._id===id);
    if(data.length!==0){
      setJobData(data[0]);
      console.log(data[0]);
    }
  }
  useEffect(() =>{
    if(jobs.length>0){
    fetchjob();
    }
  },[id,jobs]);

  return JobData ? (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container px-4 2xl:px-20 mx-auto px-6 py-8">
        <div className="  bg-green-50 border-2 border-blue-200  shadow rounded-lg p-15">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img className="w-24 h-24 object-contain" src={JobData?.companyId.image} alt="" />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h1 className="text-2xl font-semibold mb-2">{JobData?.title}</h1>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-2">
                      <img className="h-4" src={assets.suitcase_icon} alt="" />
                      {JobData?.companyId.name}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <img className="h-4" src={assets.location_icon} alt="" />
                      {JobData?.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <img className="h-4" src={assets.person_icon} alt="" />
                      {JobData?.level}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <img className="h-4" src={assets.money_icon} alt="" />
                      CTC: {JobData?.salary}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-8 md:mt-6.5 md:ml-10 flex-shrink-0">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Apply Now</button>
                  <p>Posted {moment(JobData?.createdAt).fromNow()} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
          <div className="w-full lg:w-2/3 mt-8 bg-white p-8 rounded-lg shadow-md">
            {/* Job Description */}
            <div className="mb-8">
              <h2 className='font-bold text-3xl mb-4 text-gray-900 border-b-2 border-blue-400 pb-3'>Job Description</h2>
              <div className="text-gray-700 leading-8 text-base space-y-3" dangerouslySetInnerHTML={{__html:JobData?.description}}></div>
            </div>

            {/* Key Responsibilities Section */}
           

            {/* Key Requirements Section */}
           
            <button className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">Apply Now</button>
          </div>

          {/* Right Side - More Jobs */}
          <div className="w-full lg:w-1/3 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
              <h3 className="font-bold text-2xl mb-6 text-gray-900 border-b-2 border-blue-400 pb-3">
                More Jobs from<br /><span className="text-blue-600">{JobData?.companyId.name}</span>
              </h3>
              <div className="space-y-4">
                {jobs.filter((job) => job.companyId._id === JobData?.companyId._id && job._id !== JobData._id).slice(0, 4).map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer />  
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <Loading />
    </div>
  );

};

export default ApplyJob;