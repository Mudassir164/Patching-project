import React from 'react'

const OfferBox = (props) => {
  return (
    <div className=' w-[100%] mt-10 md:w-[48%] lg:w-[22%] flex-col rounded-lg px-5 py-7  justify-center items-center bg-white relative hover:shadow-lg hover:shadow-gray-500'>
        <h1 className='text-2xl font-bold text-center mb-2'>{props.title}</h1>
        <div className='w-[100%] flex-col bg-[#f4811f] p-3 rounded-lg mb-2'>
            <h1 className='text-xl font-bold text-center text-white'>{props.price}</h1>
            <h1 className='text-xl font-bold text-center text-white'>{props.complexity}</h1>
        </div>
        <Text text={props.turnarround}/>
        <Text text={props.rush}/>
        <p className='text-center text-lg font-serif mb-2 '>EMB DST PDF BMP/JPG</p>
        <p className='text-center text-lg font-serif mb-2 '>Other Formats <span className='text-center text-xs font-serif mb-2 '>(On request)</span></p>
        <Text text='Small edits free'/>
        <Text text='Revisions free'/>
        <Text text='Discount on bulk order'/>

        <button className=' bg-black rounded-lg px-5 py-3 absolute text-white bottom-[-20px] left-[50%] translate-x-[-50%] mt-5'>ORDER NOW</button>
    </div>
  )
}

const Text = ({text})=>{
   return <>
    <p className='text-center text-lg font-serif mb-2 '>{text}</p>
    </>
}
export default OfferBox