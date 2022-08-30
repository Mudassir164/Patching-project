import React from 'react'
import { FaShirtsinbulk } from "react-icons/fa";
import './featurebox.css'

const FeatureBox = ({icon,title,detail}) => {
  return (
    <div className="flex flex-col justify-center items-center sm:w-[45%] md:w-[30%] p-8 bg-white  mt-10     shadow-lg shadow-gray-500 " id='feature-box'>
        
        {icon}
        <h3 className='text-xl font-bold mb-5 mt-5 text-[#757575] text-center h33 '>{title}</h3>
        <p className='text-center text-black feature-text'>{detail}</p>
    </div>
  )
}

// FaShirtsinbulk


export default FeatureBox