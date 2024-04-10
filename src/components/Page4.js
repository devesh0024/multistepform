import React from 'react'
import { NavLink } from 'react-router-dom'
const Page4 = (props) => {
    const setPage = props.setPage;
    const page = props.page;
    setPage(4);
  return (
    <div>
      <h1 className='font-bold text-3xl mt-8 w-[30%] mx-auto'>What is your math comfort level?</h1>
      <h2 className=' text-base mt-8 w-[35%] mx-auto text-gray-500'>Choose the highest level you feel confident in - you can always adjust later.</h2>

      <div className='flex flex-row w-[75%] gap-x-12 mt-20 mx-auto'>
            <div className='border border-gray-500 rounded-md w-[20%] h-[15rem] hover:shadow-2xl'>
                <img src={require('.//page41.PNG')}  width='100%' height='100%' />
                <h2 className='font-bold text-lg text-center'>Arithmetic</h2><br></br>
                <h1 className='text-lg text-gray-500 text-center'>Introductory</h1>
            </div>
            <div className='border border-gray-500 rounded-md w-[20%] h-[15rem]  hover:shadow-2xl'>
                <img src={require('.//page42.PNG')}  width='100%' height='100%' />
                <h2 className='font-bold text-lg text-center mt-10'>Basic Algebra</h2><br></br>
                <h1 className='text-lg text-gray-500 text-center'>Foundational</h1>
            </div>
            <div className='border border-gray-500 rounded-md w-[20%] h-[15rem]  hover:shadow-2xl'>
                <img src={require('.//page43.PNG')}  width='100%' height='100%' />
                <h2 className='font-bold text-lg text-center mt-8'>Intermediate Algebra</h2><br></br>
                <h1 className='text-lg text-gray-500 text-center'>Intermediate</h1>
            </div>
            <div className='border border-gray-500 rounded-md w-[20%] h-[15rem]  hover:shadow-2xl'>
                <img src={require('.//page44.PNG')}  width='100%' height='100%' />
                <h2 className='font-bold text-lg text-center'>Calculus</h2><br></br>
                <h1 className='text-lg text-gray-500 text-center'>Advanced</h1>
            </div>

      </div>

      <div className='flex flex-row items-center justify-center mt-12 '>
            <NavLink to='/page5'>
                <button className='border-black border p-2 rounded-md px-4 text-white bg-black font-bold'>Continue</button>
            </NavLink>
      </div>

    </div>
  )
}

export default Page4
