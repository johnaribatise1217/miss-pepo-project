'use client'
import React, { useState } from 'react'
import TermsServiceModal from '../Gen/modals/TermsServiceModal';
import EventBookingModal from '../Gen/modals/EventBookingModal';

const Header = () => {
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
    <section className="h-[120vh] w-full bg-bgEvent bg-no-repeat bg-cover pt-[6rem]"
    >
      <div className="container flex flex-col items-start mt-[3rem] gap-[2rem] text-white">
        <p className="bricolage-grotesque font-[400] leading-[120%] text-pryWhite xl:text-[70px] 2xl:text-[80px]">
          Hosting <br /> Memorable <br />Experiences
        </p>
        <p className='inter text-[22px] leading-[150%] font-[200] max-w-[50%]'>
          As an expert event host, I transform your <br /> event into an unforgettable occasion that will <br /> always linger in your mind.
        </p>
        <button onClick={handleTermsClick} className='bg-white inter px-6 py-4 border rounded-[16px] text-black border-b-[5px]'>Book Me!</button>
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

export default Header