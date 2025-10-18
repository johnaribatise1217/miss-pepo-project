"use client";

import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'


function Page() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-brown/10 px-6 py-10">
            {/* Success Icon */}
            <div className="flex flex-col items-center gap-5 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-brown rounded-full flex justify-center items-center p-6 shadow-lg"
                >
                    <BiCheck size={120} color="white" />
                </motion.div>


                {/* Header Text */}
                <h1 className="text-3xl md:text-4xl font-semibold bricolage-grotesque text-brown">
                    Payment Successful
                </h1>

                <p className="text-gray-600 text-sm md:text-base max-w-md">
                    Thank you for your payment. Your transaction has been processed successfully.
                    A confirmation has been sent to your registered email.
                </p>
            </div>

            {/* Transaction Summary */}
            <div className="bg-white shadow-md mt-10 p-6 md:p-8 rounded-2xl text-black text-center w-full max-w-md flex flex-col gap-3 border border-brown/10">
                <h2 className="text-xl md:text-2xl bricolage-grotesque text-brown/90">Transaction Summary</h2>
                <hr className="border border-gray-200 my-3" />

                <div className="flex flex-col gap-2 text-sm md:text-base">
                    <p className="flex justify-between">
                        <span className="font-medium text-gray-700">Transaction ID:</span>
                        <span className="font-semibold text-gray-900">103883837</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-medium text-gray-700">Amount Paid:</span>
                        <span className="font-semibold text-gray-900">₦300,000</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-medium text-gray-700">Payment Method:</span>
                        <span className="font-semibold text-gray-900">Bank Transfer</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-medium text-gray-700">Date:</span>
                        <span className="font-semibold text-gray-900">{new Date().toLocaleDateString()}</span>
                    </p>
                </div>
            </div>

            {/* Button */}
            <button
                onClick={() => router.push('/')}
                className="mt-8 bg-brown text-white px-6 py-3 rounded-full text-sm md:text-base font-medium shadow hover:bg-brown/80 transition"
            >
                Go Back Home
            </button>
        </div>
    )
}

export default Page
