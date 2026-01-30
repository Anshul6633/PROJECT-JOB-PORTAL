import { createContext } from 'react'
import { useState } from 'react'
export const AppContext = createContext(null)
import { useEffect } from 'react';
import { jobsData } from '../assets/assets';

// AppContextProvider - provides global state management for the job portal application
export const AppContextProvider = (props) => {
    // State for managing search filters (title and location)
    const [searchfilter,setSearchFilter]= useState({
        title:'',
        location:''}
    );
    // State to track if a search has been performed
    const[isSearched,setisSearched]= useState(false)
    // State for storing jobs data
    const[jobs,setJobs]= useState([])
    // State for controlling recruiter login popup visibility - FIXED: proper camelCase naming
    const[showRecruiterLogin,setShowRecruiterLogin]= useState(false);

    // Function to fetch jobs based on search filter (can be enhanced with API calls)
    const fetchJobs = async () => {
        setJobs(jobsData)
    }
    // Fetch jobs on component mount
    useEffect(() => {
        fetchJobs()
    },[])

    // Context value object containing all state and setters
    const value = {
        searchfilter,
        setSearchFilter,
        isSearched,
        setisSearched,
        jobs,
        setJobs,
        // Recruiter login state - properly named for consistent access across components
        showRecruiterLogin,
        setShowRecruiterLogin
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
