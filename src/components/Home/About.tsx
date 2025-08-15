import React from 'react'
import Image from 'next/image'
import { forwardRef } from 'react'

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className='bg-brown min-h-[100vh] w-full py-[8.5%]'>
      <div className='container flex items-start h-full justify-between gap-[5rem]'>
        <div className='left flex text-pryWhite flex-col gap-[2rem] items-start w-1/2'>
          <p className='text-[52px] leading-[120%] bricolage-grotesque'>Let me introduce <br /> myself! I’m so glad <br /> you are here.</p>
          <p className='inter text-clamp text-[18px] font-[300]'>
            I’m Onaopemipo Olatunde, but 99.999999% call me Pepo, a <br />big energy, good vibes kind of girl who believes in showing up <br /> fully, whether I’m hosting an event, creating content, or just <br /> making someone smile. I’m all about connection, creativity, <br /> and leaving a little sparkle wherever I go.
          </p>
          <p className='inter text-[18px] font-[300]'>
            Over the years, I’ve worn many hats—Content Creator, Event <br />Host, Brand Influencer, Creative Strategist, Hype Woman, and <br /> a little bit of corporate baddie, and everything in between. But <br /> at the heart of it all, I love bringing people together and <br /> making moments feel unforgettable.
          </p>
          <p className='inter text-[18px] font-[300]'>
            This space is a little piece of my world where you’ll find my <br /> latest projects, collaborations, behind-the-scenes chaos (the <br /> fun kind), and whatever else I feel like sharing with my <br /> community. If you love laughter, real talk, and a little bit of <br /> glam with your hustle, you’ll fit right in. Let’s vibe, grow, and <br /> make magic together.
          </p>
        </div>
        <div className='right w-1/2'>
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