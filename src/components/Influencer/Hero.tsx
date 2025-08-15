import React from 'react'

const Hero = () => {
  return (
    <div className='relative influencer-bg max-w-full block h-[115vh] pt-[6rem]'>
      <div className="container h-full">
        <div className="flex h-full gap-[5rem] bricolage-grotesque items-start">
          <div className="left flex flex-col items-start gap-[1rem] my-[4rem] text-pryWhite">
            <span className='xl:text-[70px] 2xl:text-[100px] leading-[120%]'>Content <br /> Creator with <br /> Passion</span>
            <p className='inter xl:text-[18px] 2xl:text-[22px] font-[300]'>
              Hi! I&#39;m a Content Creator who enjoys <br /> connecting with my community. Join me on <br />this journey to build a vibrant community!
            </p>
            <button className='rounded-[16px] text-[16px] px-3 py-5 inter border-b-[5px] bg-white text-pryBlack'>
              Let&#39;s collaborate</button>
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