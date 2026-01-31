import React, { useState } from 'react'

const AddJobs = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    jobType: 'full-time',
    salaryMin: '',
    salaryMax: '',
    description: '',
    requirements: '',
    deadline: '',
    contactEmail: '',
    category: 'technology'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Job data:', formData)
    alert('Job posted successfully!')
  }

  return (
    <div className='max-w-4xl mx-auto'>
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>Post a New Job</h1>
                <p className='text-gray-600'>Fill in the details below to create a new job posting</p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Job Title */}
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Job Title *
                    </label>
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        placeholder='e.g. Senior Software Engineer'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                        required
                    />
                </div>

                {/* Company and Location Row */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            Company Name *
                        </label>
                        <input
                            type='text'
                            name='company'
                            value={formData.company}
                            onChange={handleChange}
                            placeholder='e.g. Tech Corp Inc.'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            Location *
                        </label>
                        <input
                            type='text'
                            name='location'
                            value={formData.location}
                            onChange={handleChange}
                            placeholder='e.g. New York, NY or Remote'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                            required
                        />
                    </div>
                </div>

                {/* Job Type and Category Row */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            Job Type *
                        </label>
                        <select
                            name='jobType'
                            value={formData.jobType}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                        >
                            <option value='full-time'>Full-time</option>
                            <option value='part-time'>Part-time</option>
                            <option value='contract'>Contract</option>
                            <option value='freelance'>Freelance</option>
                            <option value='internship'>Internship</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            Category *
                        </label>
                        <select
                            name='category'
                            value={formData.category}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                        >
                            <option value='technology'>Technology</option>
                            <option value='marketing'>Marketing</option>
                            <option value='sales'>Sales</option>
                            <option value='finance'>Finance</option>
                            <option value='hr'>Human Resources</option>
                            <option value='design'>Design</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                </div>

                {/* Salary Range */}
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Salary Range (Optional)
                    </label>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input
                            type='number'
                            name='salaryMin'
                            value={formData.salaryMin}
                            onChange={handleChange}
                            placeholder='Minimum salary'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                        />
                        <input
                            type='number'
                            name='salaryMax'
                            value={formData.salaryMax}
                            onChange={handleChange}
                            placeholder='Maximum salary'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                        />
                    </div>
                </div>

                {/* Job Description */}
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Job Description *
                    </label>
                    <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        rows={6}
                        placeholder='Describe the role, responsibilities, and what the candidate will be doing...'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical'
                        required
                    />
                </div>

                {/* Requirements */}
                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Requirements & Skills *
                    </label>
                    <textarea
                        name='requirements'
                        value={formData.requirements}
                        onChange={handleChange}
                        rows={4}
                        placeholder='List the required skills, experience, and qualifications...'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical'
                        required
                    />
                </div>

                {/* Application Deadline and Contact Email Row */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            Application Deadline
                        </label>
                        <input
                            type='date'
                            name='deadline'
                            value={formData.deadline}
                            onChange={handleChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            Contact Email *
                        </label>
                        <input
                            type='email'
                            name='contactEmail'
                            value={formData.contactEmail}
                            onChange={handleChange}
                            placeholder='hr@company.com'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className='flex justify-end space-x-4 pt-6 border-t border-gray-200'>
                    <button
                        type='button'
                        className='px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium'
                    >
                        Save as Draft
                    </button>
                    <button
                        type='submit'
                        className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    >
                        Post Job
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddJobs