import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useRef } from 'react'

export const Hero = () => {
    const{setSearchFilter,setisSearched}= useContext(AppContext);
    const titleref = useRef(null)
 const locationref = useRef (null)
 const onSearch=()=>{
    setSearchFilter({
        title:titleref.current.value,
        location:locationref.current.value
    });
    setisSearched(true);
   
    
 }


  return (
    <div className="container 2xl:px-20 mx-auto my-10 text-white text-center mx-2 rounded-xl">
        <div className="bg-gradient-to-r from-purple-800 to-purple-950 py-12">
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 1000+ Jobs Available</h2>
            <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>your next job is just a click away..search your dream job</p>
            <div className='flex flex-col sm:flex-row items-center justify-between bg-white rounded text-gray-600 max-w-xl mx-10 sm:mx-auto px-4 py-3 gap-3'>
                <div className='flex items-center gap-2 flex-1'>
                    <img src={assets.search_icon} alt="" />
                    <input type="text" placeholder='Search for jobs' className='text-sm p-2 rounded outline-none w-full' ref={titleref} />
                </div>
                <div className='flex items-center gap-2 flex-1'>
                    <img src={assets.location_icon} alt="" />
                    <input type="text" placeholder='Location' className='text-sm p-2 rounded outline-none w-full' ref={locationref} />
                </div>
                <button onClick={onSearch}         className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm'>Search</button>
            </div>
        </div>
        <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap items-center flex-1'> <p className='font-medium text-gray-600'
        >TRUSTED BY</p>
        <img className='h-6' src={assets.microsoft_logo} alt="" />
        <img className='h-6' src={assets.accenture_logo} alt="" />
        <img className='h-6' src={assets.amazon_logo} alt="" />
        <img className='h-6' src={assets.walmart_logo} alt="" />
        <img className='h-6' src={assets.adobe_logo} alt="" />
        <img className='h-6' src={assets.samsung_logo} alt="" />
        </div>
        </div>
            </div>
  )
}
