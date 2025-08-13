import React from 'react'

const Header = () => {
  return (
    <section className="h-[120vh] w-full bg-bgEvent bg-no-repeat bg-cover pt-[5rem]"
    >
      <div className="container flex flex-col items-start gap-[2rem] text-white mt-[15%]">
        <p className="bricolage-grotesque font-[400] leading-[120%] text-pryWhite text-[80px]">
          Hosting <br /> Memorable <br />Experiences
        </p>
        <p className='inter text-[22px] leading-[150%] font-[200] max-w-[50%]'>
          As an expert event host, I transform your <br /> event into an unforgettable occasion that will <br /> always linger in your mind.
        </p>
        <button className='bg-white inter px-6 py-4 border rounded-[16px] text-black border-b-[5px]'>Book Me!</button>
      </div>
    </section>
  )
}

export default Header