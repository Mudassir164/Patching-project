import React from 'react'

const SliderContent = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] absolute bottom-10 left-[50%]  translate-x-[-50%] bg-[#12121265] rounded-lg   px-6 py-3">
        <h1 className='text-white text-3xl md:text-3xl sm:text-5xl lg:text-5xl  mb-6 font-bold text-center'>{props.title}</h1>
        <button className="bg-blue-800 text-white py-4 px-6 rounded-lg ">GET QUOTE</button>
    </div>
  )
}

export default SliderContent