'use client'
import About from '@/components/Home/About'
import Discover from '@/components/Home/Discover'
import Header from '@/components/Home/Header'
import { Metadata } from 'next'
import React, { useRef } from 'react'

export const metadata: Metadata = {
  title: "Miss Pepo | Onaopemipo Olatunde | Me",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
  },
  description: "Miss Pepo - Where the Vibe Begins.",
  keywords: ["Miss Pepo", "Influencer", "Content Creator", "Social Media", "Brand Ambassador", ],
  authors: [{ name: "Miss Pepo" }],
};

const Home = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  return (
    <div className='min-h-screen flex overflow-auto flex-col w-full'>
      <Header aboutRef={aboutRef}/>
      <About ref={aboutRef}/>
      <Discover/>
    </div>
  )
}

export default Home