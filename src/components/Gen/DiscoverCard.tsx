import Image from 'next/image'
import React from 'react'
import type { DiscoverCard } from '@/app/lib/DiscoverCardData'
import Link from 'next/link'

const DiscoverCard = ({imgBg, path, bgColor, title, message} : DiscoverCard) => {
  return (
    <div className="relative group h-full font-bricolage overflow-hidden rounded-[30px]">
      <Image
        src={imgBg}
        alt={`${title}`}
        height={100}
        width={100}
        className="w-full h-full object-cover rounded-[30px] scale-110 transition-all duration-500 group-hover:scale-95"
      />

      <div className=
        {`${bgColor}
          absolute inset-0 bg-black bg-opacity-80 transition-all duration-500 group-hover:bg-opacity-0 z-10
        `}></div>

      <div className="absolute bricolage-grotesque  bottom-6 left-6 text-white mb-[20px] w-1/2 leading-[120%] text-[45px] transition-all duration-700 delay-100 group-hover:mb-[7rem] font-[400] z-20">
        {title}
      </div>
      <div className="absolute bricolage-grotesque bottom-2 mb-[10px] left-6 text-white w-full text-[16px] transition-all duration-700 delay-100 group-hover:mb-[7rem] font-[200] z-20">
        {message}
      </div>

      <div className="absolute bottom-[-100%] left-0 w-full px-6 text-white text-sm transition-all duration-700 delay-100 group-hover:bottom-10 z-20">
        <Link href={path}>
          <button className="bg-pryPablo text-[16px] font-[700] text-white shadow-[0_6px_0_0_#5e5547] px-4 py-4 rounded-md">Show More</button>
        </Link>
      </div>
    </div>
  )
}

export default DiscoverCard