/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react";

const Header = ({ aboutRef }: { aboutRef: React.RefObject<HTMLElement | null> }) => {

  const scrollToNext = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='relative bg-cover sm:bg-center lg:min-h-[115vh] min-h-[120vh] bg-homeMobile lg:bg-bgPepo lg:bg-cover bg-no-repeat max-w-full pt-[5rem]'
    >
      <div className='container h-full'>
        <div className='flex flex-col gap-[2rem] text-white  mt-[5rem] w-full sm:my-[15%]'>
          <p className='text-[clamp(80px,5vw,112px)] bricolage-grotesque font-normal leading-[110%]'>
            Ms.Pepo
          </p>
            <p className='text-[clamp(45px,5vw,72px)] inter font-[200]'>
              Where the <br />Vibe Begins
          </p>
          <RotaryButton onClick={scrollToNext}/>
        </div>
      </div>
    </div>
  )
}

const RotaryButton = ({onClick} : any) => {
  const text = "CLICK TO SCROLL * CLICK TO SCROLL *";
  const colors = ['#7E7360', '#947A6F']
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setColorIndex((i) => (i + 1) % colors.length)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-40 h-40 mt-[2rem] flex items-center justify-center">
      {/* The rotating text */}
      <div onClick={onClick} className="absolute w-full h-full animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
          <path
            id="textPath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text
            fill={colors[colorIndex]}
            className="uppercase  font-sans w-full text-[25px]"
          >
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* The centered button */}
      <button 
      onClick={onClick}
      style={{ background: colors[colorIndex] }}
      className="relative cursor-pointer z-10 w-12 h-12 rounded-[5px] border border-b-3 border-[#3F3B34] p-4 text-black font-bold flex items-center justify-center shadow-md">
        <svg
          className="w-8 h-8 text-[16px] text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header