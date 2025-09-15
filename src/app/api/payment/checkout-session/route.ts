/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
'use server'
import { NextRequest, NextResponse } from 'next/server';

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export const GET = async(req : NextRequest) => {
  const {searchParams} = new URL(req.url)

  const email = searchParams.get('email')
  const clientName = searchParams.get('clientName')
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')
  const eventType = searchParams.get('eventType')
  const audienceDemographic = searchParams.get('audioDemographic')
  const state = searchParams.get('state')
  const city = searchParams.get('city')
  const numberOfDays = searchParams.get('numberOfDays')
  const amount = searchParams.get('amount')
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types : ["card", "us_bank_account", "cashapp", "crypto"],
    success_url : `${process.env.NEXT_PUBLIC_APP_URL}/event-host/success`,
    cancel_url : `${process.env.NEXT_PUBLIC_APP_URL}/event-host`,
    customer_email : email,
    mode : "payment",
    metadata : {
      clientName,
      email,
      startDate,
      endDate,
      eventType,
      audienceDemographic,
      state,
      city,
      numberOfDays
    },
    line_items : [
      {
        price_data : {
          currency : "usd",
          product_data : {
            name : `${eventType} by ${clientName}`,
            description : `Event Type: ${eventType} \n Audience Demographic: ${audienceDemographic} \n Location: ${city}, ${state} \n Event Date: From ${startDate} to ${endDate} \n Number of Days: ${numberOfDays}`
          },
          unit_amount : Number(amount) * 100
        },
        quantity : 1
      }
    ]
  })

  return NextResponse.json({session})
}