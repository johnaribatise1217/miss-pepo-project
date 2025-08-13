import React from 'react'
import Header from '@/components/EventHost/Header'
import SectionTwo from '@/components/EventHost/SectionTwo'
import Testimonial from '@/components/EventHost/Testimonial/Testimonial'

const EventHost = () => {
  return (
   <div className='min-h-screen flex overflow-hidden flex-col w-full'>
    <Header/>
    <SectionTwo/>
    <Testimonial/>
   </div>
  )
}

export default EventHost