'use client'
import About from '@/components/Home/About'
import Discover from '@/components/Home/Discover'
import Header from '@/components/Home/Header'
import React, { useRef } from 'react'

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