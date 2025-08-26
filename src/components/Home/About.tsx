import React from 'react'
import Image from 'next/image'
import { forwardRef } from 'react'

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className='bg-brown min-h-[100vh] w-full py-[10%]'>
      <div className='container flex-col w-full lg:justify-between lg:flex-row lg:items-center flex xl:items-start h-full justify-between gap-[5rem]'>
        <div className='left flex text-pryWhite flex-col gap-[2rem] w-full items-start lg:w-1/2'>
          <p className='text-[clamp(35px,6vw,56px)] leading-[120%] bricolage-grotesque'>
            Let me introduce <br /> myself! I’m so glad <br /> you are here.
          </p>
          <p className='inter text-[clamp(16px,3vw,18.5px)] leading-[150%] font-[300]'>
            I’m Onaopemipo Olatunde, but 99.999999% call me Pepo, a big energy, good vibes kind of girl who believes in showing up fully, whether I’m hosting an event, creating content, or just  making someone smile. I’m all about connection, creativity, and leaving a little sparkle wherever I go.
          </p>
          <p className='inter text-[clamp(16px,3vw,18px)] leading-[150%] font-[300]'>
            Over the years, I’ve worn many hats—Content Creator, Event Host, Brand Influencer, Creative Strategist, Hype Woman, and a little bit of corporate baddie, and everything in between. But at the heart of it all, I love bringing people together and making moments feel unforgettable.
          </p>
          <p className='inter text-[clamp(16px,3vw,18px)] leading-[150%] font-[300]'>
            This space is a little piece of my world where you’ll find my latest projects, collaborations, behind-the-scenes chaos (the fun kind), and whatever else I feel like sharing with my community. If you love laughter, real talk, and a little bit of  glam with your hustle, you’ll fit right in. Let’s vibe, grow, and  make magic together.
          </p>
        </div>
        <div className='right lg:w-1/2 w-full'>
          <Image
            src="/images/about.svg"
            alt="About Ms.Pepo"
            loading='lazy'
            width={100}
            height={100}
            className='w-full h-full rounded-[30px] object-cover'
          />
        </div>
      </div>
    </section>
  )
})

About.displayName = "About";

export default About