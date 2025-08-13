/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const YoutubeCard = ({ videoId, title, duration, subtitle, thumbnail, href } : any) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className="block w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[320px] rounded-xl overflow-hidden mb-4">
        {!isHovered ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-fill transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
            className="w-full h-full"
            allow="autoplay"
            frameBorder="0"
          />
          
        )}

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/QZqfK5uHlEI?si=oqSufKPpIOgux1BG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

        <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded">
          {duration}
        </span>
      </div>

      <h2 className="text-white text-[28px] leading-[140%] font-[200] bricolage-grotesque mb-2 truncate">{title}</h2>
      <p className="text-pryWhite font-[200] inter text-[18px] mb-3">
        {subtitle}
      </p>

      {/* <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag : string, idx : number) => (
          <span key={idx} className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <span className="text-sm text-white underline">View project →</span> */}
    </Link>
  )
}

export default YoutubeCard