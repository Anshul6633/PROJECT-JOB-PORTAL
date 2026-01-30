import React from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from "./JobCard";
import { useEffect as useeffect } from 'react';



export const JobListing = () => {
    const{isSearched,searchfilter,setisSearched,setSearchFilter,jobs}= useContext(AppContext);
    const [showFilters, setShowFilters] = useState(false);
    const[currentPage,setCurrentPage]= useState(1);
    const[selectedCategories,setSelectedCategories]= useState([]);
    const[selectedLocations,setSelectedLocations]= useState([]);
    const[filteredJobs,setFilteredJobs]= useState(jobs);
    const handlecategoryChange = (category) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((cat) => cat !== category)
                : [...prevCategories, category]
        );
    };
    const handleLocationChange = (location) => {
        setSelectedLocations((prevLocations) =>
            prevLocations.includes(location)
                ? prevLocations.filter((loc) => loc !== location)
                : [...prevLocations, location]
        );
    };
    useeffect(() => {
        const matchescategory = (job) => selectedCategories.length === 0 || selectedCategories.includes(job.category);
        const matchesLocation = (job) => selectedLocations.length === 0 || selectedLocations.includes(job.location);
        const matchestitle = (job) => searchfilter.title === '' || job.title.toLowerCase().includes(searchfilter.title.toLowerCase());
        const matchesSearchLocation =(job)=>searchfilter.location===""|| job.location.toLowerCase().includes(searchfilter.location.toLowerCase()); 
        const newFilteredJobs = jobs.filter((job) => matchescategory(job) && matchesLocation(job) && matchestitle(job) && matchesSearchLocation(job));

        setFilteredJobs(newFilteredJobs);
        setCurrentPage(1); // Reset to first page on filter change
    },[jobs,selectedCategories,selectedLocations,searchfilter]);

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 gap-8 items-start'>
{/*sidebar filter and job listings to be implemented here*/}
    <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-1/4 bg-white px-4 lg:sticky lg:top-8 lg:h-fit rounded-lg border lg:border-gray-200`}>
    
 {/*search filter from hero component to be used here to filter job listings*/}
 {
    isSearched && (searchfilter.title !== '' || searchfilter.location !== '') && (
        <>
           <h3      className='text-lg font-medium mb-4'>current search filters:</h3>
           <div className='mb-4 text-gray-600 '>
             {searchfilter.title && (
                <span className='inline-flex items-center gap-2.5 px-3 py-1.5 mr-2 bg-gray-200 rounded-full text-sm'>
                    {searchfilter.title}
                    <img onClick={() => setSearchFilter({...searchfilter, title: ''})} className='cursor-pointer' src={assets.cross_icon} alt=''      />
                </span>
             )}
             {searchfilter.location && (
                <span  className=  ' inline-flex items-center gap-2.5 px-3 py-1.5 mr-2 bg-gray-200 rounded-full text-sm'>
                    {searchfilter.location}
                     <img onClick={() => setSearchFilter({...searchfilter, location: ''})} className='cursor-pointer' src={assets.cross_icon} alt=''      />
                </span>
             )}
           </div>
        </>
    )
 }
 {/*category filter to be implemented here*/}
 <div className='mt-6'>
    <h4 className='text-md font-medium mb-3'>Search by Category</h4>
    <ul className='space-y-2'>
        {
            JobCategories.map((category, index) => (
                <li key={index}>
                    <label className='inline-flex items-center gap-2 text-sm text-gray-700'>
                        <input type="checkbox"
                          onChange={()=> handlecategoryChange(category)}
                         checked={selectedCategories.includes(category)} className='w-4 h-4' />
                        <span>{category}</span>
                    </label>
                </li>
            ))
        }
    </ul>
 </div>
 {/*location filter to be implemented here*/}
 <div className='mt-6'>
    <h4 className='text-md font-medium mb-3'>Search by Location</h4>
    <ul className='space-y-2'>
        {
            JobLocations.map((location,index) => (
                <li key={index}>
                    <label className='inline-flex items-center gap-2 text-sm text-gray-700'>
                        <input type="checkbox"
                         onChange={()=> handleLocationChange(location)}
                         checked={selectedLocations.includes(location)}
                          className='w-4 h-4' />
                        <span>{location}</span>
                    </label>
                </li>
            ))
        }
    </ul>
 </div>
    </div>
    {/*job listings to be implemented here*/}
    <section  className='w-full lg:w-3/4 text-gray-600 max-lg:px-4'>
        <button onClick={() => setShowFilters(!showFilters)} className='lg:hidden mb-4 px-4 py-2 bg-white-600 text-black rounded'>
            {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <h3 className='font-medium text-3xl py-2' id='job-list'>Job Listings</h3>
        <p className='mb-8'>your next job is just a click away..search your dream job now</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4'>
                {filteredJobs.slice((currentPage-1)*6,currentPage*6).map((jobs,index) => (
                    <JobCard job={jobs}    key={index} />
                ))}
        </div>
        {/*pagination to be implemented here*/}
        {filteredJobs.length>0 &&(
            <div className='flex justify-center items-center space-x-2 mt-10'>
                <a  href=" #job-list">
                <img onClick={ ()=>setCurrentPage(Math.max(currentPage-1,1))} src={assets.left_arrow_icon} alt="" /></a>
                {Array.from({length:Math.ceil(filteredJobs.length/6)}).map((_,index)=>(
                <a key={index} href="#job-list">
                    <button onClick={()=>setCurrentPage(index+1)} className={`w-10 h-10 flex items-center justify-center rounded transition-all duration-300 ease-in-out ${currentPage === index+1 ? 'bg-blue-400 text-white scale-110' : 'text-gray-600 border border-gray-200'}`}>{index+1}</button>
                       
                        </a>
                ))
                }  <a href=" #job-list">
                <img onClick={()=>setCurrentPage(Math.min(currentPage+1,Math.ceil(filteredJobs.length/6)))} src={assets.right_arrow_icon} alt="" /></a>
                
            </div>
        )}

    </section>
    </div>
  )
}
