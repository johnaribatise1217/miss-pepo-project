import React from 'react'
import Hero from '@/components/Influencer/Hero'
import { Metadata } from 'next';
import Main from '@/components/Influencer/Main';
import Contact from '@/components/Home/Contact';

export const metadata: Metadata = {
  title: "Miss Pepo | Content Creator",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
  },
  description: "Content Creator with Passion",
  keywords: ["Miss Pepo", "Influencer", "Content Creator", "Social Media", "Brand Ambassador"],
  authors: [{ name: "Miss Pepo" }],
};

const Influencer = () => {
  return (
    <div className='min-h-screen flex overflow-auto flex-col w-full'>
      <Hero/>
      <Main/>
      <Contact/>
    </div>
  )
}

export default Influencer