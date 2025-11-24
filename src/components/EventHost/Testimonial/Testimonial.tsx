'use client'
import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Testimonial = () => {

  return (
    <section className="bg-secBlack relative w-full min-h-[100vh] py-[8.5%] flex flex-col gap-[2rem] overflow-x-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full py-1 container mx-auto flex flex-col gap-[2.5rem] items-start "
      >
        <div className="overflow-hidden">
          <p className="text-[clamp(38px,5vw,52px)] leading-[120%] bricolage-grotesque font-[400] text-pryWhite">
            What my Clients say <br /> About Me
          </p>
        </div>
        <div className="w-full">
          <TestimonialSlider />
        </div>
      </motion.div>

      {/* Booking Section */}
      <div className=" mx-auto container bg-pryPablo mt-[6rem] md:mt-[8rem] lg:mt-[12rem] flex flex-col-reverse lg:flex-row justify-between items-center gap-[3rem] sm:p-[30px] p-5 xl:p-[40px] lg:h-[500px] rounded-[35px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="py-1 flex flex-col items-start w-full lg:w-1/2 gap-[2rem]"
        >
          <p className="bricolage-grotesque text-[37px] md:text-[52px] font-[500] w-full text-pryWhite leading-[120%]">
            Book Ms. Pepo for <br /> your Next Event
          </p>

          <p className="inter hidden lg:flex lg:text-[20px] text-pryWhite font-[300] w-full">
            Ms. Pepo brings a unique flair to every event she <br /> hosts. Her commitment to audience engagement <br /> and personalized experience ensures unforgettable <br /> moments for all
          </p>

          <p className="inter text-[18px] lg:hidden text-pryWhite font-[300] w-full">
            Ms. Pepo brings a unique flair to every event she hosts. Her commitment to audience engagement and personalized experience ensures unforgettable moments for all
          </p>

          <Link href='/booking'
            className="bg-white w-full text-center lg:w-auto inter px-6 py-6 border rounded-[16px] border-b-[5px] hover:bg-gray-50 transition"
          >
            Book Me!
          </Link>
        </motion.div>

        <motion.div
          className="lg:w-[45%] w-full h-full relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="https://res.cloudinary.com/dfptoh5fz/image/upload/v1758845024/book-me_lzr2ax.svg"
            alt="service"
            width={1000}
            height={1000}
            loading='lazy'
            className="w-full h-full rounded-[20px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
