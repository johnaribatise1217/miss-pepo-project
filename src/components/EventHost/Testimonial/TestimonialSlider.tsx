/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number;
  text1?: string;
  text2?: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text1: "First ehn, let me say that you are the best!! I am so glad my husband found your page in time because I wouldn't want it any other way! The energy was everything we wanted, and you delivered just that!! Thank you so much for a job well done, sis!",
    text2: "My husband and I are so happy with how everything turned out!!! Thank you, thank you!!",
    name: "Toun"
  },
  {
    id: 2,
    text1: "Pepooooo you were amazing!!! Your energy was everything we wanted and more. Thank you so much for your professionalism… Everyone had nothing but good things to say.️ ",
    name: "Ade"
  },
  {
    id: 3,
    // text1: "Hi Pepo, how are you doing? My name is Hope and i would like to inquire about your MC services for a wedding in September. My sister is getting married and i would love for you to MC the event.",
    text1: "I have been following for quite some time and i also was part of an event you MC’ed last year and it was amazing",
    name: "Hope"
  },
  {
    id: 4,
    text1: "Mspepo words are not enough! Take your flowers! Everyone enjoyed your presence! Your ability to carry everyone along irrespective of their age, gender and race is admirable!",
    text2: "Thanks for making my birthday memorable!",
    name : "Dr Folake"
  },
  {
    id: 5,
    text1: "You are the best MC I've seen in 11years since i started shooting.. I kid you not",
    name: "Bezy"
  }
]

const TestimonialSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
      sliderRef.current.style.cursor = 'grabbing';
    }
  };

  const onMouseLeave = () => {
    if (sliderRef.current) {
      setIsDragging(false);
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const onMouseUp = () => {
    if (sliderRef.current) {
      setIsDragging(false);
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className='flex flex-col items-start gap-[1.5rem]'>
      <div className="mt-6 hidden lg:grid lg:grid-cols-3 gap-6 transition-all duration-500">
        {testimonials
        // .sort(() => Math.random() - 0.5).slice(0, 3)
        .map((testimonial) => (
          <AnimatePresence mode="wait" key={testimonial.id}>
            <motion.div
              key={testimonial.id}
              className="bg-black flex flex-col justify-between min-h-[350px] gap-[3rem] text-pryWhite px-7 cursor-pointer p-6 rounded-3xl h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-pryWhite font-[300] w-full text-[16px] inter leading-[150%]">"{testimonial.text1}"</p>
              {testimonial.text2 && (
                <p className='text-pryWhite font-[300] w-full text-[16px] inter leading-[150]%'>"{testimonial.text2}"</p>
              )}
              <p className="font-bold text-[16px] mt-4">{testimonial.name}</p>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <div
        ref={sliderRef}
        className="flex mt-6 w-full lg:hidden gap-5 overflow-x-scroll no-scrollbar scroll-smooth"
        style={{ cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <AnimatePresence mode="wait">
          {testimonials
          .sort(() => Math.random() - 0.5).slice(0, 3)
          .map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-black flex flex-col w-[300px] h-auto justify-between gap-[2.5rem] text-pryWhite px-7 cursor-pointer p-6 rounded-3xl flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-pryWhite font-[300] w-full text-[17px] inter leading-[150%]">"{testimonial.text1}"</p>
              {testimonial.text2 && (
                <p className='text-pryWhite font-[300] w-full text-[17px] inter leading-[150]%'>"{testimonial.text2}"</p>
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