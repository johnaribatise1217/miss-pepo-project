/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import Link from 'next/link'

const YoutubeCard = ({ videoId, title, duration, subtitle, href } : any) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full group"
    >
      <div className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden mb-4">
        <iframe
          loading='lazy'
          src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&showinfo=0`}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-0.5 rounded">
          {duration}
        </span>
      </div>

      <h2 className="text-white text-[21px] md:text-[28px] leading-[140%] font-[200] bricolage-grotesque mb-2 truncate">
        {title}
      </h2>
      {subtitle && (
        <p className="text-pryWhite font-[200] inter text-[18px] mb-3">
          {subtitle}
        </p>
      )}
    </Link>
  )
}

export default YoutubeCard