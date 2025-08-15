/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <section className="h-[125vh] w-full bg-bgAct bg-no-repeat bg-cover pt-[6rem]">
      <div className="container h-full flex justify-between mt-[3rem] gap-[3rem] w-full">
        <div className="left flex flex-col items-start mt-[1.5rem] w-full gap-[2rem] bricolage-grotesque">
          <p className='text-white 2xl:text-[80px] xl:text-[70px] leading-[110%] tracking-[-1%] font-[400]'>Actor and <br />Scene-Stealer</p>
          <p className='text-white inter text-[20px] text-wrap leading-[150%] tracking-[-0.5%] font-[200]'>
            On screen, I don’t just play roles. I embody <br />them with creative precision and emotional <br />depth, I bring each character to life with <br /> intention and impact.
          </p>
          <Link
            href="https://www.instagram.com/reel/DBdfolJp8oq/?igsh=MTUxZzQzNzN4Z3Rxcw%3D%3D"
            target="_blank" rel="noopener noreferrer"
          >
            <button className='text-black border-b-[5px] bg-white px-6 inter rounded-[16px] py-4'>Watch Me Act</button>
          </Link>
        </div>
        <div className="right h-full w-full">
          
        </div>
      </div>
    </section>
  )
}

export default Header