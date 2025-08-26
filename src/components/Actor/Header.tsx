/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <section className="lg:min-h-[115vh] bg-actorMobile bg-cover sm:bg-center min-h-[124vh] max-w-full lg:bg-bgAct bg-no-repeat lg:bg-cover pt-[6rem]">
      <div className="container h-full flex justify-between mt-[4rem] sm:my-[10%] w-full">
        <div className="left flex flex-col items-start w-full gap-[1.5rem] bricolage-grotesque">
          <p className='text-white text-[clamp(60px,5vw,112px)] hidden lg:flex leading-[110%] tracking-[-1%] font-[400]'>Actor and <br />Scene-Stealer</p>
          <p className='text-white lg:hidden text-[clamp(65px,5vw,112px)] leading-[110%] tracking-[-1%] font-[400]'>Bringing <br />Characters <br />to Life</p>
          <p className='text-white inter hidden lg:flex text-[20px] text-wrap leading-[150%] tracking-[-0.5%] font-[300]'>
            On screen, I don’t just play roles. I embody <br />them with creative precision and emotional <br />depth, I bring each character to life with <br /> intention and impact.
          </p>
          <p className='text-white lg:hidden text-[19px] leading-[150%] tracking-[-0.5%] font-[300]'>
            As a talented actor with creative artistry on screen ,I pride myself with the perfect character interpretation of roles I play
          </p>
          <Link
            href="https://www.instagram.com/reel/DBdfolJp8oq/?igsh=MTUxZzQzNzN4Z3Rxcw%3D%3D"
            target="_blank" rel="noopener noreferrer"
            className='w-full'
          >
            <button className='text-black lg:w-auto w-full border-b-[5px] bg-white px-6 inter rounded-[16px] py-4'>Watch Me Act</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header