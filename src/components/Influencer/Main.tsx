import React from 'react'
import Link from 'next/link'
import InstagramCard from './InstagramCard'
import { instagramPosts } from '@/app/lib/InstagramData'
import YoutubeCard from '../Actor/YoutubeCard'
import { youtubeCard as data } from '../Actor/data'

const TikTokBg = [
  'bg-tiktok1',
  'bg-tiktok2',
  'bg-tiktok3',
  'bg-tiktok4',
]

const Main = () => {
  return (
    <section className='bg-pryBlack min-h-screen overflow-auto py-[10%]'>
      <div className="container flex text-pryWhite items-start
       flex-col bricolage-grotesque gap-[15rem] h-full">
        <div className="one w-full flex items-start flex-col gap-[2rem]">
          <div className="lg:flex w-full block justify-between lg:items-end">
            <span className='text-[clamp(39px,4vw,52px)] w-full leading-[120%]'>
              Featured Instagram <br /> Content of Ms. Pepo
            </span>
            <Link 
              href="https://www.instagram.com/mspepo/"
              className='lg:flex hidden'
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='inter w-full  text-[16px] border-2 p-4 px-6 rounded-[16px] border-b-[5px] border-[#343434]'>View More</button>
            </Link>
          </div>
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] w-full">
            {instagramPosts.map((post, index) => (
              <InstagramCard
                key={index}
                link={post.link}
                image={post.image}
                caption1={post.caption1}
                caption2={post.caption2}
                likes={post.likes}
                date={post.date}
              />
            ))}
          </div>
        </div>
        <div className="two w-full flex items-start flex-col gap-[2rem]">
          <div className="flex w-full justify-between items-end">
            <span className='text-[52px] leading-[120%]'>
              My Featured YouTube <br /> Contents
            </span>
            <Link 
              href="https://www.instagram.com/mspepo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='inter text-[16px] border-2 p-4 px-6 rounded-[16px] border-b-[5px] border-[#343434]'>View More</button>
            </Link>
          </div>
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
        <div className="four w-full flex items-start flex-col gap-[2rem]">
          <div className="flex w-full justify-between items-end">
            <span className='text-[52px] leading-[120%]'>
              Featured TikTok Content <br /> of Ms. Pepo
            </span>
            <Link 
              href="https://www.tiktok.com/@mspepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='inter text-[16px] border-2 p-4 px-6 rounded-[16px] border-b-[5px] border-[#343434]'>View More</button>
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[2rem] w-full'>
            {TikTokBg.map((bgClass, index) => (
              <div key={index} className={`relative cursor-pointer flex items-end ${bgClass} h-[460px] rounded-[20px] bg-cover bg-no-repeat`}>
                <span className="bg-[#D8515E] relative top-0 content-none h-[4px] w-[80%] rounded-[10px] ml-[0.8rem]"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main