import React from 'react'
import Link from 'next/link'
import InstagramCard from './InstagramCard'
import { instagramPosts } from '@/app/lib/InstagramData'
import YoutubeCard from '../Actor/YoutubeCard'
import { InfluencerYoutubeData } from '../Actor/data'
import Script from 'next/script';
import { TikTokEmbed, InstagramEmbed } from './SocialComponents'

const TikTokBg = [
  'bg-tiktok1',
  'bg-tiktok2',
  'bg-tiktok3',
  'bg-tiktok4',
]

const instagramPostLinks = [
  'https://www.instagram.com/reel/C2scO0NJtyM/?igsh=MWt3OTlubjNtczlkbQ%3D%3D',
  'https://www.instagram.com/p/DBjVl86J7xz/?utm_source=ig_web_copy_link', // Reel: Example reel
  'https://www.instagram.com/reel/DBdfolJp8oq/?igsh=MTUxZzQzNzN4Z3Rxcw%3D%3D',, // Tennis: "There's NOTHING you can tell me..."
  'https://www.instagram.com/p/DDuSggzpsXz/?utm_source=ig_web_copy_link', // New York: "Went to New York for Vibes over..." // Wedding: "Hosted this Wedding in October..."
];

const tikTokVideos = [
  'https://www.tiktok.com/@mspepo/video/7507632986695699717', // Dance Trend (131.3K likes)
  'https://www.tiktok.com/@mspepo/video/7509934977652395272', // Please Sir don't do it (34 likes)
  'https://www.tiktok.com/@mspepo/video/7497981290495413510', // On this day (139 likes)
  // Add a fourth example or replace; fetch more from her profile if needed
  'https://www.tiktok.com/@mspepo/video/7506456342891302167', // Workout video (example from related search)
];

const Main = () => {
  return (
    <section className='bg-pryBlack min-h-screen overflow-auto py-[10%]'>
      <div className="container flex text-pryWhite items-start
       flex-col bricolage-grotesque gap-[8rem] lg:gap-[15rem] h-full">
        <div className="one w-full flex items-start flex-col gap-[2rem]">
          <div className="flex-col lg:flex-row flex w-full lg:justify-between lg:items-end">
            <span className='text-[clamp(38px,4vw,52px)] w-full leading-[120%]'>
              Featured Instagram <br /> Content of Ms. Pepo
            </span>
            <Link 
              href="https://www.instagram.com/mspepo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='inter text-[16px] hidden lg:flex border-2 p-4 px-6 rounded-[16px] border-b-[5px] border-[#343434]'>View More</button>
            </Link>
          </div>
          <div className="flex w-full gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
          >
            {instagramPostLinks.map((url, index) => (
            <div key={index} className="flex-shrink-0">
              <InstagramEmbed postUrl={url} />
            </div>
          ))}
          </div>
          <div className="hidden  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] w-full">
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
          <div className="flex-col lg:flex-row flex w-full lg:justify-between lg:items-end">
            <span className='text-[clamp(36px,4vw,52px)] leading-[120%]'>
              My Featured YouTube <br /> Contents
            </span>
            <Link 
              href="https://www.youtube.com/@MsPepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='inter text-[16px] hidden lg:flex border-2 p-4 px-6 rounded-[16px] border-b-[5px] border-[#343434]'>View More</button>
            </Link>
          </div>
          <div className="youtube w-full grid sm:grid-cols-1 lg:grid-cols-2 place-items-start gap-[2.5rem]">
            {InfluencerYoutubeData.map((card, index : number) => (
              <YoutubeCard 
                key={index}
                href={card.href}
                videoId={card.videoId}
                duration={card.duration}
                title={card.title}
                thumbnail={card.thumbnail}
              />
            ))}
          </div>
          <Link 
            href="https://www.youtube.com/@MsPepo"
            target="_blank"
            className='w-full'
            rel="noopener noreferrer"
          >
            <button className='inter text-[16px] lg:hidden w-full border-2 p-4 px-6 rounded-[16px] border-b-[5px] border-[#343434]'>View More</button>
          </Link>
        </div>
        <div className="four w-full flex items-start flex-col gap-[2rem] mb-[3rem]">
          <div className="flex-col lg:flex-row flex w-full lg:justify-between lg:items-end">
            <span className='text-[clamp(38px,4vw,52px)] leading-[120%]'>
              Featured TikTok Content of Ms. Pepo
            </span>
            <Link 
              href="https://www.tiktok.com/@mspepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='inter text-[16px] hidden lg:flex border-2 p-4 px-6 rounded-[16px] border-b-[5px] border-[#343434]'>View More</button>
            </Link>
          </div>
          <div className="flex w-full gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
          >
            {tikTokVideos.map((url, index) => (
              <div key={index} className="flex-shrink-0">
                <TikTokEmbed videoUrl={url} />
              </div>
            ))}
          </div>
          <div className='hidden grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[2rem] w-full'>
            {TikTokBg.map((bgClass, index) => (
              <div key={index} className={`relative cursor-pointer flex items-end ${bgClass} h-[460px] rounded-[20px] bg-cover bg-no-repeat`}>
                <span className="bg-[#D8515E] relative top-0 content-none h-[4px] w-[80%] rounded-[10px] ml-[0.8rem]"></span>
              </div>
            ))}
          </div>
          <Link 
            href="https://www.tiktok.com/@mspepo"
            target="_blank"
            className='w-full'
            rel="noopener noreferrer"
          >
            <button className='inter text-[16px] lg:hidden w-full border-2 p-4 px-6 rounded-[16px] border-b-[5px] border-[#343434]'>View More</button>
          </Link>
        </div>
      </div>
      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </section>
  )
}

export default Main