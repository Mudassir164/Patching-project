import React from 'react'
import PatchingShowcase from './Components/PatchingShowcase'
import SectionHeading from './Components/SectionHeading'

const PioritySection = () => {
  return (
    <section className="w-[100%] flex flex-col bg-slate-500 ">
        <SectionHeading title="OUR FIRST PRIORITY - CUSTOMER'S SATISFACTION"/>
        <PatchingShowcase/>

    </section>
  )
}

export default PioritySection