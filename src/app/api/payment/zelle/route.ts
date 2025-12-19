/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../../backend/connect';
import Booking from '../../../../../backend/model/Booking';
import {sendBookingConfirmationEmail } from '../../../../../backend/email';

dbConnect()

export const POST = async(req : NextRequest) => {
  const body = await req.json()
  try {
    const {
      email, firstName, lastName, startDate, endDate,
      eventType, audienceDemographic, state, startTime, endTime,
      city, numberOfDays, zelleReceiptUrl,  paymentMethod, amount,
      baseAmount, percentagePaid, percentageRemaining, balanceToBePaid
    } = body
    
    const paymentInfo ={
      id: firstName + "_" + lastName + "_" + zelleReceiptUrl,
      status: "paid",
      amountPaid: amount,
      baseAmount,
      percentagePaid,
      percentageRemaining,
      balanceToBePaid
    }

    await Booking.create({
      firstName,
      lastName,
      email,
      eventDate: {
        startDate,
        endDate
      },
      eventInfo: {
        eventType,
        audienceDemographic,
        startTime,
        endTime
      },
      location: {
        state,
        city
      },
      paymentMethod,
      zelleReceiptUrl,
      numberOfDays,
      paidAt: new Date(),
      paymentInfo,
    })

    await sendBookingConfirmationEmail(`${firstName} ${lastName}`, email, {
      eventType,
      startDate,
      endDate,
      paymentMethod,
      amount,
      baseAmount, percentagePaid, percentageRemaining, balanceToBePaid
    }, zelleReceiptUrl);

    return NextResponse.json({ message: 'Zelle payment recorded successfully', received : true })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error}, { status: 500 })
  }
}