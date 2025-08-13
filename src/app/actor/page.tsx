import React from 'react'
import Header from '@/components/Actor/Header'
import ActorMain from '@/components/Actor/Main'
import LastSection from '@/components/Actor/LastSection'

const ActorPage = () => {
  return (
    <div className='min-h-screen flex overflow-hidden flex-col w-full'>
      <Header/>
      <ActorMain/>
      <LastSection/>
    </div>
  )
}

export default ActorPage