import React from 'react'
import { Route,Routes } from 'react-router-dom'

import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import ManageJobs from './pages/ManageJobs'
import AddJobs from './pages/AddJobs'
import ViewApplications from './pages/ViewApplications'

import Home from './pages/home'
import Dashboard from './pages/Dashboard'
import RecruiterLogin from './components/RecruiterLogin'
import { useContext } from 'react'
import { AppContext } from './context/AppContext.jsx'


// Main App component - handles routing and global modal rendering
export const App = () => {
  // Access recruiter login modal state from global context
  const{showRecruiterLogin}= useContext(AppContext);
  return (
    <div>
      {/* Conditionally render recruiter login modal when showRecruiterLogin is true */}
      {/* This modal appears as an overlay when user clicks "Recruiter Login" in navbar */}
      {showRecruiterLogin && <RecruiterLogin/>}
      {/* Main application routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/ManageJobs' element={<ManageJobs />} />
        <Route path='/AddJobs' element={<AddJobs />} />
        <Route path='/ViewApplications' element={<ViewApplications />} />

      </Routes>
    </div>
  )
}
