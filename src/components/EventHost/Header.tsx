'use client'
import React, { useState } from 'react'
import TermsServiceModal from '../Gen/modals/TermsServiceModal';
import { motion } from 'framer-motion';
import NewEventBookingModal from '../Gen/modals/NewEventBookingModal';
import Link from 'next/link';

const Header = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  // const handleTermsClick = () => {
  //   setShowTerms(true);
  // };

  const handleTermsAgree = () => {
    setShowTerms(false);
    setShowBooking(true);
  };

  const handleBookingPrevious = () => {
    setShowBooking(false);
    setShowTerms(true);
  };

  return (
    <section className="lg:min-h-[115vh] min-h-[120vh] sm:bg-center relative bg-eventMobile max-w-full lg:bg-bgEvent bg-no-repeat bg-cover lg:bg-cover pt-[5rem] overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="py-3 w-full"
      >
        <div className="container flex flex-col mt-[5rem] items-start sm:my-[10%] gap-[1.5rem] text-white overflow-x-hidden break-words">

          <p className="bricolage-grotesque font-[400] leading-[120%] text-pryWhite text-[clamp(40px,6vw,100px)]">
            Hosting <br /> Memorable <br /> Experiences
          </p>

          <p className="inter text-[clamp(14px,2.5vw,25px)] leading-[150%] font-[300]">
            As an expert event host, I transform your <br /> event into an unforgettable occasion that <br /> will always linger in your mind.
          </p>

          <Link href='/booking' className='bg-white w-full sm:w-auto inter text-[clamp(16px,1.6vw,16px)] px-6 py-4 border rounded-[16px] text-black border-b-[5px]'>
            Book Me!
          </Link>
        </div>
      </motion.div>
      <TermsServiceModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        onAgree={handleTermsAgree}
      />
      {/* <EventBookingModal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)} 
        onProceed={() => {
          // Handle proceed logic here
        }}
        onPrevious={handleBookingPrevious}
      /> */}
      <NewEventBookingModal
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