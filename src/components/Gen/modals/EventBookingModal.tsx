/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useMemo, useState } from 'react'
import ModalBase from './ModalBase'
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

const EventBookingModal = (
  { isOpen, onClose, onProceed, onPrevious } : any
) => {
  const today: Date = startOfDay(new Date());
  const minYear: number = today.getFullYear();
  const minDate: Date = new Date(minYear, 0, 1); // Jan 1 of current year

  // Initial month = current month
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [range, setRange] = useState<DateRange>({ start: null, end: null });
  const [startTime, setStartTime] = useState<string>("11:00 AM");
  const [endTime, setEndTime] = useState<string>("05:00 PM");
  const [dropdown1, setDropdown1] = useState<string>("");
  const [dropdown2, setDropdown2] = useState<string>("");
  const [dir, setDir] = useState<number>(0); // -1 prev, 1 next

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

  const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between bg-inherit items-center mt-[1rem] px-8 xl:py-2 2xl:py-4">
        <h2 className="2xl:text-[44px] xl:text-[30px] text-black font-[400] bricolage-grotesque ">Event Host Booking</h2>
        <button onClick={onClose} className="text-[#7E7360] text-[20px] p-3 rounded-[5px] bg-[#F2F2F2] hover:text-gray-600">
          ✕
        </button>
      </div>
      <div className="flex items-start gap-[2rem] w-full px-8 xl:py-2 2xl:py-4">
        <div className="left w-[50%] xl:max-h-[400px] lg:max-h-[300px] 2xl:max-h-[660px] xl:space-y-1 overflow-y-auto space-y-2 mb-[1rem] flex flex-col gap-[1rem] items-start">
          <p className='bricolage-grotesque text-[28px] xl:text-[22px] font-[300] leading-[140%]'>Choose Date & Time</p>
          <div className='flex justify-between inter items-center w-full xl:py-2 px-3 2xl:py-4 border-[1px] border-[#D9D9D9] rounded-[12px]'>
            <span className='text-[14px] font-bold'>Event Date</span>
            <p className="font-light text-[14px]">{formatRange()}</p>
          </div>
          <div className='flex flex-col w-full gap-[1rem]'>
            <div className="flex justify-between items-center">
              <div className="left 2xl:text-[20px] xl:text-[16px] font-semibold text-[#7E7360] items-center gap-[0.5rem]">
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
              <div className="space-x-2">
                <button
                  onClick={goPrev}
                  className="px-3 rounded-[8px] border text-[30px] text-[#7E7360] hover:bg-gray-50"
                >
                  ‹
                </button>
                <button
                  onClick={goNext}
                  className="px-3 rounded-[8px] border text-[30px] text-[#7E7360] hover:bg-gray-50"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 xl:text-[14px] 2xl:text-[16px] font-semibold w-full text-center mb-1">
              {daysOfWeek.map((d) => (
                <div key={d} className="py-1">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar with animation */}
            <div className="relative 2xl:min-h-[250px] xl:min-h-[200px]">
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
                          "2xl:p-3 xl:p-1 xl:py-2 rounded-[9px] flex items-center justify-center text-sm border relative";

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
            <div className='flex justify-between inter items-center w-full xl:py-2 px-3 2xl:py-4 border-[1px] border-[#D9D9D9] rounded-[12px]'>
              <span className='text-[14px] font-bold'>Event Time</span>
              <p className="font-light text-[14px]">{startTime} - {endTime}</p>
            </div>
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="flex-1 bg-[#F2F2F2] border rounded-lg px-2 xl:py-2 2xl:py-4 text-sm"
              />
              <input
                type="text"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="flex-1 bg-[#F2F2F2] border rounded-lg px-2 xl:py-2 2xl:py-4 text-sm"
              />
            </div>
            <p className='2xl:text-[28px] xl:text-[20px] bricolage-grotesque py-2'>Event Information</p>
            <div className="flex flex-col items-start w-full gap-2">
              <label htmlFor="dropdown1" className='font-[500] text-[15px]'>Event Type</label>
              <select
                value={dropdown1}
                onChange={(e) => setDropdown1(e.target.value)}
                className="flex-1 w-full inter bg-[#F2F2F2] border rounded-lg xl:py-2 px-3 2xl:py-4 text-sm"
              >
                <option value="">Select Event Type</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
              <label htmlFor="dropdown1" className='font-[500] text-[15px]'>Event Audience Demographic</label>
              <select
                value={dropdown1}
                onChange={(e) => setDropdown1(e.target.value)}
                className="flex-1 w-full inter bg-[#F2F2F2] border rounded-lg xl:py-2 px-3 2xl:py-4 text-sm"
              >
                <option value="">Nigerian</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="flex w-full gap-2">
              <select
                value={dropdown1}
                onChange={(e) => setDropdown1(e.target.value)}
                className="flex-1 inter bg-[#F2F2F2] border rounded-lg xl:py-2 px-3 2xl:py-4 text-sm"
              >
                <option value="">Texas</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="flex w-full gap-2">
              <select
                value={dropdown1}
                onChange={(e) => setDropdown1(e.target.value)}
                className="flex-1 inter bg-[#F2F2F2] border rounded-lg xl:py-2 px-3 2xl:py-4 text-sm"
              >
                <option value="">Houston</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="right flex flex-col gap-[1.5rem] bricolage-grotesque w-[45%]">
          <div className="flex flex-col gap-[1rem] border-[#D9D9D9] border-[1px] rounded-[10px] p-4">
            <p className='text-[22px] leading-[140%]'>Payment Summary</p>
            <div className="flex justify-between items-start w-full">
              <small className='text-[15px] font-[300] inter'>Service Charge</small>
              <small className='text-[15px] font-[400] inter'>$0.00</small>
            </div>
            <div className='w-full h-[1px] content-none bg-[#D9D9D9]'></div>
            <div className="flex inter text-[15px] font-[700] w-full justify-between items-center">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem] border-[#D9D9D9] bg-[#F2F2F2] border-[2px] rounded-[10px] p-5">
            <h4 className='text-[22px] bricolage-grotesque '>Note!</h4>
            <p className='inter text-[15px] font-[300]'>
              Based on my service agreement, the event planner or individual inviting Ms. Pepo for any event outside of Houston, Texas means you are responsible for providing the following at least 7 day before event date.
            </p>
            <ul className="list-disc ml-[2rem] inter font-[300] text-[15px]">
              <li>Accomadation Allowance</li>
              <li>Transport Allowance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[2rem] border-t xl:py-2 px-8 2xl:py-3">
        <button
          onClick={onPrevious}
          className="2xl:px-6 2xl:py-4 xl:px-3 xl:py-3 border-2 border-b-4 border-[#D9D9D9] rounded-[15px] hover:bg-gray-100"
        >
          Previous
        </button>
        <button
          onClick={onProceed}
          className="bg-[#7E7360] 2xl:px-6 2xl:py-4 xl:px-3 xl:py-3 border-[#645C4C] border-2 border-b-4 text-[#D9D9D9] rounded-[15px] cursor-not-allowed"
        >
          Proceed to Checkout
        </button>
      </div>
    </ModalBase>
  )
}

export default EventBookingModal