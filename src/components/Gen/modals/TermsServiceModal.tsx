/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import ModalBase from './ModalBase'

const TermsServiceModal = ({ isOpen, onClose, onAgree } : any) => {
  const [form, setForm] = useState({ name: "", signature: "", date: Date.now().toString() });

  const isFormComplete = form.name && form.signature && form.date;

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between w-full bg-inherit items-center mt-[1rem] px-8 xl:py-2 2xl:py-4">
        <h2 className="2xl:text-[44px] text-[30px] text-black font-[400] bricolage-grotesque ">Terms of Services</h2>
        <button onClick={onClose} className="text-[#7E7360] text-[20px] p-3 rounded-[5px] bg-[#F2F2F2] hover:text-gray-600">
          ✕
        </button>
      </div>
      {/* Scrollable Body */}
      <div className="overflow-y-auto max-h-[450px] xl:max-h-[500px] 2xl:max-h-[550px] w-full px-8 py-4 xl:space-y-2 2xl:space-y-3">
        {/* TERMS CONTENT */}
        <p className='inter xl:text-[17px] 2xl:text-[17px] leading-[150%] font-[400] text-black'>
          These Terms of Service ("Agreement") govern the provision of event hosting services by MsPepo, a professional <br /> Master of Ceremonies (MC) based in Houston, TX. By booking MsPepo's services, the Client agrees to be <br /> bound by the terms outlined below.
        </p>
        <ol className="list-decimal gap-[0.5rem] xl:text-[16px] 2xl:text-[18px] flex flex-col space-y-2 ml-4">
          <li className=''><strong><span className='font-extrabold inter'>Services:</span></strong> {" "} 
          <span className='font-[300]'>MsPepo provides professional hosting and MC services for events. The specific date, time, and location of the event must be agreed upon and confirmed by both parties at the time of booking.</span>
          </li>
          <li><strong>Booking and Payment:</strong> {" "}
          <span className='font-[300]'>A non-refundable deposit of 30% of the total service fee is required to secure the booking. The remaining balance must be paid 1–2 weeks before the event date, prior to the Performer's arrival at the venue. Failure to make full payment in time may result in cancellation of services.</span>
          </li>
          <li><strong>Travel and Accommodation:</strong> {" "}
          <span className='font-[300]'>For events located more than 50 miles from Houston, TX, the Client agrees to either: (A) provide a reasonable hotel room within 15 minutes of the venue and cover transportation costs, or (B) agree to an all-inclusive compensation package covering travel and accommodation.</span>
          </li>
          <li><strong>Cancellation Policy:</strong> {" "}
          <span className='font-[300]'>This Agreement cannot be cancelled without mutual written consent. Should MsPepo cancel, the full deposit will be refunded within 7 business days. If the Client cancels at any time, no refund will be issued.</span>
          </li>
          <li><strong>Liability and Indemnity:</strong>{" "}
          <span className='font-[300]'>The Client agrees to indemnify and hold harmless MsPepo and her representatives from any claims, losses, or liabilities arising from the event due to the Client’s negligence, misconduct, or breach of agreement.</span>
          </li>
          <li><strong>Force Majeure:</strong> {" "}
          <span className='font-[300]'>Neither party shall be held liable for any failure to perform due to unforeseen circumstances beyond their control, including but not limited to natural disasters, government restrictions, or illness. The affected party must provide prompt notice.</span>
          </li>
          <li><strong>Contact and Payment Information:</strong> {" "}
          <span className='font-[300]'>For inquires or payments, the Client may reach MsPepo via email at info.mspepo@gmail.com. Payments may be sent via zelle to the same address. Business Name: 21 Void LLC.</span>
          </li>
        </ol>
        <p className='inter text-[17px] w-full leading-[150%] py-5 font-[400] text-black'>
          By booking MsPepo's services, the Client acknowledges that they have read, understood, and agree to these Terms of Service.
        </p>
        <div className="flex flex-col md:flex-row font-[300] w-full gap-[1.5rem]">
          <input
            type="text"
            placeholder="Client's Name"
            className="border bg-[#F2F2F2] outline-none w-full p-3 rounded-[10px]"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Signature"
            className="border bg-[#F2F2F2] outline-none w-full p-3 rounded-[10px]"
            value={form.signature}
            onChange={(e) => setForm({ ...form, signature: e.target.value })}
          />
          <input
            type="date"
            placeholder='Date'
            className="border bg-[#F2F2F2] w-full p-3 rounded-[10px]"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
      </div>

      {/* Form */}

      {/* Footer */}
      <div className="flex flex-col-reverse w-full md:flex-row items-center gap-[1rem] border-t px-8 py-2">
        <button
          onClick={onClose}
          className="px-6 py-4 border-2 border-b-4 w-full md:w-auto border-[#D9D9D9] rounded-[15px] hover:bg-gray-100"
        >
          Disagree
        </button>
        <button
          onClick={onAgree}
          disabled={!isFormComplete}
          className={`px-6 py-4 border-2 border-b-4 w-full md:w-auto border-[#645C4C] rounded-[15px] text-white ${
            isFormComplete
              ? "bg-[#7E7360]"
              : "bg-[#D9D9D9] text-[#7E7360] cursor-not-allowed"
          }`}
        >
          Agree
        </button>
      </div>
    </ModalBase>
  )
}

export default TermsServiceModal