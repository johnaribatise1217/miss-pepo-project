/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import React from 'react'
import { youtubeCard as data } from './data'
import YoutubeCard from './YoutubeCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

const SwiperImages : string[] = [
  '/images/actor1.svg',
  '/images/actor2.svg',
  '/images/actor3.svg',
  '/images/actor4.svg',
  '/images/actor5.svg',
]

const ActorMain = () => {
  return (
    <section className="bg-pryBlack min-h-screen py-[8.5%]">
      <div className='container flex text-pryWhite items-start
       flex-col bricolage-grotesque gap-[15rem] h-full'>
        <div className='first flex items-center w-full gap-[5rem] justify-between'>
          <div className='flex w-1/2'>
            <Image
              src="/images/actor3.svg"
              alt='actor'
              height={1000}
              width={1000}
              className='bg-cover w-[80%] rounded-[24px]'
            />
          </div>
          <div className=" flex flex-col gap-[2rem] items-start">
             <p className='bricolage-grotesque text-[clamp(28px,4.5vw,52px)] leading-[120%] text-white'>
              Experience my art <br /> of storytelling
            </p>
            <p className='text-[clamp(16px,3vw,18px)] leading-[150%] font-[200] inter'>
              Acting is where my voice, body, and emotion align to <br /> tell unforgettable stories. Whether on screen or stage, I <br /> bring every character to life with authenticity and depth <br /> — always leaving a lasting impression.
            </p>
            <button className='border-gray-500 text-[clamp(14px,1.6vw,16px)] px-6 py-4 rounded-[16px] border-b-4 border-[1px]'>Watch Me in Action</button>
          </div>
        </div>
        <div className='second text-pryWhite w-full flex flex-col bricolage-grotesque items-start gap-[2rem]'>
          <p className='text-[clamp(32px,4.5vw,53px)] leading-[120%]'>Your Rising Star of Dynamic Artistry</p>
          <p className='inter text-[clamp(16px,2.2vw,19px)] font-[200] w-full'>Ms. Pepo is an exceptional actor known for her dynamic performances and ability to embody diverse <br /> characters. With a passion for storytelling, she captivates audiences and leaves a lasting impression.</p>
          <div>
            <Swiper
              slidesPerView={3.5}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2.5
                },
                768: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 2.5,
                },
                1280: {
                  slidesPerView: 3.5,
                },
                1530: { 
                  slidesPerView: 3,
                }
              }}
              modules={[Autoplay, FreeMode, Thumbs]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              freeMode={true}
              // thumbs={{ swiper: thumbsSwiper }}
              watchSlidesProgress
              // onSwiper={setThumbsSwiper}
              mousewheel={true}
              navigation={true}
              className="container ml-[3rem] min-w-[100vw] overflow-visible"
            >
              {SwiperImages.map((image, index) => (
                <SwiperSlide key={index} className='z-1000 flex 2xl:h-[550px]  h-[500px]'>
                  {/* <img src={image} alt="image" className='object-contain h-[500px] rounded-[20px]' /> */}
                  <Image
                    src={image}
                    alt="image"
                    width={500}
                    height={500}
                    className='object-cover 2xl:w-[400px] 2xl:h-[550px] h-[500px] rounded-[20px]'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='w-full flex items-center justify-between bricolage-grotesque gap-[3rem]'>
          <div className='w-1/2'>
            <Image
              src="/images/explore.svg"
              alt='explore'
              height={500}
              width={500}
              className='object-cover rounded-[20px] w-full h-[576px]'
            />
          </div>
          <div className='w-[40%] flex flex-col gap-[1rem]'>
            <p className='text-[52px] leading-[120%] font-[400]'>Explore Casting <br /> Opportunities <br />with Me</p>
            <p className='text-justify w-full text-[28px] font-[200]'>
              I am Open to Casting for Films <br /> and TV Shows
            </p>
            <small className='inter text-[18px] leading-[150%] font-[200]'>Lets join forces to create  your next film project</small>
          </div>
        </div>
        <div className='last flex flex-col w-full gap-[3rem]'>
          <p className="first text-[52px] text-pryWhite leading-[120%]">
            Some Projects I have <br /> Featured In
          </p>
          <div className="youtube w-full grid sm:grid-cols-1 lg:grid-cols-2 place-items-start gap-[2.5rem]">
            {data.map((card, index : number) => (
              <YoutubeCard 
                key={index}
                subtitle={card.subtitle}  
                href={card.href}
                videoId={card.videoId}
                duration={card.duration}
                title={card.title}
                thumbnail={card.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActorMain