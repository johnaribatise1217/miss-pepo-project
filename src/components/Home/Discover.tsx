import { CardData } from '@/app/lib/DiscoverCardData'
import React from 'react'
import DiscoverCard from '../Gen/DiscoverCard'

const Discover = () => {
  return (
    <section className='bg-pryBlack w-full min-h-[100vh] py-[8.5%]'>
      <div className='container text-white flex flex-col items-start gap-[2.5rem]'>
        <p className='bricolage-grotesque font-[400] leading-[120%] text-pryWhite max-w-[40%] text-[52px]'>
          Three Roles, One <br /> Power house
        </p>
        <p className='text-[18px] leading-[150%] w-[500px] font-[300] inter'>
          Charismatic, versatile, and unforgettable — Ms. 
          Pepo thrives as an acclaimed Event Host, Actor, and Content Creator, bringing unmatched energy to every platform.
        </p>
        <div className='w-full h-[534px] mt-[1rem] grid grid-cols-3 gap-[2rem]'>
          {CardData.map((card, index) => (
            <DiscoverCard 
              title={card.title}
              bgColor={card.bgColor}
              imgBg={card.imgBg}
              path={card.path}
              message={card.message}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Discover