/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <section className="lg:min-h-[115vh] bg-actorMobile bg-cover sm:bg-center min-h-[124vh] max-w-full lg:bg-bgAct bg-no-repeat lg:bg-cover pt-[6rem]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-3 w-full"
      >
        <div className="container h-full flex justify-between mt-[4rem] sm:my-[10%] w-full">
          <div className="left flex flex-col items-start w-full gap-[1.5rem] bricolage-grotesque">

            {/* --- Large Screen Text --- */}
            <p className='hidden lg:flex text-white leading-[110%] tracking-[-1%] font-[400] overflow-hidden text-[clamp(50px,6vw,100px)]'>
              Actor and <br /> Scene-Stealer
            </p>

            {/* --- Mobile / Tablet Text --- */}
            <p className='lg:hidden text-white overflow-y-hidden leading-[110%] tracking-[-1%] font-[400] text-[clamp(42px,8vw,80px)]'>
              Bringing <br /> Characters <br /> to Life
            </p>

            {/* --- Paragraph (Desktop) --- */}
            <p className='hidden lg:flex text-white inter text-[clamp(16px,1.3vw,20px)] text-wrap leading-[150%] tracking-[-0.5%] font-[300]'>
              On screen, I don’t just play roles. I embody <br />them with creative precision and emotional <br />depth. I bring each character to life with <br /> intention and impact.
            </p>

            {/* --- Paragraph (Mobile) --- */}
            <p className='lg:hidden text-white inter text-[clamp(17px,4vw,19px)] leading-[150%] tracking-[-0.5%] font-[300]'>
              As a talented actor with creative artistry on screen, I pride myself with the perfect character interpretation of roles I play.
            </p>

            {/* --- Button --- */}
            <Link
              href="https://www.instagram.com/reel/DBdfolJp8oq/?igsh=MTUxZzQzNzN4Z3Rxcw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className='w-full'
            >
              <button className='text-black lg:w-auto w-full border-b-[5px] bg-white px-6 inter rounded-[16px] py-4 text-[clamp(14px,1.3vw,18px)]'>
                Watch Me Act
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Header
