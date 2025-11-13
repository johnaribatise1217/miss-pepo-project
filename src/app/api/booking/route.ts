/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../backend/connect';
import Booking from '../../../../backend/model/Booking';

dbConnect();

export const GET = async (req: NextRequest) => {
  try {
    const bookings = await Booking.find({}, 'eventDate').lean();
    const ranges = bookings
      .map((b: any) => {
        const s = b?.eventDate?.startDate;
        const e = b?.eventDate?.endDate;
        if (!s || !e) return null;
        return { startDate: new Date(s).toISOString(), endDate: new Date(e).toISOString() };
      })
      .filter(Boolean);
    return NextResponse.json({ booked: ranges });
  } catch (error) {
    console.error('Failed to fetch bookings', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
};