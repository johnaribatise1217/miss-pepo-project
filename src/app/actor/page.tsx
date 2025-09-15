import React from 'react'
import Header from '@/components/Actor/Header'
import ActorMain from '@/components/Actor/Main'
import LastSection from '@/components/Actor/LastSection'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Miss Pepo | Actor | Me",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
  },
  description: "Bringing Characters to Life.",
  keywords: ["Miss Pepo", "Actor", "Onaopemipo Olatunde", "Actress", "Advertisement","Brand Ambassador", ],
  authors: [{ name: "Miss Pepo" }],
};

const ActorPage = () => {
  return (
    <div className='min-h-screen flex overflow-y-hidden flex-col w-full'>
      <Header/>
      <ActorMain/>
      <LastSection/>
    </div>
  )
}

export default ActorPage