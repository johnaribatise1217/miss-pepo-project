'use client'
import { InstagramData } from '@/app/lib/InstagramData'
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react'
import { FaRegHeart } from "react-icons/fa6";

const InstagramCard = ({image , caption1, caption2, likes, date, link} : InstagramData) => {
  const [expand, setExpand] = useState(false) 
  return (
    <div className='w-full flex flex-col items-start gap-[1.5rem]'>
      <div className={`${image} cursor-pointer bg-cover bg-no-repeat w-full min-h-[400px] flex rounded-[24px] relative`}>
        <span className='flex items-end px-3 py-5 text-[16px] text-pryWhite '>
          <FaRegHeart className='text-[24px] text-white mr-[0.5rem]' />
          {likes}
        </span>
      </div>
      {expand ? 
        <p onClick={() => setExpand(false)} className='w-full cursor-pointer text-[16px] leading-[150%] inter text-pryWhite'>
          {caption2}
        </p>
         : 
        <div className='w-full text-[16px] cursor-pointer leading-[150%] inter text-pryWhite flex' >
          {caption1} <span onClick={() => setExpand(true)}>...</span>
        </div>
      }
      <div className="flex w-full inter items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/instagram-icon.svg"
            alt="instagram"
            height={30}
            width={30}
            className='object-cover h-[2rem] w-[2rem] rounded-full'
          />
          <Link href={link} target="_blank" rel="noopener noreferrer" className='ml-2 text-pryWhite text-[16px]'>
            <span className='text-[16px] text-pryWhite ml-[0.5rem]'>mspepo</span>
          </Link>
        </div>
        <span className='text-[#4D4D4D] text-[14px]'>{date}</span>
      </div>
    </div>
  )
}

export default InstagramCard