import React from 'react'
import Header from '@/components/EventHost/Header'
import SectionTwo from '@/components/EventHost/SectionTwo'
import Testimonial from '@/components/EventHost/Testimonial/Testimonial'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Miss Pepo | Event Host | Me",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
  },
  description: "As an expert event host, I transform your event into an unforgettable occasion that will always linger in your mind.",
  keywords: ["Miss Pepo", "Event Host", "Onaopemipo Olatunde", "Event", "Master Of Ceremony","Brand Ambassador", ],
  authors: [{ name: "Miss Pepo" }],
};

const EventHost = () => {
  return (
   <div className='min-h-screen flex overflow-hidden flex-col w-full'>
    <Header/>
    <SectionTwo/>
    <Testimonial/>
   </div>
  )
}

export default EventHost