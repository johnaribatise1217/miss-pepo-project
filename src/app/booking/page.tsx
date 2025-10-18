'use client';
import React, { useState } from 'react';
import { BiChevronRight, BiCheck } from 'react-icons/bi';
import TermsOfService from '@/components/Booking/TermsofService';
import BookingForm from '@/components/Booking/EventBooking';

const BookingPage = () => {
    const [step, setStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

    const nextStep = () => {
        setCompletedSteps((prev) => new Set(prev).add(step));
        setStep((prev) => Math.min(prev + 1, 3));
    };

    const prevStep = () => {
        setCompletedSteps((prev) => {
            const newCompleted = new Set(prev);
            newCompleted.delete(step - 1);
            return newCompleted;
        });
        setStep((prev) => Math.max(prev - 1, 1));
    };

    const handleStepClick = (stepId: number) => {
        const newCompleted = new Set(completedSteps);
        if (stepId < step) {
            for (let i = stepId; i < step; i++) {
                newCompleted.delete(i);
            }
        }
        setCompletedSteps(newCompleted);
        setStep(stepId);
    };

    return (
        <div className="min-h-screen flex flex-col w-full bg-white overflow-hidden">
            {/* ✅ Stepper Header (Now Responsive) */}
            <div className="w-full border-b-2 border-gray-200 px-4 sm:px-8 md:px-16 lg:px-32 py-5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-10">
                    {[
                        { label: 'Agreement', id: 1 },
                        { label: 'Booking', id: 2 },
                        { label: 'Payment', id: 3 },
                    ].map((item, index, arr) => (
                        <React.Fragment key={item.id}>
                            <div
                                onClick={() => handleStepClick(item.id)}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <span
                                    className={`rounded-full w-7 h-7 flex items-center justify-center text-sm transition-all duration-300 ${completedSteps.has(item.id) && item.id !== step
                                        ? 'bg-green-500 text-white'
                                        : step === item.id
                                            ? 'bg-black text-white'
                                            : 'bg-black/10 text-black'
                                        }`}
                                >
                                    {completedSteps.has(item.id) && item.id !== step ? (
                                        <BiCheck size={20} />
                                    ) : (
                                        item.id
                                    )}
                                </span>
                                <span
                                    className={`inter text-[14px] sm:text-[15px] md:text-[16px] ${step === item.id ? 'font-semibold' : 'text-black/60'
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </div>
                            {index < arr.length - 1 && (
                                <BiChevronRight
                                    size={24}
                                    className="hidden sm:block"
                                    color="#7E7360"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Step Content */}
            <div className="flex flex-1 w-full">
                <div className="flex-1"></div>

                {step === 1 && (
                    <div className="w-full lg:w-[70%] lg:px-24 px-5 py-6 flex flex-col text-black">
                        <TermsOfService
                            onAgree={nextStep}
                            onDisagree={() => console.log('User disagreed')}
                        />
                    </div>
                )}

                {step === 2 && (
                    <div className="w-full lg:w-[97%] lg:px-24 px-5 py-6 flex flex-col text-black">
                        <BookingForm onNext={nextStep} onPrevious={prevStep} />
                    </div>
                )}

                {step === 3 && (
                    <div className="w-full lg:px-24 px-5 py-6 flex flex-col text-black">
                        <button
                            onClick={prevStep}
                            type="button"
                            className="border-2 border-b-4 text-sm border-black/15 bg-white hover:bg-black/10 p-3 shadow-lg rounded-md transition-all duration-100 w-max"
                        >
                            Back
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingPage;
