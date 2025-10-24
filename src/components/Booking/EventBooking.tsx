import React, { useMemo, useState } from 'react';
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

interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface BookingFormProps {
    onNext: () => void;
    onPrevious: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onNext, onPrevious }) => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [eventType, setEventType] = useState('');
    const [demographic, setDemographic] = useState('Nigerian');
    const [state, setState] = useState('Texas');
    const [city, setCity] = useState('Houston');
    const today: Date = startOfDay(new Date());
    const minYear: number = today.getFullYear();
    const minDate: Date = new Date(minYear, 0, 1); 

    const [currentMonth, setCurrentMonth] = useState<Date>(
      new Date(today.getFullYear(), today.getMonth(), 1)
    );
    const [range, setRange] = useState<DateRange>({ start: null, end: null });
    const [dir, setDir] = useState<number>(0);

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

    if (!range.start || (range.start && range.end)) {
        setRange({ start: day, end: null });
    } else if (isAfter(day, range.start)) {
        setRange({ ...range, end: day });
    } else {
        setRange({ start: day, end: null });
    }
    };

    const isDisabled = (day: Date): boolean => {
    return isBefore(startOfDay(day), minDate);
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
    return "May 8 , 2025 - May 8 , 2025";
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
    

    const eventTypes = [
        'Wedding',
        'Corporate Event',
        'Birthday Party',
        'Anniversary',
        'Conference',
        'Other'
    ];

    const timeSlots = [
        '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
        '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
        '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
        '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
    ];

    return (
        <div className="flex md:flex-row flex-col gap-6">
            {/* Left Sidebar */}
            <div className="md:w-80 w-full space-y-6">
                {/* Note Section */}
                <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 bricolage-grotesque">Note!</h3>
                    <p className="text-sm text-gray-700 mb-4 inter">
                        Based on my service agreement, the event planner or individual inviting Ms. Pepo for any event outside of Houston, Texas means you are responsible for providing the following at least 7 day before event date.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Accommodation Allowance</li>
                        <li>• Transport Allowance</li>
                    </ul>
                </div>

                {/* Payment Summary */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4 bricolage-grotesque">Payment Summary</h3>
                    <div className="flex justify-between items-center mb-4 inter">
                        <span className="text-gray-700 inter">Service Charge</span>
                        <span className="font-semibold inter">$0.00</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                        <span className="font-bold inter">Total</span>
                        <span className="font-bold inter">$0.00</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <h1 className="text-4xl mb-5 bricolage-grotesque">Event Host Booking</h1>

                {/* Date & Time Section */}
                <div className="mb-8">
                    <h2 className="text-2xl mb-6 bricolage-grotesque">Choose Date & Time</h2>

                    {/* Event Date Header */}
                    <div className="flex justify-between items-center mb-4 border-2 border-black/15 p-3 rounded-2xl">
                        <span className="font-semibold inter">Event Date</span>
                        <span className="text-sm text-gray-600 inter">{formatRange()}</span>
                    </div>

                    {/* Calendar */}
                    <div className="bg-white rounded-lg p-4 mb-6">
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
            
                                    // Disable if before today
                                    const disabled: boolean = isBefore(startOfDay(day), today);
            
                                    const base =
                                        "p-3 rounded-[9px] flex items-center justify-center text-sm border relative";
            
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
                                        </button>
                                    );
                                    })}
                                </div>
                                ))}
                            </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* <div className="grid grid-cols-7 gap-2">
                            {days.map((dateObj, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => dateObj.isCurrentMonth && setSelectedDate(dateObj.day)}
                                    disabled={!dateObj.isCurrentMonth}
                                    className={`
                                        aspect-square rounded-2xl flex items-center justify-center text-sm transition border border-black/15 bg-[#F2F2F2] h-14 w-full
                                        ${!dateObj.isCurrentMonth ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100'}
                                        ${selectedDate === dateObj.day && dateObj.isCurrentMonth ? 'bg-[#645C4C] text-white hover:bg-[#645C4C]' : ''}
                                    `}
                                >
                                    {dateObj.day}
                                </button>
                            ))}
                        </div> */}
                    </div>

                    {/* Event Time */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4 border-2 border-black/15 p-3 rounded-2xl">
                            <span className="font-semibold inter">Event Time</span>
                            <span className="text-sm text-gray-600 inter">11:00 AM - 05:00 PM</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 inter">Start Time</label>
                                <select
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
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
                                    onChange={(e) => setEndTime(e.target.value)}
                                    className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
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

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 inter">Event Type</label>
                            <select
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <option value="">Select event type</option>
                                {eventTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 inter">Event Audience Demographic</label>
                            <select
                                value={demographic}
                                onChange={(e) => setDemographic(e.target.value)}
                                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <option value="Nigerian">Nigerian</option>
                                <option value="American">American</option>
                                <option value="Mixed">Mixed</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 inter">Event Location (State)</label>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <option value="Texas">Texas</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 inter">Event Location (City)</label>
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <option value="Houston">Houston</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-8">
                    <button
                        onClick={onPrevious}
                        className="border-2 border-b-4 text-sm border-black/15 bg-white hover:bg-black/10 p-3 shadow-lg rounded-md transition-all duration-100"
                    >
                        Previous
                    </button>
                    <button
                        onClick={onNext}
                        className="border-2 border-b-4 text-sm border-[#645C4C] bg-[#7E7360] hover:bg-[#5c5446] text-white p-3 shadow-lg rounded-md transition-all duration-100"
                    >
                        Proceed to Checkout
                    </button>
                </div>


            </div>
        </div>
    );
};

export default BookingForm;