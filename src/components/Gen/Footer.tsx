import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full py-[6%] 2xl:py-[8%] bg-footer flex flex-col gap-[5rem] 2xl:gap-[10rem]'>
      <div className="up flex flex-col lg:flex-row container justify-between w-full gap-[3rem] items-start">
        <div className='lg:w-[20%] w-full flex flex-col items-start gap-[1.5rem]'>
          <span className='bricolage-grotesque text-pryWhite text-[30px]'>For Booking</span>
          <div className='flex flex-col inter w-full gap-[0.5rem] items-start'>
            <Link href="mailto:info.mspepo@gmail.com" className='text-white text-[17px]'>
             info.mspepo@gmail.com
            </Link>
            <div className='content-none w-full h-[1px] bg-underline'></div>
          </div>
        </div>

        <div className='flex lg:w-[60%] w-full flex-col items-start gap-[1.5rem]'>
          <span className='bricolage-grotesque text-pryWhite text-[30px]'>Let{"'"}s Connect</span>
          <div className='grid lg:grid-cols-4 grid-cols-2 w-full justify-between gap-[2rem]'>
            <div className='flex flex-col inter w-full gap-[0.5rem] items-start'>
              <Link href={"https://www.instagram.com/mspepo/"} target='_blank' rel='noreferrer'>
                <small className='text-white text-[16px] flex items-center gap-[1.5rem]'>
                  Instagram
                  <Image
                    src="/images/instagram.svg"
                    alt='instagram'
                    width={20}
                    height={20}
                    className='cursor-pointer'
                  />
                </small>
              </Link>
              <div className='content-none w-full h-[1px] bg-underline'></div>
            </div>
            <div className='flex flex-col inter w-full gap-[0.5rem] items-start'>
              <Link href={""}>
                <small className='text-white text-[16px] flex items-center gap-[1.5rem]'>
                  Facebook
                  <Image
                    src="/images/facebook.svg"
                    alt='instagram'
                    width={20}
                    loading='lazy'
                    height={20}
                    className='cursor-pointer'
                  />
                </small>
              </Link>
              <div className='content-none w-full h-[1px] bg-underline'></div>
            </div>
            <div className='flex flex-col inter w-full gap-[0.5rem] items-start'>
              <Link href={"https://www.youtube.com/@MsPepo"} target='_blank' rel="noreferrer">
                <small className='text-white text-[16px] flex items-center gap-[1.5rem]'>
                  Youtube
                  <Image
                    src="/images/youtube.svg"
                    alt='instagram'
                    width={20}
                    loading='lazy'
                    height={20}
                    className='cursor-pointer'
                  />
                </small>
              </Link>
              <div className='content-none w-full h-[1px] bg-underline'></div>
            </div>
            <div className='flex flex-col inter w-full gap-[0.5rem] items-start'>
              <Link href={"https://www.tiktok.com/@mspepo"} target='_blank'>
                <small className='text-white text-[16px] flex items-center gap-[1.5rem]'>
                  TikTok
                  <Image
                    src="/images/tiktok.svg"
                    alt='instagram'
                    loading='lazy'
                    width={20}
                    height={20}
                    className='cursor-pointer'
                  />
                </small>
              </Link>
              <div className='content-none w-full h-[1px] bg-underline'></div>
            </div>
          </div>
        </div>
      </div>

      <div className="down container w-full flex flex-col gap-[2rem]">
        <div className='content-none w-full h-[1px] bg-underline'></div>
        <div className='w-full flex lg:flex-row flex-col gap-[1rem] items-start text-[16px] inter text-pryWhite lg:items-center inter justify-between'>
          <span>Ms.Pepo. All rights reserved.</span>
          <span>Made with ❤ ️by BlaqMac Design</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer