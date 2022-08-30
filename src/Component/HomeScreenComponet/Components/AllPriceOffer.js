import React from 'react'
import OfferBox from './OfferBox'

const OrderBoxContent =[
    {
        title:'Stitch Count',
        price:'$2.5',
        complexity:'/1K Stitches',
        turnarround:'4 hours turnaround',
        rush:'2 hours if rush'
    },
    {
        title:'Chest / Cap Size',
        price:'$25',
        complexity:'/1K Stitches',
        turnarround:'4 hours turnaround',
        rush:'2 hours if rush'
    },
    {
        title:'Jacket / Full Back',
        price:'$40 - $150',
        complexity:'Depends on complexity',
        turnarround:'24 hours turnaround',
        rush:'4-8 hours if rush'
    },
    {
        title:'Vector Graphics',
        price:'2$10 - $120',
        complexity:'Depends on complexity',
        turnarround:'4 hours turnaround',
        rush:'2 hours if rush'
    },

]

const AllPriceOffer = () => {
  return (
    <div className='w-[100%] flex flex-row flex-wrap justify-between items-center py-10'>
        {
            OrderBoxContent.map((value,index)=>(<OfferBox title={value.title} price={value.price} complexity={value.complexity} turnarround={value.turnarround} rush={value.rush}/>))
        }
    </div>
  )
}

export default AllPriceOffer