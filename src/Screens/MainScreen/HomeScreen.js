import React from 'react'
import OurFeatureSection from '../../Component/HomeScreenComponet/OurFeatureSection'
import PioritySection from '../../Component/HomeScreenComponet/PioritySection'
import PricingSection from '../../Component/HomeScreenComponet/PricingSection'
import SliderAndForm from '../../Component/HomeScreenComponet/SliderAndForm'

const HomeScreen = () => {
  return (
    <>
    <SliderAndForm/>
    <PioritySection/>
    <OurFeatureSection/>
    <PricingSection/>
    </>
  )
}

export default HomeScreen