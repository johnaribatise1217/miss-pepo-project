/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../../backend/connect';
import Booking from '../../../../../backend/model/Booking';
import { sendBookingConfirmationEmail } from '../../../../../backend/email';

dbConnect()

export const POST = async(req : NextRequest) => {
  const body = await req.json()
  try {
    const {
      email, clientName, startDate, endDate,
      eventType, audienceDemographic, state, startTime, endTime,
      city, numberOfDays, zelleReceiptUrl, signature, paymentMethod, amount
    } = body
    
    const paymentInfo ={
      id: clientName + "_" + zelleReceiptUrl,
      status: "paid",
      amountPaid: amount
    }

    await Booking.create({
      clientName,
      signature,
      email,
      eventDate: {
        startDate: new Date(startDate),
        endDate: new Date(endDate)
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

    await sendBookingConfirmationEmail(clientName, email, {
      eventType,
      startDate,
      endDate,
      paymentMethod,
      amount
    }, zelleReceiptUrl);

    return NextResponse.json({ message: 'Zelle payment recorded successfully', received : true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to record Zelle payment' }, { status: 500 })
  }
}