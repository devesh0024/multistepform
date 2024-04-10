import React from 'react'

const Page6 = (props) => {
    const setPage = props.setPage;
    const page = props.page;
    setPage(6); 
  return (
    <div>
        <h1 className='font-bold text-3xl mt-8 w-[40%] mx-auto'>Learning paths based on your answers</h1>
        <h2 className=' text-base mt-8 w-[30%] mx-auto text-gray-500'>Choose one to get started.You can switch anytime.</h2>

      <div className='flex flex-row w-[60%] gap-x-4 mx-auto mt-16'>
        <div className='border border-gray-300 rounded-md h-[15rem] flex flex-row hover:shadow-md'>
            <p className='w-[48%] mx-auto mt-10 text-xl'><span className='font-bold'>Foundational Math </span>Build your foundational skills in algebra, geometry, and probability.</p>
            <img src={require('.//page6.PNG')}  width='150px' height='10px' />
        </div>

        <div className='border border-gray-300 rounded-md h-[15rem] flex flex-row hover:shadow-md'>
            <p  className='w-[48%] mx-auto mt-10 text-xl'><span className='font-bold'>Mathematical Thinking </span>Build your foundational skills in algebra, geometry, and probability.</p>
            <img src={require('.//page6.PNG')}  width='150px' height='10px' />
        </div>
      </div>
    </div>
  )
}

export default Page6
