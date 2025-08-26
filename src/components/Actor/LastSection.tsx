/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const LastSection = () => {
  return (
    <section className='bg-secBlack relative w-full min-h-[110vh] py-[10%] flex flex-col gap-[2rem]'>
      <div className='container text-pryWhite bricolage-grotesque h-full'>
        <div className='flex flex-col lg:flex-row w-full gap-[3rem] h-full items-start'>
          <div className="flex text-white gap-[1.75rem] flex-col items-start w-full lg:w-[50%]">
            <p className='text-[clamp(37px,5vw,52px)] text-pryWhite bricolage-grotesque leading-[120%] font-normal'>The Stage is Set - <br /> Now Let's Talk</p>
            <p className='text-[22px] hidden lg:flex w-[80%] font-[300]'>
              Casting something unforgettable? I’m always open to roles that demand presence, depth, and transformation. 
            </p>
            <p className='text-[19px] lg:hidden w-full font-[300]'>
              Casting something unforgettable? I’m always open to roles that demand presence, depth, and transformation. 
            </p>
            <p className='text-[clamp(18.5px,3.5vw,20px)] w-full lg:w-[80%] font-[300]'>
              Let’s discuss how I can bring your next story to life — on screen or on stage.
            </p>
          </div>
          <div className="right w-full lg:w-1/2 h-full">
            <form action="" className='w-full inter flex flex-col h-full gap-[1.5rem]'>
              <input type="text" name="" id="" placeholder='Name'
                className='bg-pryGrey w-full py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
              />
              <div className='w-full flex lg:flex-row flex-col items-center gap-[1.2rem] '>
                <input type="text" name="" id="" placeholder='Phone'
                  className='bg-pryGrey w-full lg:w-1/2 py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
                />
                <input type="text" name="" id="" placeholder='Email'
                  className='bg-pryGrey w-full lg:w-1/2 py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
                />
              </div>
              <input type="text" name="" id="" placeholder='Select Subject'
                className='bg-pryGrey w-full py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
              />
              <textarea name="message" placeholder='Type your message'
              className='bg-pryGrey h-[180px] rounded-[20px] text-secGrey resize-none outline-none px-[12px] py-[16px]' id="message"></textarea>
              <button type='submit' className='bg-pryPablo shadow-[0_6px_0_0_#5e5547] w-full lg:w-[20%] p-[20px] rounded-[16px] text-white cursor-pointer'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LastSection