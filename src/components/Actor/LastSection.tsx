/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// import TestimonialSlider from '../EventHost/Testimonial/TestimonialSlider'

const LastSection = () => {
  return (
    <section className='bg-secBlack relative w-full min-h-[100vh] py-[8.5%] flex flex-col gap-[2rem]'>
      <div className='container flex text-pryWhite items-start
       flex-col bricolage-grotesque gap-[15rem] h-full'>
        {/* <div className='flex flex-col gap-[3rem] items-start'>
          <div>
            <small className='text-pryWhite text-[13px] inter font-bold'>Event Highlight</small>
            <p className='text-[52px] leading-[120%] bricolage-grotesque font-[400] text-pryWhite'>
              What My Colleagues on<br /> Set Say About me
            </p>
          </div>
          <TestimonialSlider/>
        </div> */}
        <div className='flex w-full gap-[1rem] h-full items-start'>
          <div className="flex text-white gap-[2rem] flex-col items-start w-[50%]">
            <p className='text-[52px] text-pryWhite bricolage-grotesque leading-[120%] font-normal'>The Stage is Set - <br /> Now Let's Talk</p>
            <p className='text-[20px] w-[80%] font-[300]'>
              Casting something unforgettable? I’m always <br />open to roles that demand presence, depth, and transformation. 
            </p>
            <p className='text-[20px] w-[80%] font-[300]'>
              Let’s discuss how I can bring your next story to life — on screen or on stage.
            </p>
          </div>
          <div className="right w-1/2 h-full">
            <form action="" className='w-full inter flex flex-col h-full gap-[1.5rem]'>
              <input type="text" name="" id="" placeholder='Name'
                className='bg-pryGrey w-full py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
              />
              <div className='w-full flex items-center gap-[1.2rem] '>
                <input type="text" name="" id="" placeholder='Phone'
                  className='bg-pryGrey w-1/2 py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
                />
                <input type="text" name="" id="" placeholder='Email'
                  className='bg-pryGrey w-1/2 py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
                />
              </div>
              <input type="text" name="" id="" placeholder='Select Subject'
                className='bg-pryGrey w-full py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
              />
              <textarea name="message" placeholder='Type your message'
              className='bg-pryGrey h-[180px] rounded-[20px] text-secGrey resize-none outline-none px-[12px] py-[16px]' id="message"></textarea>
              <button type='submit' className='bg-pryPablo shadow-[0_6px_0_0_#5e5547] w-[15%] p-[20px] rounded-[16px] text-white cursor-pointer'>
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