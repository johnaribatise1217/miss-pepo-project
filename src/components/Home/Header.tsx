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
        <div className='flex flex-col gap-[1rem] text-white h-[500px] w-[50%] my-[10%]'>
          <p className='text-[clamp(32px,7.5vw,112px)] bricolage-grotesque font-normal leading-[110%]'>
              Ms.Pepo
          </p>
            <p className='text-[clamp(20px,5vw,72px)] inter font-[200]'>
              Where the <br />Vibe Begins
          </p>
          <div className='flex items-center text-secGrey2 text-[16px] gap-[1rem]'>
            <Image
              src='/images/scrollbutton.png'
              alt='scroll'
              width={100}
              height={100}
              className='w-[50px] h-[50px] cursor-pointer object-contain'
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