import React from 'react'
import AllFeatures from './Components/AllFeatures'

const OurFeatureSection = () => {
  return (
    <section className="w-[100%] p-15 flex flex-col  bg-[#2babe2]">
        <div className='w-[100%] flex flex-col justify-center items-center '>
            <h1 className='text-2xl text-white font-bold'>Our Features</h1>
            <p className='text-lg text-white '>We deliver what we promise!</p>
        </div>
        <AllFeatures/>
    </section>
  )
}

export default OurFeatureSection