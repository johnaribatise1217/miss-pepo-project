'use client'
import { CardData } from '@/app/lib/DiscoverCardData'
import React from 'react'
import DiscoverCard from '../Gen/DiscoverCard'
import {AnimatePresence, motion} from 'framer-motion'

const Discover = () => {
  return (
    <section className='bg-pryBlack w-full min-h-[100vh] py-[8.5%]'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }} // triggers when 20% in view
        className="py-3"
      >
        <div className='container text-white flex flex-col items-start gap-[2.5rem]'>
          <p className='bricolage-grotesque leading-[120%] text-pryWhite text-[clamp(35px,6vw,56px)]'>
            Three Roles, One <br /> Power house
          </p>
          <p className='inter text-[clamp(16px,3vw,18px)] leading-[150%] max-w-[500px] font-[300]'>
            Charismatic, versatile, and unforgettable — Ms. Pepo thrives as an acclaimed Event Host, Actor, and Content Creator, bringing unmatched energy to every platform.
          </p>
          <div className='w-full hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <AnimatePresence mode="wait">
              {CardData.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                <DiscoverCard 
                  title={card.title}
                  bgColor={card.bgColor}
                  imgBg={card.imgBg}
                  path={card.path}
                  message={card.message}
                  key={index}
                />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex w-full gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth md:hidden"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
          >
            <AnimatePresence mode="wait">
              {CardData.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                  className='flex-none w-[280px]'
                >
                  <DiscoverCard 
                    title={card.title}
                    bgColor={card.bgColor}
                    imgBg={card.imgBg}
                    path={card.path}
                    message={card.message}
                    key={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Discover