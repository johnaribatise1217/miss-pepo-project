import React from 'react'

const Contact = () => {
  return (
    <section className='bg-secBlack py-[8.5%] h-[810px] w-full'>
      <div className='container flex gap-[1rem] h-full items-start'>
        <div className="flex text-white gap-[2rem] flex-col items-start w-[50%]">
          <p className='text-[52px] text-pryWhite bricolage-grotesque leading-[120%] font-normal'>Want to Collaborate?</p>
          <p className='text-[20px] w-full font-[300]'>
            I’m looking forward to hearing from you, please <br /> feel free to reach out. 
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
    </section>
  )
}

export default Contact