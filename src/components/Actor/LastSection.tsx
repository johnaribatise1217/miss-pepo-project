/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'

const LastSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setTimeout(() => {
      setStatus(result.message);
    }, 2500)
    setStatus(null)
  };

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
            <form onSubmit={handleSubmit} action="" className='w-full inter flex flex-col h-full gap-[1.5rem]'>
              {status && <p className="mt-2 w-full text-black bg-white p-4 rounded-[16px]">{status}</p>}
              <input type="text" name="name" id="" placeholder='Name' required
                value={formData.name} onChange={handleChange}
                className='bg-pryGrey w-full py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
              />
              <div className='w-full flex lg:flex-row flex-col items-center gap-[1.2rem] '>
                <input required type="text" name="phone" value={formData.phone} id="" placeholder='Phone' onChange={handleChange}
                  className='bg-pryGrey w-full lg:w-1/2 py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
                />
                <input required type="text" name="email" id="" placeholder='Email' onChange={handleChange}
                  className='bg-pryGrey w-full lg:w-1/2 py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
                />
              </div>
              <input required type="text" value={formData.subject} name="subject" onChange={handleChange} id="" placeholder='Select Subject'
                className='bg-pryGrey w-full py-[16px] px-[12px] border-[1px] border-[#484848] rounded-[12px] outline-none text-secGrey'
              />
              <textarea required name="message" placeholder='Type your message' onChange={handleChange} value={formData.message}
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