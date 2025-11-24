/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface TermsOfServiceProps {
  onAgree: () => void;
  onDisagree: () => void;
}

export interface TermsData {
  firstName : string
  lastName : string
  email: string;
  date: string;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onAgree, onDisagree }) => {
  const [termsData, setTermsData] = useState<TermsData>({
    firstName : '',
    lastName : '',
    email: '',
    date: new Date().toISOString().split('T')[0],
  });

  // const [isUploading, setIsUploading] = useState<boolean>(false)
  const [iscontinue, setIsContinue] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTermsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAgree = () => {
    if(termsData !== null){
      localStorage.setItem("termsData", JSON.stringify(termsData))
    }
    onAgree()
  }

  useEffect(() => {
    const termsDataStored = localStorage.getItem("termsData") as string
    const parsedData = JSON.parse(termsDataStored)
    if(parsedData){
      setTermsData(parsedData)
    }
  }, [])

  // 📁 Handle signature upload
  // const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   setIsUploading(true);

  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string);
  //   formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string);

  //   try {
  //     const res = await fetch(
  //       `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
  //       {
  //         method: 'POST',
  //         body: formData,
  //       }
  //     );

  //     const data = await res.json();

  //     setTermsData((prev) => ({
  //       ...prev,
  //       signature: data.secure_url,
  //     }));
  //   } catch (error) {
  //     console.error('Cloudinary upload failed:', error);
  //     alert('Upload failed. Please try again.');
  //   } finally {
  //     setIsUploading(false);
  //   }
  // };

  useEffect(() => {
    if(!termsData.firstName || !termsData.date || !termsData.email || !termsData.lastName){
      setIsContinue(false)
    } else {
      setIsContinue(true)
    }
  }, [termsData])

  return (
    <>
      <h1 className="bricolage-grotesque md:text-[44px] text-[30px] mb-3">Terms of Service</h1>
      <p className="inter text-[16px] mb-6">
        These Terms of Service ("Agreement") govern the provision of event hosting services by MsPepo,
        a professional Master of Ceremonies (MC) based in Houston, TX. By booking MsPepo's services,
        the Client agrees to be bound by the terms outlined below.
      </p>

      <ol className="list-decimal list-inside inter text-[16px] leading-relaxed space-y-3 ps-2">
        <li>
          <strong>Services:</strong> MsPepo provides professional hosting and MC services for events.
          The specific date, time, and location of the event must be agreed upon and confirmed by both
          parties at the time of booking.
        </li>
        <li>
          <strong>Booking and Payment:</strong> A non-refundable deposit of 30% of the total service
          fee is required to secure the booking. The remaining balance must be paid 1–2 weeks before the
          event date, prior to the Performer's arrival at the venue. Failure to make full payment in time
          may result in cancellation of services.
        </li>
        <li>
          <strong>Travel and Accommodation:</strong> For events located more than 50 miles from Houston,
          TX, the Client agrees to either: (A) provide a reasonable hotel room within 15 minutes of the
          venue and cover transportation costs, or (B) agree to an all-inclusive compensation package
          covering travel and accommodation.
        </li>
        <li>
          <strong>Cancellation Policy:</strong> This Agreement cannot be cancelled without mutual written
          consent. Should MsPepo cancel, the full deposit will be refunded within 7 business days. If the
          Client cancels at any time, no refund will be issued.
        </li>
        <li>
          <strong>Liability and Indemnity:</strong> The Client agrees to indemnify and hold harmless
          MsPepo and her representatives from any claims, losses, or liabilities arising from the event
          due to the Client’s negligence, misconduct, or breach of agreement.
        </li>
        <li>
          <strong>Force Majeure:</strong> Neither party shall be held liable for any failure to perform
          due to unforeseen circumstances beyond their control, including but not limited to natural
          disasters, government restrictions, or illness. The affected party must provide prompt notice.
        </li>
        <li>
          <strong>Contact and Payment Information:</strong> For inquiries or payments, the Client may reach
          MsPepo via email at info.mspepo@gmail.com. Payments may be sent via Zelle to the same address.
          Business Name: 21void LLC.
        </li>
      </ol>

      <p className="inter mt-5 text-[16px] leading-relaxed">
        By booking MsPepo’s services, the Client acknowledges that they have read, understood, and agree
        to these Terms of Service.
      </p>

      {/* 🧾 FORM SECTION */}
      <form className="grid md:grid-cols-2 gap-4 mt-5">
        <div>
          <label className="inter text-[16px] leading-relaxed">First Name</label>
          <input
            type="text"
            name="firstName"
            value={termsData.firstName}
            onChange={handleChange}
            placeholder="Your Firstname"
            className="p-3 w-full border-2 border-black/15 bg-black/5 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="inter text-[16px] leading-relaxed">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={termsData.lastName}
            onChange={handleChange}
            placeholder="Your Lastname"
            className="p-3 w-full border-2 border-black/15 bg-black/5 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="inter text-[16px] leading-relaxed">Email</label>
          <input
            type="email"
            name="email"
            value={termsData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="p-3 w-full border-2 border-black/15 bg-black/5 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="inter text-[16px] leading-relaxed">Date of Consent</label>
          <input
            type="date"
            name="date"
            value={termsData.date}
            onChange={handleChange}
            className="p-3 w-full border-2 border-black/15 bg-black/5 rounded-lg text-sm"
          />
        </div>

        {/* <div>
          <label className="inter text-[16px] leading-relaxed">Signature</label>

          <label
            htmlFor="signature"
            className="flex flex-col items-center justify-center w-full h-12 border-2 border-dashed border-black/30 bg-black/5 rounded-lg cursor-pointer hover:bg-black/10 transition"
          >
            {isUploading ? (
              <span className="text-gray-500 text-sm animate-pulse">
                Uploading...
              </span>
            ) : termsData.signature ? (
              <Image
                src={termsData.signature}
                height={1000}
                width={1000}
                alt="Signature Preview"
                className="h-10 object-contain"
              />
            ) : (
              <span className="text-gray-500 text-sm">
                Click here to upload signature
              </span>
            )}
            <input
              id="signature"
              type="file"
              name="signature"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div> */}
      </form>

      <div className="flex items-center justify-between mt-8">
        <Link
          href={"/event-host"}
          onClick={onDisagree}
          className="border-2 border-b-4 text-sm cursor-pointer border-black/15 bg-white hover:bg-black/10 p-3 shadow-lg rounded-md transition-all duration-100"
        >
          Disagree
        </Link>
        <button
          onClick={() => 
            handleAgree()
          }
          disabled={!iscontinue}
          className="border-2 disabled:bg-white disabled:text-[#645C4C] cursor-pointer border-b-4 text-sm border-[#645C4C] bg-[#7E7360] hover:bg-[#5c5446] text-white p-3 shadow-lg rounded-md transition-all duration-100"
        >
          Agree
        </button>
      </div>
    </>
  );
};

export default TermsOfService;
