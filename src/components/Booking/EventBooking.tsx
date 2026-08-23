/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { motion, AnimatePresence } from "framer-motion";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameDay,
  isWithinInterval,
  isAfter,
  isBefore,
  isSameMonth,
  startOfDay
} from "date-fns";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LOCATIONS from '../../app/lib/Location';

interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface PaymentMethod {
    method : 'Zelle' | 'Stripe'
}

interface BookingFormProps {
    onNext: () => void;
    onPrevious: () => void;
}

interface EventTypeList {
    event : string
    price : number
}

interface States{
    name : string
    state_code : string
}

const BookingForm: React.FC<BookingFormProps> = ({ onNext, onPrevious }) => {
    const [isCheckoutReady, setIsCheckoutReady] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false)
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod['method']>('Zelle');
    const [eventType, setEventType] = useState('');
    const [eventPrice, setEventPrice] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [serviceCharge, setServiceCharge] = useState(0)
    const [balanceToBePaid, setBalanceToBePaid] = useState<number | null>(null);
    const [amountPaid, setAmountPaid] = useState<number | null>(null);
    const [selectedPaymentPercentage, setSelectedPaymentPercentage] = useState<number>(30); // default 30%
    const [eventList, setEventList] = useState<EventTypeList[]>([])
    const [allStates, setAllStates] = useState<States[]>([])
    const [allCities, setCities] = useState<string[]>([])
    const [demographic, setDemographic] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const today: Date = startOfDay(new Date());
    const minYear: number = today.getFullYear();
    const minDate: Date = new Date(minYear, 0, 1); 
    const router = useRouter()
    const [isUploading, setIsUploading] = useState<boolean>(false)
    const [zelleReceiptUrl, setZelleReceiptUrl] = useState<string>("")
    const [bookedRanges, setBookedRanges] = useState<{ startDate: string; endDate: string }[]>([])
    const [customEventType, setCustomEventType] = useState<string>('');
    const [customDemographic, setCustomDemographic] = useState<string>('');

     useEffect(() => {
        const fetchBookedRanges = async () => {
            try {
                const res = await fetch('/api/booking');
                const json = await res.json();
                if (json?.booked) {
                    setBookedRanges(json.booked);
                }
            } catch (err) {
                console.error('Failed to load booked dates', err);
            }
        };
        fetchBookedRanges();
    }, []);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string);
        formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string);
        formData.append('resource_type', 'auto');

        try {
            const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`,
            {
                method: 'POST',
                body: formData,
            }
            );

            const data = await res.json();
            if(data.secure_url){
                setZelleReceiptUrl(data.secure_url);
                alert("Zelle receipt uploaded successfully")
            }
        } catch (error) {
            console.error('Cloudinary upload failed:', error);
            alert('Upload failed. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    const [currentMonth, setCurrentMonth] = useState<Date>(
      new Date(today.getFullYear(), today.getMonth(), 1)
    );
    const [range, setRange] = useState<DateRange>({ start: null, end: null });
    const [dir, setDir] = useState<number>(0);

    const numberOfDays = useCallback(() => {
        if (range.start && range.end) {
            const startDate = new Date(range.start);
            const endDate = new Date(range.end);

            const diffInMs = endDate.getTime() - startDate.getTime();
            const number = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) + 1;

            return number;
        }

        return 1;
    }, [range]);

    useEffect(() => {
        let baseAmount
        let serviceCharge
        if(eventPrice && paymentMethod !== "Zelle" && numberOfDays()){
            baseAmount = eventPrice * numberOfDays()
            serviceCharge = (0.030 * baseAmount + 0.30)
            setServiceCharge(serviceCharge)
            setTotalAmount(baseAmount + serviceCharge)
        } else {
            setServiceCharge(0)
            setTotalAmount(eventPrice * numberOfDays())
        }
    }, [eventType, eventPrice, paymentMethod, numberOfDays])

    useEffect(() => {
        if(totalAmount > 0 && selectedPaymentPercentage){
            const upfrontAmount = (totalAmount * selectedPaymentPercentage / 100)
            const balanceAmount = totalAmount - upfrontAmount
            setAmountPaid(Number(upfrontAmount.toFixed(2)))
            setBalanceToBePaid(Number(balanceAmount.toFixed(2)))
        }
    }, [totalAmount, selectedPaymentPercentage])

    useEffect(() => {
        const fetchEventTypes = async () => {
            const result = await fetch('/api/pricing', {
                method : 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            result.json().then((res) => setEventList(res.data))
        }
        fetchEventTypes()
    }, [])

     useEffect(() => {
        const request = {
            country : "United States"
        }
        const fetchAllStates = async() => {
            const result = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
                method : "POST",
                body : JSON.stringify(request),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            result.json().then((res) => setAllStates(res.data.states))
        }
        fetchAllStates()
    }, [])

    useEffect(() => {
        const request = {
            country: "United States",
            state : state
        }
        const fetchCitiesByState = async() => {
            const result = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
                method : "POST",
                body : JSON.stringify(request),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            result.json().then((res) => setCities(res.data))
        }
        fetchCitiesByState()
    }, [state])

    const toDateOnly = (date: Date): string => {
        return format(date, "yyyy-MM-dd");
    };

    const goNext = (): void => {
    setDir(1);
    setCurrentMonth((m) => addMonths(m, 1));
    };

    const goPrev = (): void => {
    setDir(-1);
    setCurrentMonth((m) => subMonths(m, 1));
    };

    const handleDateClick = (day: Date): void => {
        if (isDisabled(day)) return;

        // No start selected -> set start (await end)
        if (!range.start) {
            setRange({ start: day, end: null });
            return;
        }

        // Start exists but no end -> attempt to set end
        if (range.start && !range.end) {
            // clicking same day -> single-day range
            if (isSameDay(day, range.start)) {
                setRange({ start: range.start, end: range.start });
                return;
            }

            // clicking a later day -> set as end
            if (isAfter(day, range.start)) {
                setRange({ start: range.start, end: day });
                return;
            }

            // clicking an earlier day -> treat as new start
            setRange({ start: day, end: null });
            return;
        }

        // Both start and end exist -> start a new selection with this day as start
        setRange({ start: day, end: null });
    };

    // const handleDateClick = (day: Date): void => {
    //     if (isDisabled(day)) return;

    //     if (!range.start || (range.start && range.end)) {
    //         // First click or after a complete range: start a new single-day selection
    //         setRange({ start: day, end: day });
    //     } else if (isAfter(day, range.start)) {
    //         // Extend to a range if clicking a later day
    //         setRange({ ...range, end: day });
    //     } else {
    //         // Clicking earlier or same: reset to single-day
    //         setRange({ start: day, end: day });
    //     }
    // };

    const isDisabled = (day: Date): boolean => {
        // disable days before minDate OR days inside any booked range
        const beforeMin = isBefore(startOfDay(day), minDate);
        const inBooked = bookedRanges.some((r) => {
            const s = startOfDay(new Date(r.startDate));
            const e = startOfDay(new Date(r.endDate));
            return isWithinInterval(startOfDay(day), { start: s, end: e });
        });

        const isBlockedMonth = (d: Date) =>
            d.getFullYear() === 2026 && (d.getMonth() === 7 || d.getMonth() === 8);

        return beforeMin || inBooked || isBlockedMonth(day);
    };

    const calendarMatrix: Date[][] = useMemo(() => {
    const monthStart: Date = startOfMonth(currentMonth);
    const monthEnd: Date = endOfMonth(monthStart);
    const startDate: Date = startOfWeek(monthStart);
    const endDate: Date = endOfWeek(monthEnd);

    const rows: Date[][] = [];
    let day: Date = startDate;

    while (day <= endDate) {
        const week: Date[] = [];
        for (let i = 0; i < 7; i++) {
        week.push(day);
        day = addDays(day, 1);
        }
        rows.push(week);
    }
    return rows;
    }, [currentMonth]);

    const formatRange = (): string => {
    if (range.start && range.end) {
        return `${format(range.start, "MMM d, yyyy")} - ${format(
        range.end,
        "MMM d, yyyy"
        )}`;
    }
    if (range.start) {
        return `${format(range.start, "MMM d, yyyy")} - ${format(
        range.start,
        "MMM d, yyyy"
        )}`;
    }
    return "May 8 , 2025 - May 10 , 2025";
    };

    const pageVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 32 : -32,
            opacity: 0,
            position: "absolute" as const,
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "static" as const,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -32 : 32,
            opacity: 0,
            position: "absolute" as const,
        }),
    };

    const years: number[] = Array.from({ length: 11 }, (_, i) => minYear + i);

    const generateTimeSlots = (intervalMinutes = 60) => {
        const slots: string[] = [];
        for (let mins = 0; mins < 24 * 60; mins += intervalMinutes) {
            const hours = Math.floor(mins / 60);
            const minutes = mins % 60;
            const d = new Date();
            d.setHours(hours, minutes, 0, 0);
            const label = d.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            });
            slots.push(label);
        }
        return slots;
    };

    // Use 60 for hourly slots (12:00 AM - 11:00 PM). Use 30 for half-hour slots.
    const timeSlots = generateTimeSlots(60);

    useEffect(() => {
        const isComplete =
            eventType &&
            demographic &&
            state  &&
            city  &&
            startTime &&
            endTime &&
            range.start &&
            (range.end || range.start) && 
            (paymentMethod === "Zelle" ? zelleReceiptUrl !== "" : paymentMethod === "Stripe") &&
            totalAmount > 0;

        setIsCheckoutReady(Boolean(isComplete));
    }, [eventType, demographic, state, city, startTime, endTime, range, totalAmount, zelleReceiptUrl, paymentMethod]);

    useEffect(() => {
        const saved = localStorage.getItem("eventBooking");
        if (saved) {
            const parsed = JSON.parse(saved);
            setEventType(parsed.eventType || "");
            setDemographic(parsed.audienceDemographic || "");
            setCustomDemographic(parsed.customDemographic || "")
            setCustomEventType(parsed.customEventType || "")
            setState(parsed.state || "");
            setCity(parsed.city || "");
            setStartTime(parsed.startTime || "");
            setEndTime(parsed.endTime || "");
            setRange(parsed.range || { start: null, end: null });
            setEventPrice(parsed.eventPrice || 0);
            setServiceCharge(parsed.serviceCharge || 0);
            setTotalAmount(parsed.amount || 0);
            setPaymentMethod(parsed.paymentMethod || "Zelle");
            setZelleReceiptUrl(parsed.zelleReceiptUrl || "");
        }
    }, []);

    useEffect(() => {
        const bookingData = {
            eventType : customEventType !== "" ? customEventType : eventType,
            audienceDemographic : customDemographic !== "" ? customDemographic : demographic,
            state,
            city,
            startTime,
            endTime,
            startDate: range.start ? toDateOnly(range.start) : null,
            endDate: (range.end || range.start) ? toDateOnly(range.end || range.start) : null,
            range,
            eventPrice,
            serviceCharge,
            amount : amountPaid,
            baseAmount: totalAmount,
            percentagePaid: selectedPaymentPercentage,
            balanceToBePaid,
            percentageRemaining: Number(100 - selectedPaymentPercentage),

            paymentMethod,
            zelleReceiptUrl,
            numberOfDays : numberOfDays()
        };

        localStorage.setItem("eventBooking", JSON.stringify(bookingData));
    }, [eventType, customDemographic, customEventType, state, city, startTime, endTime, range, eventPrice, serviceCharge, amountPaid, totalAmount, selectedPaymentPercentage, balanceToBePaid,
        paymentMethod, numberOfDays, demographic, zelleReceiptUrl
    ])

    const handleCompleteZellePayment = async() => {
        const termsData = localStorage.getItem("termsData")
        let parsedTermsData
        if(termsData) {
            parsedTermsData = JSON.parse(termsData)
        }
        const bookingData = {
            eventType : customEventType !== "" ? customEventType : eventType,
            audienceDemographic : customDemographic !== "" ? customDemographic : demographic,
            state,
            city,
            startTime,
            endTime,
            startDate: range.start ? toDateOnly(range.start) : null,
            endDate: (range.end || range.start) ? toDateOnly(range.end || range.start) : null,
            range,
            eventPrice,
            serviceCharge,
            amount : amountPaid,
            baseAmount: totalAmount,
            percentagePaid: selectedPaymentPercentage,
            balanceToBePaid,
            percentageRemaining: Number(100 - selectedPaymentPercentage),

            paymentMethod,
            zelleReceiptUrl,
            numberOfDays : numberOfDays()
        };

        localStorage.setItem("eventBooking", JSON.stringify(bookingData));
        const finalCheckoutData = {...parsedTermsData, ...bookingData}

        if(isCheckoutReady){
            setIsProcessing(true)
            try {
                const response = await fetch("/api/payment/zelle", {
                    method : "POST",
                    body : JSON.stringify(finalCheckoutData),
                    headers : {
                        'Content-Type': 'application/json',
                    }
                })
                response.json().then((res) => {
                    if(res.received){
                        setIsProcessing(false)
                        router.push('/event-host/success')
                    }
                })
            } catch (error) {
                throw error
            }
        }
    }

    const handleStripeCheckout = async() => {
        const termsData = localStorage.getItem("termsData")
        let parsedTermsData
        if(termsData) {
            parsedTermsData = JSON.parse(termsData)
        }
        const bookingData = {
            eventType : customEventType !== "" ? customEventType : eventType,
            audienceDemographic : customDemographic !== "" ? customDemographic : demographic,
            state,
            city,
            startTime,
            endTime,
            startDate: range.start ? toDateOnly(range.start) : null,
            endDate: (range.end || range.start) ? toDateOnly(range.end || range.start) : null,
            range,
            eventPrice,
            serviceCharge,
            amount : amountPaid,
            baseAmount: totalAmount,
            percentagePaid: selectedPaymentPercentage,
            balanceToBePaid,
            percentageRemaining: Number(100 - selectedPaymentPercentage),

            paymentMethod,
            numberOfDays : numberOfDays()
        };

        localStorage.setItem("eventBooking", JSON.stringify(bookingData));
        const finalCheckoutData = {...parsedTermsData, ...bookingData}

        if(isCheckoutReady) {
            setIsProcessing(true)
            try {
                const checkout = await fetch("/api/payment/checkout-session", {
                    method : "POST",
                    body : JSON.stringify(finalCheckoutData),
                    headers : {
                        'Content-Type': 'application/json',
                    }
                })
                checkout.json().then((res) => {
                    setIsProcessing(false)
                    router.push(res.session.url as string)
                })
            } catch (error) {
                throw error
            }
        }
    };

    const paymentOptions = [
        { id: "zelle", icon: "/images/zelle.svg", brand: "Zelle", text: "Pay via Zelle to"},
        { id: "stripe", icon: "/images/Group.svg", brand: "Stripe", text: "Payment Gateway with Card / Crypto"},
    ];
    return (
        <div className="flex md:flex-row flex-col gap-6">
            {/* Left Sidebar */}
            <div className="md:w-80 w-full space-y-6">
                {/* Note Section */}

                <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 bricolage-grotesque">Booking Note!</h3>
                    <p className="text-sm text-gray-700 mb-4 inter">
                        Hey Love, Ms. Pepo will not be taking bookings during <b className='font-bold'>August and September 2026.</b> <br /> Bookings are allowed from <b>October 1, 2026</b> onward. To request a date or ask about availability, please email{" "}
                        <a href="mailto:info.mspepo@gmail.com" className="text-blue-600 underline">info.mspepo@gmail.com</a>.
                        Thank you , I look forward to working with you.
                    </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 bricolage-grotesque">Service Note!</h3>
                    <p className="text-sm text-gray-700 mb-4 inter">
                        Based on my service agreement, the event planner or individual inviting Ms.Pepo for any event outside of <b className='font-bold'>Houston, Texas</b> means you are responsible for providing the following at least 7 days before the event date.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Accommodation Allowance</li>
                        <li>• Transport Allowance</li>
                    </ul>
                </div>

                {/* Payment Summary */}
                <div className="bg-white border hidden lg:block border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4 bricolage-grotesque">Payment Summary</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                        {[30, 40, 50, 60].map((percentage) => (
                            <button
                                key={percentage}
                                onClick={() => setSelectedPaymentPercentage(percentage)}
                                className={`px-3 py-2 rounded-lg text-[11px] font-semibold border-2 transition ${
                                    selectedPaymentPercentage === percentage
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-white text-gray-800 border-gray-300 hover:border-blue-600'
                                }`}
                            >
                                {percentage}% Upfront
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mb-4 inter">
                        <span className="text-gray-700 inter">Service Charge</span>
                        <span className="font-semibold inter">${serviceCharge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 inter">
                        <span className="text-gray-700 text-[13px] inter">Number of days (1 by default)</span>
                        <span className="font-semibold inter">{numberOfDays()}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                        <span className="font-bold inter">{selectedPaymentPercentage}% Upfront Payment:</span>
                        <span className="font-bold inter">${amountPaid?.toFixed(2)}</span>
                    </div>
                    <div className="pt-2 flex justify-between items-center">
                        <span className="font-bold inter">Balance to be Paid:</span>
                        <span className="font-bold inter">${balanceToBePaid?.toFixed(2)}</span>
                    </div>
                    <div className="pt-2 text-gray-300 text-[12px] flex justify-between items-center">
                        <span className="font-bold inter">Base Amount</span>
                        <span className="font-bold inter">${totalAmount.toFixed(2)}</span>
                    </div>
                </div>

                <div className="bg-white border hidden lg:block border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4 bricolage-grotesque">Payment Method</h3>
                    <div className="space-y-2">
                        {paymentOptions.map((option) => (
                            <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                                <input
                                type="radio"
                                name="payment"
                                value={option.brand}
                                onChange={() => setPaymentMethod(option.brand.toString() as PaymentMethod['method'])}
                                className="hidden"
                                />
                                <span
                                className={`w-5 h-5 flex items-center justify-center rounded-[6px] border-[1px] transition-all duration-200 ${
                                    paymentMethod === option.brand
                                    ? "border-[#8C8C8C]"
                                    : "border-gray-300 group-hover:border-gray-400"
                                }`}
                                >
                                {paymentMethod === option.brand && (
                                    <span className="w-2.5 h-2.5 bg-[#7E7360] rounded-[2px]" />
                                )}
                                {paymentMethod !== option.brand && (
                                    <span className="w-2.5 h-2.5 bg-[#F2F1EF] rounded-[2px]" />
                                )}
                                </span>

                                <span className="text-sm flex items-center gap-2 font-medium text-gray-700">
                                    Pay with
                                    <span className={`font-semibold`}>
                                        <Image
                                            src={option.icon}
                                            alt={option.brand}
                                            width={1000}
                                            height={1000}
                                            className="w-10 h-10"
                                        />
                                    </span>
                                </span>
                                <small className='flex-1 text-[10px]'>{option.text}</small>
                            </label>
                        ))}
                    </div>
                </div>

                {paymentMethod === "Zelle" && (
                    <div className="bg-white border hidden lg:block border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-lg mb-4 bricolage-grotesque">Zelle Information</h3>
                        <div className="flex justify-between items-center mb-4 inter">
                            <span className="text-gray-700 inter">Name</span>
                            <span className="font-semibold inter">21 Void LLC</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="inter text-gray-700">Email</span>
                            <span className="font-bold inter">info.mspepo@gmail.com</span>
                        </div>

                        <div className='mt-5 border-t py-3'>
                            <label className="inter text-[16px] leading-relaxed">Have you paid?</label>
                            <label
                                htmlFor="zelleReceiptUrl"
                                className="flex flex-col items-center justify-center w-full h-12 border-2 border-dashed border-black/30 bg-black/5 rounded-lg cursor-pointer hover:bg-black/10 transition"
                                >
                                {isUploading ? (
                                    <span className="text-gray-500 text-sm animate-pulse">
                                    Uploading...
                                    </span>
                                ) : zelleReceiptUrl ? (
                                    <p>Receipt Uploaded</p>
                                ) : (
                                    <span className="text-gray-500 text-sm">
                                        Click here to upload Zelle Receipt
                                    </span>
                                )}
                                <input
                                    id="zelleReceiptUrl"
                                    type="file"
                                    name="zelleReceiptUrl"
                                    accept=".pdf,application/pdf,.jpg,.jpeg,.png"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <h1 className="lg:text-4xl text-2xl mb-5 bricolage-grotesque">Event Host Booking</h1>

                {/* Date & Time Section */}
                <div className="mb-6">
                    <h2 className="lg:text-2xl text-xl mb-6 bricolage-grotesque">Choose Date & Time</h2>

                    {/* Event Date Header */}
                    <div className="flex justify-between items-center mb-4 border-2 border-black/15 p-3 rounded-2xl">
                        <span className="font-semibold inter">Event Date</span>
                        <span className="text-sm text-gray-600 inter">{formatRange()}</span>
                    </div>

                    {/* Calendar */}
                    <div className="bg-white rounded-lg px-4 py-2 mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <div className="left text-[20px] font-semibold text-[#7E7360] items-center gap-[0.5rem]">
                                <span className="">
                                    {format(currentMonth, "MMMM")}
                                </span>
                                <select
                                    value={currentMonth.getFullYear()}
                                    onChange={(e) => {
                                    const newYear = parseInt(e.target.value, 10);
                                    setCurrentMonth(new Date(newYear, currentMonth.getMonth(), 1));
                                    }}
                                    className="rounded px-2 py-1"
                                >
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={goPrev}
                                    className="p-2 hover:bg-gray-100 rounded-2xl transition border border-black/15"
                                >
                                    <BiChevronLeft size={30} color='#7E7360' />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="p-2 hover:bg-gray-100 rounded-2xl transition border border-black/15"
                                >
                                    <BiChevronRight size={30} color='#7E7360' />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-2 inter">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="relative min-h-[250px]">
                            <AnimatePresence custom={dir} initial={false}>
                            <motion.div
                                key={format(currentMonth, "yyyy-MM")}
                                custom={dir}
                                variants={pageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "tween", duration: 0.18 }}
                                className="grid grid-rows-6 gap-1"
                            >
                                {calendarMatrix.map((week, wi) => (
                                <div key={wi} className="grid grid-cols-7 gap-1">
                                    {week.map((day, di) => {
                                    const isStart = range.start && isSameDay(day, range.start);
                                    const isEnd = range.end && isSameDay(day, range.end);
                                    const inRange =
                                        range.start &&
                                        range.end &&
                                        isWithinInterval(day, { start: range.start, end: range.end });
            
                                    // Check today
                                    const isToday = isSameDay(day, today);
            
                                    const isBooked = bookedRanges.some((r) => {
                                        const s = startOfDay(new Date(r.startDate));
                                        const e = startOfDay(new Date(r.endDate));
                                        return isWithinInterval(startOfDay(day), { start: s, end: e });
                                    });
                                    // block August(7) and September(8) of 2026
                                    const isBlocked = day.getFullYear() === 2026 && (day.getMonth() === 7 || day.getMonth() === 8);

                                    const disabled: boolean = isBefore(startOfDay(day), today) || isBooked || isBlocked;
            
                                    const base = "p-3 rounded-[9px] flex items-center justify-center text-sm border relative";
                                    
                                    // add brown X overlay for booked days
                                    const bookedX = isBooked ? (
                                        <span className="absolute top-1 right-1 text-[#7E4B2B] font-bold">✕</span>
                                    ) : null;
            
                                    let stateClass = "";
                                    const outsideCurrentMonth = !isSameMonth(day, currentMonth);
            
                                    if (disabled) {
                                        stateClass =
                                        "text-gray-300 bg-[#FBFBFB] border-[#F0F0F0] cursor-not-allowed";
                                    } else if (isStart || isEnd) {
                                        stateClass = "bg-[#7E7360] text-white font-medium border-[#CECECE]";
                                    } else if (inRange) {
                                        stateClass = "bg-yellow-100 border-[#CECECE]";
                                    } else if(outsideCurrentMonth){
                                        stateClass = "bg-[#E6F4FF] border-[#CECECE] hover:bg-blue-100 cursor-pointer"
                                    }else {
                                        stateClass =
                                        "hover:bg-gray-100 cursor-pointer bg-[#F2F2F2] border-[#CECECE]";
                                    }
            
                                    // Highlight today with purple border
                                    if (isToday) {
                                        stateClass += " ring-2 ring-[#8A2BE2]"; // Purple outline (customizable)
                                    }
            
                                    return (
                                        <button
                                        key={`${wi}-${di}`}
                                        onClick={() => handleDateClick(day)}
                                        disabled={disabled}
                                        className={`${base} ${stateClass}`}
                                        >
                                        {format(day, "d")}
                                        {bookedX}
                                        </button>
                                    );
                                    })}
                                </div>
                                ))}
                            </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Event Time */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4 border-2 border-black/15 p-3 rounded-2xl">
                            <span className="font-semibold inter">Event Time</span>
                            <span className="text-sm text-gray-600 inter">{startTime} - {endTime}</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 inter">Start Time</label>
                                <select
                                    required
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    className="w-full p-3 h-[3.5rem] lg:h-[4rem] bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                    <option value="">Select one...</option>
                                    {timeSlots.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 inter">End Time</label>
                                <select
                                    value={endTime}
                                    required
                                    onChange={(e) => setEndTime(e.target.value)}
                                    className="w-full p-3 h-[3.5rem] lg:h-[4rem] bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                    <option value="">Select one...</option>
                                    {timeSlots.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Information Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-6 bricolage-grotesque">Event Information</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 inter">Event Type</label>
                            <select
                                value={eventType}
                                required
                                disabled={eventList.length === 0}
                                onChange={(e) => {
                                    const selectedType = eventList.find(
                                    (type) => type.event === e.target.value
                                    );
                                    setEventType(e.target.value);
                                    if (selectedType) setEventPrice(selectedType.price);
                                }}
                                className="w-full p-3 h-[3.5rem] lg:h-[4rem] bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                {eventList.length === 0 ? (
                                    <option value="">Loading...</option>
                                ) : (
                                    <option value="">Select event type</option>
                                )}
                                {eventList.map((type) => (
                                    <option key={type.event} value={type.event}>
                                    {type.event}
                                    </option>
                                ))}
                            </select>
                            {eventType === 'Others' && (
                                <input
                                    type="text"
                                    placeholder="Enter custom event type"
                                    value={customEventType}
                                    onChange={(e) => {
                                        setCustomEventType(e.target.value);
                                        // setEventType(e.target.value); // Set state to custom value
                                    }}
                                    className="w-full p-3 py-4 mt-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    required
                                />
                            )}
                            <p className='text-[13px]'>Price: ${eventPrice}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 inter">Event Audience Demographic</label>
                            <select
                                value={demographic}
                                required
                                onChange={(e) => setDemographic(e.target.value)}
                                className="w-full p-3 h-[3.5rem] lg:h-[4rem] bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <option value="">Select Audience Demographic</option>
                                <option value="Chineese">Chineese</option>
                                <option value="Nigerian">Nigerian</option>
                                <option value="American">American</option>
                                <option value="Latino">Latino</option>
                                <option value="Black Americans">Black Americans</option>
                                <option value="White Americans">White Americans</option>
                                <option value="Mixed">Mixed</option>
                                <option value="Others">Others</option>
                            </select>
                            {demographic === 'Others' && (
                                <input
                                    type="text"
                                    placeholder="Enter custom audience demographic"
                                    value={customDemographic}
                                    onChange={(e) => {
                                        setCustomDemographic(e.target.value);
                                        // setDemographic(e.target.value); // Set state to custom value
                                    }}
                                    className="w-full p-3 mt-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    required
                                />
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 inter">Event Location (State)</label>
                            <select
                                value={state}
                                required
                                // disabled={allStates.length == 0}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full p-3 h-[3.5rem] lg:h-[4rem] bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                {allStates.length == 0 ? <option value="">Loading...</option> : <option value="">Select State</option>}
                                {allStates.map((state, index) => (
                                    <option value={state.name} key={index}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 inter">Event Location (City)</label>
                            <select
                                value={city}
                                required
                                onChange={(e) => setCity(e.target.value)}
                                disabled={!state}
                                className="w-full p-3 h-[3.5rem] lg:h-[4rem] bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                {!state ? <option>Select a state first</option> : <option value="">Select City</option>}
                                {allCities && allCities.map((city, index) => (
                                    <option key={index}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className="bg-white border lg:hidden border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-4 bricolage-grotesque">Payment Summary</h3>
                            <div className="flex flex-wrap gap-4">
                                {[30, 40, 50, 60].map((percentage) => (
                                    <button
                                        key={percentage}
                                        onClick={() => setSelectedPaymentPercentage(percentage)}
                                        className={`px-3 py-2 rounded-lg text-[12px] font-semibold border-2 transition ${
                                            selectedPaymentPercentage === percentage
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'bg-white text-gray-800 border-gray-300 hover:border-blue-600'
                                        }`}
                                    >
                                        {percentage}% Upfront
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-between items-center mb-4 inter">
                                <span className="text-gray-700 inter">Service Charge</span>
                                <span className="font-semibold inter">${serviceCharge.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center mb-4 inter">
                                <span className="text-gray-700 text-[13px] inter">Number of days (1 by default)</span>
                                <span className="font-semibold inter">{numberOfDays()}</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between items-center">
                                <span className="font-bold inter">{selectedPaymentPercentage}% Upfront Payment:</span>
                               <span className="font-bold inter">${amountPaid?.toFixed(2)}</span>
                            </div>
                            <div className="pt-2 flex justify-between items-center">
                                <span className="font-bold inter">Balance to be Paid:</span>
                               <span className="font-bold inter">${balanceToBePaid?.toFixed(2)}</span>
                            </div>
                            <div className="pt-2 text-gray-300 text-[12px] flex justify-between items-center">
                                <span className="font-bold inter">Base Amount</span>
                                <span className="font-bold inter">${totalAmount.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="bg-white border lg:hidden border-gray-200 rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-4 bricolage-grotesque">Payment Method</h3>
                            <div className="space-y-2">
                                {paymentOptions.map((option) => (
                                    <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                        type="radio"
                                        name="payment"
                                        value={option.brand}
                                        onChange={() => setPaymentMethod(option.brand.toString() as PaymentMethod['method'])}
                                        className="hidden"
                                        />
                                        <span
                                        className={`w-5 h-5 flex items-center justify-center rounded-[6px] border-[1px] transition-all duration-200 ${
                                            paymentMethod === option.brand
                                            ? "border-[#8C8C8C]"
                                            : "border-gray-300 group-hover:border-gray-400"
                                        }`}
                                        >
                                        {paymentMethod === option.brand && (
                                            <span className="w-2.5 h-2.5 bg-[#7E7360] rounded-[2px]" />
                                        )}
                                        {paymentMethod !== option.brand && (
                                            <span className="w-2.5 h-2.5 bg-[#F2F1EF] rounded-[2px]" />
                                        )}
                                        </span>

                                        <span className="text-sm flex items-center gap-2 font-medium text-gray-700">
                                            Pay with
                                            <span className={`font-semibold`}>
                                                <Image
                                                    src={option.icon}
                                                    alt={option.brand}
                                                    width={1000}
                                                    height={1000}
                                                    className="w-10 h-10"
                                                />
                                            </span>
                                        </span>
                                        <small className='flex-1 text-[10px]'>{option.text}</small>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {paymentMethod === "Zelle" && (
                            <div className="bg-white border lg:hidden  border-gray-200 rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-4 bricolage-grotesque">Zelle Information</h3>
                                <div className="flex justify-between items-center mb-4 inter">
                                    <span className="text-gray-700 inter">Name</span>
                                    <span className="font-semibold inter">21 Void LLC</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="inter text-gray-700">Email</span>
                                    <span className="font-bold inter">info.mspepo@gmail.com</span>
                                </div>

                                <div className='mt-5 border-t py-3'>
                                    <label className="inter text-[16px] leading-relaxed">Have you paid?</label>
                                    <label
                                        htmlFor="zelleReceiptUrl"
                                        className="flex flex-col items-center justify-center w-full h-12 border-2 border-dashed border-black/30 bg-black/5 rounded-lg cursor-pointer hover:bg-black/10 transition"
                                        >
                                        {isUploading ? (
                                            <span className="text-gray-500 text-sm animate-pulse">
                                            Uploading...
                                            </span>
                                        ) : zelleReceiptUrl ? (
                                            <p>Receipt Uploaded</p>
                                        ) : (
                                            <span className="text-gray-500 text-sm">
                                                Click here to upload Zelle Receipt
                                            </span>
                                        )}
                                        <input
                                            id="zelleReceiptUrl"
                                            type="file"
                                            name="zelleReceiptUrl"
                                            accept=".pdf,application/pdf"
                                            onChange={handleFileUpload}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col w-full gap-[1rem] lg:flex-row items-center justify-between mt-8">
                    <button
                        onClick={onPrevious}
                        className="border-2 2xl:w-[20%] w-full border-b-4 text-sm border-black/15 bg-white hover:bg-black/10 p-3 shadow-lg rounded-md transition-all duration-100"
                    >
                        Previous
                    </button>
                    {paymentMethod === "Zelle" && (
                        <button
                            onClick={handleCompleteZellePayment}
                            disabled={!isCheckoutReady}
                            className="border-2 w-full 2xl:w-[20%] border-b-4 text-sm 
                            border-[#645C4C] bg-[#7E7360] hover:bg-[#5c5446] text-white 
                            disabled:bg-white disabled:text-[#645C4C] cursor-pointer 
                            p-3 shadow-lg rounded-md transition-all duration-100"
                            >
                            {isProcessing ? "Processing..." : "Complete Booking"}
                        </button>
                    )}
                    {paymentMethod === "Stripe" && (
                        <button
                            onClick={handleStripeCheckout}
                            disabled={!isCheckoutReady}
                            className="border-2 w-full 2xl:w-[20%] border-b-4 text-sm 
                            border-[#645C4C] bg-[#7E7360] hover:bg-[#5c5446] text-white 
                            disabled:bg-white disabled:text-[#645C4C] cursor-pointer 
                            p-3 shadow-lg rounded-md transition-all duration-100"
                            >
                            {isProcessing ? "Processing..." : "Proceed to Stripe Checkout"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingForm;