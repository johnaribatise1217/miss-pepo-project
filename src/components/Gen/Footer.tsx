import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full xl:py-[3%] 2xl:py-[5%] bg-footer flex flex-col xl:gap-[5rem] 2xl:gap-[10rem]'>
      <div className="up flex container justify-between w-full 2xl:gap-[4rem] items-start">
        <div className='w-[20%] flex flex-col items-start gap-[1.5rem]'>
          <span className='bricolage-grotesque text-pryWhite text-[30px]'>For Booking</span>
          <div className='flex flex-col inter w-full gap-[0.5rem] items-start'>
            <small className='text-white text-[16px]'>info.mspepo@gmail.com</small>
            <div className='content-none w-[80%] h-[1px] bg-underline'></div>
          </div>
        </div>
        <div className='flex w-[60%] flex-col items-start gap-[1.5rem]'>
          <span className='bricolage-grotesque text-pryWhite text-[30px]'>Let{"'"}s Connect</span>
          <div className='flex items-center w-full justify-between gap-[2rem]'>
            <div className='flex flex-col inter w-full gap-[0.5rem] items-start'>
              <Link href={""}>
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
                    src="/images/instagram.svg"
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
              <Link href={""}>
                <small className='text-white text-[16px] flex items-center gap-[1.5rem]'>
                  Youtube
                  <Image
                    src="/images/instagram.svg"
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
              <Link href={""}>
                <small className='text-white text-[16px] flex items-center gap-[1.5rem]'>
                  TikTok
                  <Image
                    src="/images/instagram.svg"
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
      <div className="down container flex flex-col gap-[2rem]">
        <div className='content-none w-full h-[1px] bg-underline'></div>
        <div className='w-full flex text-[16px] inter text-pryWhite items-center inter justify-between'>
          <span>Ms.Pepo. All rights reserved.</span>
          <span>Made with ❤ ️by BlaqMac Design</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer