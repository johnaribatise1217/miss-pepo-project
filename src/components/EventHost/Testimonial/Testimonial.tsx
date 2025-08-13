import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className='bg-secBlack relative w-full min-h-[100vh] py-[8.5%] flex flex-col gap-[2rem]'>
      <div className='container flex flex-col gap-[3rem] items-start'>
        <div>
          <p className='text-[52px] leading-[120%] bricolage-grotesque font-[400] text-pryWhite'>
            What my Clients say <br /> About Me
          </p>
        </div>
        <TestimonialSlider/>
      </div>
      <div className='container bg-pryPablo mt-[12rem] 
      flex justify-between items-center 
      p-[32px] h-[500px] rounded-[35px]'>
        <div className='flex flex-col items-start w-1/2 gap-[2rem]'>
          <p className='bricolage-grotesque text-[52px] font-[400] text-pryWhite leading-[120%]'>Book Ms. Pepo for <br /> your Next Event</p>
          <p className='inter text-pryWhite font-[200] w-full'>
            Ms. Pepo brings a unique flair to every event she <br /> hosts. Her commitment to audience engagement <br /> and personalized experience ensures unforgettable <br /> moments for all
          </p>
          <button className='bg-white inter px-6 py-4 border rounded-[16px] border-b-[5px]'>Book Me!</button>
        </div>
        <div className='w-[45%] h-full relative'>
          <Image
            src="/images/book-me.svg"
            alt='service'
            width={100}
            height={100}
            className='w-full h-full rounded-[20px] object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonial