import React from 'react'
import { NavLink } from 'react-router-dom'

const Page1 = (props) => {
    const setPage = props.setPage;
    const page = props.page;
    setPage(1);
  return (
    <div>
      
      <h1 className='font-bold text-3xl mt-8 w-[30%] mx-auto'>Which describes you best ?</h1>
      <h2 className=' text-base mt-8 w-[28%] mx-auto text-gray-500'>This will help us personalize your experience.</h2>
      <div className='flex flex-col w-[60%] mt-12 mx-auto gap-y-3'>
        <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer gap-x-5 hover:shadow-lg items-center'>
            <img src={require('.//p11.PNG')}  width='65px' height='65px'  />
            <h1><span className='font-bold '>Student</span> or soon to be enrolled</h1>
        </div>
        <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer gap-x-5 hover:shadow-lg items-center' >
            <img src={require('.//p12.PNG')} width='65px' height='65px' />
            <h1><span className='font-bold'>Professional</span> persuing a career</h1>
        </div>
        <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center'>
            <img src={require('.//p13.PNG')}  width='65px' height='65px' />
            <h1><span className='font-bold'>Parent </span> of a school-age child</h1>
        </div>
        <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center'>
            <img src={require('.//p14.PNG')}  width='65px' height='65px'/>
            <h1><span className='font-bold'>Lifelong learner</span></h1>
        </div>
        <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center'>
            <img src={require('.//p15.PNG')}  width='65px' height='65px'/>
            <h1><span className='font-bold'>Teacher</span></h1>
        </div>
        <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center'>
            <img src={require('.//p16.PNG')}  width='65px' height='65px' />
            <h1><span className='font-bold'>Other</span></h1>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center mt-8 '>
        <NavLink to='/page2'>
            <button className='border-black border p-2 rounded-md px-4 text-white bg-black font-bold'>Continue</button>
        </NavLink>
        
      </div>
    </div>
  )
}

export default Page1
