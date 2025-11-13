/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
'use server'
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../../backend/connect';

dbConnect()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async(req : NextRequest) => {
  const body = await req.json()
    const {
      email, clientName, startDate, endDate,
      eventType, audienceDemographic, state,
      city, numberOfDays, amount, signature, startTime, endTime, paymentMethod
    } = body
  
  try {
    const session = await stripe.checkout.sessions.create({
    payment_method_types : ["card", "us_bank_account", "cashapp", "crypto"],
    success_url : `${process.env.NEXT_PUBLIC_APP_URL}/event-host/success`,
    cancel_url : `${process.env.NEXT_PUBLIC_APP_URL}/booking`,
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
      numberOfDays,
      signature,
      startTime,
      endTime,
      paymentMethod
    },
    line_items : [
        {
          price_data : {
            currency : "usd",
            product_data : {
              name : `${eventType} by ${clientName}`,
              description : `Event Type: ${eventType}
              \n Audience Demographic: ${audienceDemographic} 
              \n\n Location: ${city}, ${state} 
              \n\n Event Date: From ${new Date(startDate).toISOString().split('T')[0]} to ${new Date(endDate).toISOString().split('T')[0]}
              \n\n Number of Days: ${numberOfDays}`
            },
            unit_amount : Number(amount) * 100
          },
          quantity : 1
        }
      ]
    })

    return NextResponse.json({session})
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 })
  }
}