import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

// RecruiterLogin component - Modal popup for recruiter authentication (login/signup)
const RecruiterLogin = () => {
    // State for toggling between Login and Sign Up modes
    const [state, setState] = React.useState('Login');
    // Form field states for user input
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    // State for company logo upload (stores File object)
    const [image, setImage] = React.useState(false);
    // State for tracking form submission status (available for future enhancements)
    const [isTextDataSubmitted, setIsTextDataSubmitted] = React.useState(false);

    // Access context to control modal visibility
    const { setShowRecruiterLogin } = useContext(AppContext);

    // Form submission handler - currently logs data, ready for API integration
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        // Handle login/signup logic here - TODO: Implement authentication API calls
        console.log('Form submitted:', { name, email, password, state });
    }
useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable background scrolling when modal is open
       return () => {
           document.body.style.overflow = 'auto'; // Re-enable scrolling on modal close
       }
    }, []);

    return (
        // Modal overlay with backdrop blur effect for focus
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            {/* Main form container with white background and rounded corners */}
            <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
                {/* Dynamic header showing current mode (Login/Sign Up) */}
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
                <p className='text-sm'>Welcome back! Please sign in to continue</p>

                {/* Company logo upload section - conditionally rendered for Sign Up only */}
                {state === "Sign Up" && (
                    <div className='flex items-center gap-4 my-10'>
                        <label htmlFor='image'>
                            {/* Logo preview area with fallback to upload icon */}
                            <img className='w-16 h-16 rounded-full cursor-pointer' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                            <input onChange={e => setImage(e.target.files[0])} type="file" id='image' hidden />
                        </label>
                        <p>Upload Company<br />Logo</p>
                    </div>
                )}

                {/* Company name input - only shown during Sign Up mode */}
                {state !== "Login" && (
                    <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img src={assets.person_icon} alt="" />
                        <input className='outline-none text-sm' onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Company Name' required />
                    </div>
                )}

                {/* Email input field - required for both login and signup */}
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.email_icon} alt="" />
                    <input className='outline-none text-sm' onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email Id' required />
                </div>

                {/* Password input field - required for both login and signup */}
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.lock_icon} alt="" />
                    <input className='outline-none text-sm' onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required />
                </div>

                {/* Forgot password link - placeholder for future password reset functionality */}
                <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>

                {/* Submit button with dynamic text based on current state */}
                <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full'>
                    {state === "Login" ? "login" : "create account"}
                </button>

                {/* Toggle links to switch between Login and Sign Up modes */}
                {state === "Login" ? (
                    <p className='mt-5 text-center'>Don't have an account?
                        <span className='text-blue-600 cursor-pointer' onClick={() => setState("Sign Up")}> Sign up</span>
                    </p>
                ) : (
                    <p className='mt-5 text-center'>Already have an account?
                        <span className='text-blue-600 cursor-pointer' onClick={() => setState("Login")}> Login</span>
                    </p>
                )}

                {/* Close button positioned in top-right corner of modal */}
                <img onClick={() => setShowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
            </form>
        </div>
    )
}

export default RecruiterLogin