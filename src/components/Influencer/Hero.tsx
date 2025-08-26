import React from 'react'

const Hero = () => {
  return (
    <div className='relative bg-contentMobile lg:bg-cover sm:bg-center lg:bg-bgInfluencer max-w-full lg:min-h-[115vh] min-h-[120vh] pt-[6rem] bg-no-repeat bg-cover'>
      <div className="container h-full">
        <div className="flex h-full gap-[5rem] bricolage-grotesque items-start">
          <div className="left flex flex-col items-start gap-[1rem] my-[10%] text-pryWhite">
            <span className='text-[clamp(60px,6vw,100px)] font-[500] w-full leading-[120%]'>
              Content <br /> Creator with <br /> Passion
            </span>
            <p className='inter text-[clamp(18px,3vw,22px)] font-[300] leading-[150%]'>
              Hi! I&#39;m a Content Creator who enjoys <br /> connecting with my community. Join me on <br />this journey to build a vibrant community!
            </p>
            <button className='rounded-[16px] w-full lg:w-auto font-[400] text-[clamp(16px,1.6vw,16px)] px-3 py-5 inter border-b-[5px] bg-white text-pryBlack'>
              Let&#39;s collaborate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero