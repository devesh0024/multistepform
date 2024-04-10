import React from 'react'
import { NavLink } from 'react-router-dom'

const Page5 = (props) => {
    const setPage = props.setPage;
    const page = props.page;
    setPage(5);
    return (
        <div>
            <div className='flex flex-row w-[60%] mx-auto'>
                <img src={require('.//page5.PNG')}  width='100%' height='100%' className='mt-14' />
                <div className='mt-24'>
                    <h1 className='font-bold text-3xl mb-2 mt-8'>
                        Your're on your way!
                    </h1>
                    <img src={require('.//5star.jpg')}  width='170px' height='170px'  />
                    <p className='italic'>"Through its engaging and well structured courses, Brilliant has taught me mathematical concepts that i previously struggled to understandi now feel confident approaching both technical job interviews and real world problems solving situations."</p>
                    <div className='mt-5'>
                        -Jacob S.
                    </div>
                </div>

            </div>

            <div className='flex flex-row items-center justify-center mt-16'>
                <NavLink to='/page6'>
                    <button className='border-black border p-2 rounded-md px-4 text-white bg-black font-bold'>Continue</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Page5
