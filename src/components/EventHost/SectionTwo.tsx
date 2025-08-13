/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

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
    <section className='min-h-[100vh] bg-pryBlack w-full flex flex-col items-start py-[8.5%]'>
      <div className='container flex justify-between gap-[4rem] items-center'>
        <Image
          src="/images/section2-one.svg"
          alt='misspepo'
          height={100}
          width={100}
          className='bg-cover w-[576px] h-[576px] rounded-[20px]'
        />
        <div className='flex flex-col gap-[2rem] items-start w-[40%]'>
          <p className='text-[16px] inter text-pryWhite font-[600]'>Why Choose Ms. Pepo</p>
          <p className='bricolage-grotesque text-[52px] leading-[120%] font-[400] text-pryWhite'>Your Event Deserves the Best Host</p>
          <p className='text-[18px] text-white font-[300]'>
            Ms. Pepo brings a unique flair to every event she hosts.<br/> Her commitment to audience engagement and
            <br/> personalized experience ensures unforgettable <br/> moments for all
          </p>
        </div>
      </div>
      <div className='w-full container mt-[10rem] flex flex-col gap-[2.5rem]'>
        <p className='text-[52px] text-pryWhite bricolage-grotesque'>Explore Captivating Moments <br/> from my Journey</p>
        <div>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2.5
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 1.8,
              },
            }}
            modules={[Autoplay, FreeMode]}
            mousewheel={true}
            navigation={true}
            className="container min-w-[100vw] overflow-visible"
          >
            {exploreImages.map((image, index) => (
              <SwiperSlide key={index} className='flex'>
                <img src={image} alt="image" className='rounded-[20px] object-contain max-h-[500px]'/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo