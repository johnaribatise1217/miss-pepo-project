'use client'
import React, { useState } from 'react'
import TestimonialSlider from './TestimonialSlider'
import Image from 'next/image'
import EventBookingModal from '@/components/Gen/modals/EventBookingModal'
import TermsServiceModal from '@/components/Gen/modals/TermsServiceModal'

const Testimonial = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  
  const handleTermsClick = () => {
    setShowTerms(true);
  };

  const handleTermsAgree = () => {
    setShowTerms(false);
    setShowBooking(true);
  };

  const handleBookingPrevious = () => {
    setShowBooking(false);
    setShowTerms(true);
  };
  return (
    <section className='bg-secBlack relative w-full min-h-[100vh] py-[8.5%] flex flex-col gap-[2rem]'>
      <div className='container flex flex-col gap-[2.5rem] items-start'>
        <div>
          <p className='text-[clamp(38px,5vw,52px)] leading-[120%] overflow-hidden bricolage-grotesque font-[400] text-pryWhite'>
            What my Clients say <br /> About Me
          </p>
        </div>
        <TestimonialSlider/>
      </div>
      <div className='container bg-pryPablo mt-[6rem] md:mt-[8rem] lg:mt-[12rem] 
      flex-col-reverse lg:flex-row flex justify-between items-center gap-[3rem]
      sm:p-[30px] p-5 xl:p-[40px] lg:h-[500px] rounded-[35px]'>
        <div className='flex flex-col items-start w-full lg:w-1/2 gap-[2rem]'>
          <p className='bricolage-grotesque text-[37px] md:text-[52px] font-[500] w-full text-pryWhite leading-[120%]'>Book Ms. Pepo for <br /> your Next Event</p>
          <p className='inter hidden lg:flex lg:text-[20px] text-pryWhite font-[300] w-full'>
            Ms. Pepo brings a unique flair to every event she <br /> hosts. Her commitment to audience engagement <br /> and personalized experience ensures unforgettable <br /> moments for all
          </p>
          <p className='inter text-[18px] lg:hidden text-pryWhite font-[300] w-full'>
            Ms. Pepo brings a unique flair to every event she hosts. Her commitment to audience engagement and personalized experience ensures unforgettable moments for all
          </p>
          <button onClick={handleTermsClick} className='bg-white w-full lg:w-auto inter px-6 py-6 border rounded-[16px] border-b-[5px]'>Book Me!</button>
        </div>
        <div className='lg:w-[45%] w-full h-full relative'>
          <Image
            src="/images/book-me.svg"
            alt='service'
            width={100}
            height={100}
            className='w-full h-full rounded-[20px] object-cover'
          />
        </div>
      </div>
      <TermsServiceModal 
        isOpen={showTerms}
        onClose={() => setShowTerms(false)} 
        onAgree={handleTermsAgree}
      />
      <EventBookingModal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)} 
        onProceed={() => {
          // Handle proceed logic here
        }}
        onPrevious={handleBookingPrevious}
      />
    </section>
  )
}

export default Testimonial