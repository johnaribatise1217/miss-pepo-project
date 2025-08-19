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
  '/images/explore6.png',
  '/images/explore3.jpg',
  '/images/explore2.svg',
  '/images/explore4.svg',
  '/images/explore5.png',
  '/images/explore7.png',
  '/images/explore8.png',
  '/images/explore9.png',
]

const SectionTwo = () => {
  return (
    <section className='min-h-[100vh] bg-pryBlack w-full flex flex-col items-start py-[8.5%]'>
      <div className='container flex justify-between gap-[5rem] items-center'>
        <div className="w-[50%] rounded-[20px]">
          <Image
            src="/images/section2-one.svg"
            alt='misspepo'
            height={100}
            width={100}
            className='bg-cover w-full min-h-[500px] rounded-[20px]'
          />
        </div>
        <div className='flex flex-col gap-[2rem] items-start w-[50%]'>
          <p className='bricolage-grotesque text-[clamp(20px,4vw,52px)] leading-[120%] font-[400] text-pryWhite'>Your Event Deserves the Best Host</p>
          <p className='text-[18px] text-white font-[300]'>
            Ms. Pepo brings a unique flair to every event she hosts.<br/> Her commitment to audience engagement and
            <br/> personalized experience ensures unforgettable <br/> moments for all
          </p>
        </div>
      </div>
      <div className='w-full container mt-[10rem] flex flex-col gap-[2.5rem]'>
        <p className='text-[clamp(20px,4vw,52px)] text-pryWhite bricolage-grotesque'>Explore Captivating Moments <br/> from my Journey</p>
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
                slidesPerView: 3.5,
              },
              1500:{
                slidesPerView: 3.5,
              }
            }}
            modules={[Autoplay, FreeMode]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
            mousewheel={true}
            navigation={true}
            className="container min-w-[100vw] ml-[5rem] overflow-visible"
          >
            {exploreImages.map((image, index) => (
              <SwiperSlide key={index} className='flex h-[500px]'>
                <Image
                  src={image}
                  alt={`explore-image-${index}`}
                  width={500}
                  height={500}
                  className='w-full h-[500px] object-cover rounded-[20px]'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo