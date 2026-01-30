import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk,UserButton, useUser}from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
const Navbar = () => {
  const {openSignIn, openSignUp} = useClerk();
  const{user}= useUser(); 
  const navigate= useNavigate();
  const{setShowRecruiterLogin} = useContext(AppContext);

  return (
    <div className="shadow py-4">
        <div className="flex justify-between items-center px-4 py-2">
            <img  onClick={()=> navigate('/')} className='h-8 cursor-pointer' src={assets.logo} alt="" />
            {
              user?
              <div className='flex item -center gap 3'> <Link to ={'/applications'}>Applied Jobs  </Link> 
              <p> | </p>
              <p className='max-sm:hidden '> Welcome, {user.firstName} </p>
              <UserButton/>
              
               </div>
              : <div className="flex gap-4 max-sm:text-sm">
                  {/* Recruiter Login button - triggers modal popup for recruiter authentication */}
                  {/* Clicking this sets showRecruiterLogin to true, rendering the RecruiterLogin modal */}
                  <button onClick={()=> setShowRecruiterLogin(true)} className='bg-green-200 text-gray-800 px-4 py-2 rounded-md'>  Recruiter Login</button>
                  <button onClick={openSignIn} className='bg-blue-600 text-white px-4 py-2 rounded-md'>Login</button>

            </div>
            }
            
        </div>
    </div>
  )
}

export default Navbar   