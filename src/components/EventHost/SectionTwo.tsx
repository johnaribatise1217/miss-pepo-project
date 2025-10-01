/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const exploreImages : string[] = [
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844602/explore1_xnsvx2.svg',
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844608/explore2_ctzyrc.svg',
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844605/explore3_bftvc5.jpg',
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844618/explore4_exkpal.svg',
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844607/explore5_pwwvbw.png',
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844610/explore6_wx0qrv.png',
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844610/explore7_kzhkjw.png',
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844612/explore8_notr29.png',
  'https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844614/explore9_b6v9ud.png',
]

const SectionTwo = () => {
  return (
    <section className='min-h-screen bg-pryBlack w-full flex flex-col items-start py-[10%]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className='container flex-col-reverse lg:flex-row flex justify-between gap-[1rem] sm:gap-[3rem] lg:gap-[5rem] items-center'
      >
        <div className=" content-none bg-[#91775E] h-[0.8] w-full lg:hidden"></div>
        <motion.div 
          className="lg:w-[50%] flex min-h-[480px] items-center w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src="https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844528/section2-one_ynsbqw.svg"
            alt='misspepo'
            height={1000}
            width={1000}
            className='bg-cover w-full rounded-[30px]'
          />
        </motion.div>
        <motion.div className='flex flex-col gap-[2rem] items-start lg:w-[50%] w-full'>
          <p className='bricolage-grotesque text-[clamp(35px,4vw,52px)] leading-[120%] font-[400] text-pryWhite'>Your Event Deserves the Best Host</p>
          <p className='text-[clamp(18.5px,3.5vw,20px)] text-white font-[300]'>
            Ms. Pepo brings a unique flair to every event she hosts Her commitment to audience engagement and personalized experience ensures unforgettable moments for all
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className='w-full py-2'
      >
        <div className='w-full container mt-[4.5rem] lg:mt-[10rem] flex flex-col gap-[2.5rem]'>
          <p className='text-[clamp(37px,5vw,52px)] md:hidden text-pryWhite bricolage-grotesque'>Explore Some <br />Moments from <br /> my Journey</p>
          <p className='text-[clamp(35px,4vw,52px)] hidden md:flex text-pryWhite bricolage-grotesque'>Explore Some Moments from <br /> my Journey</p>
          <div className="flex w-full overflow-y-hidden gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
          > 
              {exploreImages.map((card, index) => (
                <div
                  key={index} className='flex-none'
                >
                  <Image
                    src={card}
                    alt={`explore-image-${index}`}
                    width={500}
                    height={500}
                    className='w-auto h-[400px] md:h-[500px] object-cover rounded-[20px]'
                  />
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default SectionTwo