import React from 'react'

const SectionHeading = ({title}) => {
  return (
    <div className="flex justify-center items-center bg-[#2c88de] py-10">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
    </div>
  )
}

export default SectionHeading