/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../backend/connect';
import Pricing from '../../../../backend/model/Pricing';

dbConnect()

export const GET = async(req: NextRequest) => {
  const pricingList = await Pricing.find({}).lean()
  if(!pricingList) {
    return NextResponse.json({
      message : "No Pricing info yet",
      data : null
    })
  }

  return NextResponse.json({
    message : "Successful",
    data : pricingList
  }, {status : 200})
}

export const POST = async(req : NextRequest) => {
  try {
    const body = await req.json()
    if(!body){
      throw new Error("No req body attached")
    }
    const {event, price} = body
    await Pricing.create({
      event, price
    })

    return NextResponse.json({
      message : "Created Successfully",
    })
  } catch (err : any) {
    return NextResponse.json({
      error : err?.response?.message
    })
  }
}