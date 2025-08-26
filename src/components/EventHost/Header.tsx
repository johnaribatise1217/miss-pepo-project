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
    <section className="lg:min-h-[115vh] min-h-[120vh] sm:bg-center relative bg-eventMobile max-w-full lg:bg-bgEvent bg-no-repeat bg-cover lg:bg-cover pt-[5rem]">
      <div className="container flex flex-col mt-[5rem] items-start sm:my-[10%] gap-[1.5rem] text-white">
        <p className="bricolage-grotesque font-[400] leading-[120%] text-pryWhite text-[clamp(65px,4.5vw,112px)]">
          Hosting <br /> Memorable <br />Experiences
        </p>
        <p className='inter text-[clamp(19px,3vw,25px)] leading-[150%] font-[300]'>
          As an expert event host, I transform your <br /> event into an unforgettable occasion that <br /> will always linger in your mind.
        </p>
        <button onClick={handleTermsClick} className='bg-white w-full sm:w-auto inter text-[clamp(16px,1.6vw,16px)] px-6 py-4 border rounded-[16px] text-black border-b-[5px]'>
          Book Me!
        </button>
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