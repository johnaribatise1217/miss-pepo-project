import React from 'react'

const Hero = () => {
  return (
    <div className='relative influencer-bg max-w-full block h-[110vh] pt-[6rem]'>
      <div className="container h-full">
        <div className="flex h-full gap-[5rem] bricolage-grotesque items-start">
          <div className="left flex flex-col items-start gap-[1rem] my-[10%] text-pryWhite">
            <span className='text-[clamp(30px,6vw,90px)] w-full leading-[120%]'>
              Content <br /> Creator with <br /> Passion
            </span>
            <p className='inter text-[clamp(16px,2.2vw,22px)] font-[300] leading-[150%]'>
              Hi! I&#39;m a Content Creator who enjoys <br /> connecting with my community. Join me on <br />this journey to build a vibrant community!
            </p>
            <button className='rounded-[16px] text-[clamp(14px,1.6vw,16px)] px-3 py-5 inter border-b-[5px] bg-white text-pryBlack'>
              Let&#39;s collaborate
            </button>
          </div>
          <div className='w-[50%] h-full'>
            {/* <Image
              src="/images/influence.svg"
              alt='influencer'
              loading='lazy'
              height={500}
              width={500}
              className='w-full h-full object-contain'
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero