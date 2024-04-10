import React from 'react'
import { NavLink } from 'react-router-dom'
const Page3 = (props) => {
    const setPage = props.setPage;
    const page = props.page;
    setPage(3);
  return (
    <div>
      <div className='flex flex-row w-[60%] mx-auto mt-16 gap-x-14'>
        <img src={require('.//page3.PNG')}  width='100%' height='100%'  />
        <div className='mt-24'>
            <h1 className='font-bold text-3xl mb-8'>
                Your're in the right place
            </h1>
            <p className='italic'>Brilliant gets you hands-on to help improve your professional skills and knowledge.You'll interact with concepts and solve fun problems in maths, science, and computer science.</p>
        </div>
      </div>

      <div className='flex flex-row items-center justify-center'>
            <NavLink to='/page4'>
                <button className='border-black border p-2 rounded-md px-4 text-white bg-black font-bold'>Continue</button>
            </NavLink>
      </div>
    </div>
  )
}

export default Page3
