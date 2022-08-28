import React from 'react'
import logo1 from '../../../Assets/logo1.jpg'
import logo2 from '../../../Assets/logo2.bmp'
import gears from '../../../Assets/gears.gif'
import '../Components/slider.css'
import 'animate.css';

const PatchingShowcase = () => {
    
  return (
    <div className="w-[100%] flex flex-row justify-center items-center bg-white ">
        
        <img src={logo1} alt="Logo1" className='w-[30%] ' id='animate-1'/>
        <img src={gears} alt="gears" className='w-70 h-70 ml-10 mr-10'/>
        <img src={logo2} alt="Logo2" className='w-[30%]'/>

    </div>
  )
}

export default PatchingShowcase