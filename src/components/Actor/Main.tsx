/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import React from 'react'
import { youtubeCard as data } from './data'
import YoutubeCard from './YoutubeCard'

const SwiperImages : string[] = [
  '/images/actor1.svg',
  '/images/actor2.svg',
  '/images/actor3.svg',
  '/images/actor4.svg',
  '/images/actor5.svg',
]

const ActorMain = () => {
  return (
    <section className="bg-pryBlack min-h-screen py-[10%]">
      <div className='container flex text-pryWhite items-start
       flex-col bricolage-grotesque gap-[7rem] lg:gap-[15rem] h-full'>
        <div className='first flex-col-reverse lg:flex-row lg:gap-[6rem] flex lg:items-center w-full gap-[5rem] justify-between'>
          <button className='border-gray-500 w-full lg:hidden text-[clamp(16px,2vw,18px)] px-6 py-5 rounded-[16px] border-b-4 border-[1px]'>Watch Me in Action</button>
          <div className='flex h-[500px] lg:h-[600px] w-full lg:w-1/2'>
            <Image
              src="/images/actor3.svg"
              alt='actor'
              height={1000}
              width={1000}
              className='object-cover h-full w-full lg:w-full rounded-[24px]'
            />
          </div>
          <div className="flex flex-col lg:w-1/2 gap-[2rem] items-start">
             <p className='bricolage-grotesque text-[clamp(38px,4vw,52px)] leading-[120%] text-white'>
              Experience my art <br /> of storytelling
            </p>
            <p className='text-[clamp(18px,3vw,18px)] hidden lg:flex leading-[150%] font-[300] inter'>
              Acting is where my voice, body, and emotion align to <br /> tell unforgettable stories. Whether on screen or stage, I bring every character to life with authenticity and depth <br /> — always leaving a lasting impression.
            </p>
            <p className='text-[clamp(18px,3vw,18px)] lg:hidden leading-[150%] font-[300] inter'>
              Acting is where my voice, body, and emotion align to  tell unforgettable stories. Whether on screen or stage, I bring every character to life with authenticity and depth — always leaving a lasting impression.
            </p>
            <button className='border-gray-500 hidden lg:flex text-[clamp(14px,1.6vw,16px)] px-6 py-4 rounded-[16px] border-b-4 border-[1px]'>Watch Me in Action</button>
          </div>
        </div>
        <div className='second text-pryWhite w-full flex flex-col bricolage-grotesque items-start gap-[2rem]'>
          <p className='text-[clamp(38px,4vw,53px)] leading-[120%]'>Your Rising Star of Dynamic Artistry</p>
          <p className='inter hidden lg:flex text-[clamp(17px,3vw,19px)] font-[300] w-full'>Ms. Pepo is an exceptional actor known for her dynamic performances and ability to embody diverse <br /> characters. With a passion for storytelling, she captivates audiences and leaves a lasting impression.</p>
          <p className='inter lg:hidden text-[clamp(18px,3vw,19px)] font-[300] w-full'>Ms. Pepo is an exceptional actor known for her dynamic performances and ability to embody diverse characters. With a passion for storytelling, she captivates audiences and leaves a lasting impression.</p>
          <div className="flex w-full gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
          >
            {
              SwiperImages.map((card, index) => (
                <div className="flex-none" key={index}>
                  <Image
                    src={card}
                    alt={`explore-image-${index}`}
                    width={500}
                    height={500}
                    className='w-auto h-[400px] md:h-[500px] object-cover rounded-[20px]'
                  />
                </div>
              ))
            }
          </div>
          <div className="flex content-none bg-[#C18E68] h-[0.5] mt-[3rem] lg:hidden w-full"></div>
        </div>
        <div className='w-full flex-col lg:flex-row flex lg:items-center justify-between bricolage-grotesque gap-[4rem]'>
          <div className='lg:w-1/2 w-full'>
            <Image
              src="/images/explore.svg"
              alt='explore'
              height={500}
              width={500}
              className='object-cover rounded-[20px] w-full h-[450px] md:h-[576px]'
            />
          </div>
          <div className='lg:w-[40%] w-full flex flex-col gap-[1rem]'>
            <p className='text-[clamp(39px,4vw,53px)] leading-[120%] font-[400]'>Explore Casting <br /> Opportunities <br />with Me</p>
            <p className='text-justify w-full text-[clamp(22px,3vw,28.5px)] font-[200]'>
              I am Open to Casting for Films <br /> and TV Shows
            </p>
            <small className='inter text-[16px] md:text-[18px] leading-[150%] font-[200]'>Lets join forces to create  your next film project</small>
          </div>
        </div>
        <div className='last flex flex-col w-full gap-[3rem]'>
          <p className="first text-[clamp(37px,3.5vw,53px)] text-pryWhite leading-[120%]">
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