import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col max-sm:gap-6 md:flex-row md:justify-between md:items-center px-6 2xl:px-20 py-6 mt-20 shadow-md'> 
        <div className='flex flex-col max-sm:items-center max-sm:gap-2 md:flex-row md:items-center md:gap-4'>
            <img className='h-8' src={assets.logo} alt="" />
            <h3 className='max-sm:hidden'>|</h3>
            <p className='text-gray-600 max-sm:text-center text-sm md:text-base'>© 2024 JobPortal. All rights reserved.</p>
        </div>
        <div className='flex gap-4 max-sm:justify-center'>
           <img className='h-6 cursor-pointer' src={assets.facebook_icon} alt="" />
            <img className='h-6 cursor-pointer' src={assets.twitter_icon} alt="" />
            <img className='h-6 cursor-pointer' src={assets.instagram_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer