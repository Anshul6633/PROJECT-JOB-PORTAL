import React from 'react'
import Navbar from '../components/Navbar';

import { Outlet, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Professional Navbar */}
        <nav className='bg-white shadow-lg border-b border-gray-200'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo Section */}
                    <div className='flex items-center'>
                        <img className='h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200' src={assets.logo} alt="Company Logo" />
                    </div>

                    {/* Right Section */}
                    <div className='flex items-center space-x-4'>
                        {/* Welcome Message */}
                        <div className='hidden md:flex items-center space-x-2'>
                            <span className='text-gray-700 font-medium'>Welcome back,</span>
                            <span className='text-blue-600 font-semibold'>Recruiter</span>
                        </div>

                        {/* Profile Dropdown */}
                        <div className='relative group'>
                            <button className='flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                                <img
                                    className='w-8 h-8 border-2 border-gray-200 rounded-full object-cover hover:border-blue-400 transition-colors duration-200'
                                    src={assets.company_icon}
                                    alt="Profile"
                                />
                                <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50'>
                                <div className='py-2'>
                                    <div className='px-4 py-3 border-b border-gray-100'>
                                        <p className='text-sm font-medium text-gray-900'>Recruiter Account</p>
                                        <p className='text-sm text-gray-500'>Manage your profile</p>
                                    </div>
                                    <a href="#" className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-150'>
                                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Profile Settings
                                    </a>
                                    <a href="#" className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-150'>
                                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Sign Out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className='flex items-start'>
            {/* Professional Left Sidebar Navigation */}
            <aside className='w-64 bg-white shadow-lg border-r border-gray-200 min-h-[calc(100vh-4rem)]'>
                <div className='p-6'>
                    <h2 className='text-lg font-semibold text-gray-900 mb-6'>Dashboard</h2>

                    <nav className='space-y-2'>
                         {/* Add Job */}
                        <NavLink
                            to="/dashboard/add-job"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 group ${
                                    isActive
                                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }`
                            }
                        >
                            <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span className='font-medium'>Add Job</span>
                        </NavLink>
                        {/* Manage Jobs */}
                        <NavLink
                            to="/dashboard/manage-jobs"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 group ${
                                    isActive
                                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }`
                            }
                        >
                            <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className='font-medium'>Manage Jobs</span>
                        </NavLink>

                       

                        {/* View Applications */}
                        <NavLink
                            to="/dashboard/view-applications"
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 group ${
                                    isActive
                                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }`
                            }
                        >
                            <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className='font-medium'>View Applications</span>
                        </NavLink>

                        {/* Analytics/Stats (Optional enhancement) */}
                        <div className='pt-4 border-t border-gray-200 mt-6'>
                            <NavLink
                                to="/dashboard/analytics"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 group ${
                                        isActive
                                            ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                    }`
                                }
                            >
                                <svg className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span className='font-medium'>Analytics</span>
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className='flex-1 p-8'>
                <Outlet />
            </main>
        </div>
   
    
    </div>
  )
}

export default Dashboard