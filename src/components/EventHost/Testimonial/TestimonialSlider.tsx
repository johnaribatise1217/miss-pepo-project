/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import {motion , AnimatePresence} from 'framer-motion'

interface Testimonial {
  id: number;
  text1?: string;
  text2?: string;
  name: string;
}

const testimonials : Testimonial[] = [
  {
    id : 1,
    text1 : "First ehn, let me say that you are the best!! I am so glad my husband found your page in time because I wouldn't want it any other way! The energy was everything we wanted, and you delivered just that!! Thank you so much for a job well done, sis!",
    text2 : "My husband and I are so happy with how everything turned out!!! Thank you, thank you!!",
    name : "Toun"
  },
  {
    id : 2,
    text1 : "Pepooooo you were amazing!!! Your energy was everything we wanted and more. Thank you so much for your professionalism… Everyone had nothing but good things to say.️ ",
    name : "Ade"
  },
  {
    id : 3,
    text1 : "Hi Pepo, how are you doing? My name is Hope and i would like to inquire about your MC services for a wedding in September. My sister is getting married and i would love for you to MC the event.",
    text2 : "I have been following for quite some time and i also was part of an event you MC’ed last year and it was amazing",
    name : "Hope"
  }
]

const TestimonialSlider = () => {
  return (
    <div className='flex flex-col items-start gap-[1.5rem]'>
      <div className="mt-6 hidden lg:grid lg:grid-cols-3 gap-6 transition-all duration-500">
        <AnimatePresence mode="wait">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-black flex flex-col justify-between min-h-[350px] gap-[3rem] text-pryWhite px-7 cursor-pointer p-6 rounded-3xl h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-pryWhite font-[300] w-full text-[16px] inter leading-[150%]">"{testimonial.text1}"</p>
              {testimonial.text2 && (
                <p className='text-pryWhite font-[300] w-full text-[16px] inter leading-[150%]'>"{testimonial.text2}"</p>
              )}
              <p className="font-bold text-[16px] mt-4">{testimonial.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex mt-6 w-full lg:hidden gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
      >
        <AnimatePresence mode="wait">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-black flex flex-col w-[300px] h-auto justify-between gap-[2.5rem] text-pryWhite px-7 cursor-pointer p-6 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-pryWhite font-[300] w-full text-[17px] inter leading-[150%]">"{testimonial.text1}"</p>
              {testimonial.text2 && (
                <p className='text-pryWhite font-[300] w-full text-[17px] inter leading-[150%]'>"{testimonial.text2}"</p>
              )}
              <p className="font-bold text-[16px] mt-3">{testimonial.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TestimonialSlider