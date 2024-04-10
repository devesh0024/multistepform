import React from 'react'
import { NavLink } from 'react-router-dom'

const Page2 = (props) => {
    const setPage = props.setPage;
    const page = props.page;
    setPage(2);
  return (
    <div>
        
        <h1 className='font-bold text-3xl mt-8 w-[30%] mx-auto'>Which are you most interested in?</h1>
        <h2 className=' text-base mt-8 w-[40%] mx-auto text-gray-500'>Choose just one.This will help usget you started (but wont't limit your experience)</h2>
        <div className='flex flex-col w-[60%] mt-12 mx-auto gap-y-3'>
            <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center'>
                <img src={require('.//page21.PNG')}  width='65px' height='65px'  />
                <h1 className=''>Learning specific skills to advance my career</h1>
            </div>
            <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center' >
                <img src={require('.//page22.PNG')}  width='65px' height='65px'  />
                <h1 className=''>Exploring new topics I'm interested in</h1>
            </div>
            <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center'>
                <img src={require('.//page23.PNG')}  width='65px' height='65px'  />
                <h1 className=''>Refreshing my math foundations</h1>
            </div>
            <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center'>
                <img src={require('.//page24.PNG')}  width='65px' height='65px'  />
                <h1 className=''>Excersing my brain to stay sharp</h1>
            </div>
            <div className='flex flex-row border border-gray rounded-md p-[0.2rem] cursor-pointer  gap-x-5 hover:shadow-lg items-center'>
                <img src={require('.//page25.PNG')}  width='65px' height='65px'  />
                <h1 className=''>Something else</h1>
            </div>
            
        </div>
        <div className='flex flex-row items-center justify-center mt-8 '>
            <NavLink to='/page3'>
                <button className='border-black border p-2 rounded-md px-4 text-white bg-black font-bold'>Continue</button>
            </NavLink>
           
        </div>
    </div>
  )
}

export default Page2
