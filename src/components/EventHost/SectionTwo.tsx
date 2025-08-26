/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import React from 'react'

const exploreImages : string[] = [
  '/images/explore1.svg',
  '/images/explore2.svg',
  '/images/explore3.jpg',
  '/images/explore4.svg',
  '/images/explore5.png',
  '/images/explore6.png',
  '/images/explore7.png',
  '/images/explore8.png',
  '/images/explore9.png',
]

const SectionTwo = () => {
  return (
    <section className='min-h-screen bg-pryBlack w-full flex flex-col items-start py-[10%]'>
      <div className='container flex-col-reverse lg:flex-row flex justify-between gap-[1rem] sm:gap-[3rem] lg:gap-[5rem] items-center'>
        <div className=" content-none bg-[#91775E] h-[0.8] w-full lg:hidden"></div>
        <div className="lg:w-[50%] flex min-h-[480px] items-center w-full">
          <Image
            src="/images/section2-one.svg"
            alt='misspepo'
            height={1000}
            width={1000}
            className='bg-cover w-full rounded-[30px]'
          />
        </div>
        <div className='flex flex-col gap-[2rem] items-start lg:w-[50%] w-full'>
          <p className='bricolage-grotesque text-[clamp(35px,4vw,52px)] leading-[120%] font-[400] text-pryWhite'>Your Event Deserves the Best Host</p>
          <p className='text-[clamp(18.5px,3.5vw,20px)] text-white font-[300]'>
            Ms. Pepo brings a unique flair to every event she hosts Her commitment to audience engagement and personalized experience ensures unforgettable moments for all
          </p>
        </div>
      </div>
      <div className='w-full container mt-[4.5rem] lg:mt-[10rem] flex flex-col gap-[2.5rem]'>
        <p className='text-[clamp(37px,5vw,52px)] md:hidden text-pryWhite bricolage-grotesque'>Explore Some <br />Moments from <br /> my Journey</p>
        <p className='text-[clamp(35px,4vw,52px)] hidden md:flex text-pryWhite bricolage-grotesque'>Explore Some Moments from <br /> my Journey</p>
        <div className="flex w-full gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
        >
          {exploreImages.map((card, index) => (
            <div key={index} className='flex-none'>
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
    </section>
  )
}

export default SectionTwo