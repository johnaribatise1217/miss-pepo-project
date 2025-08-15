"use client"
import Image from 'next/image'

const Header = ({ aboutRef }: { aboutRef: React.RefObject<HTMLElement | null> }) => {

  const scrollToNext = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='relative bg-bgPepo bg-cover bg-no-repeat max-w-full h-[110vh] pt-[5rem]'
    >
      <div className='container h-full'>
        <div className='flex flex-col gap-[1rem] text-white h-[500px] w-[50%] mt-[5rem]'>
          <p className='2xl:text-[112px] xl:text-[90px] bricolage-grotesque font-normal leading-[110%]'>
            Ms.Pepo
          </p>
          <p className='2xl:text-[72px] xl:text-[50px] inter font-[200]'>
            Where the <br />Vibe Begins
          </p>
          <div className='flex items-center text-secGrey2 text-[16px] gap-[1rem]'>
            <Image
              src='/images/scrollbutton.png'
              alt='scroll'
              width={100}
              height={100}
              className='w-[56px] h-[56px] cursor-pointer object-contain'
              onClick={scrollToNext}
            />
            <span className='font-inter'>Click to scroll</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header