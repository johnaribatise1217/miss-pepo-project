/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
'use server'
import { NextRequest, NextResponse } from 'next/server';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async(req : NextRequest) => {
  const body = await req.json()
    const {
      email, firstName, lastName, startDate, endDate,
      eventType, audienceDemographic, state,
      city, numberOfDays, amount, startTime, endTime, paymentMethod,
      baseAmount, percentagePaid, percentageRemaining, balanceToBePaid
    } = body
  
  try {
    const session = await stripe.checkout.sessions.create({
    payment_method_types : ["card", "us_bank_account", "cashapp"],
    success_url : `${process.env.NEXT_PUBLIC_APP_URL}/event-host/success`,
    cancel_url : `${process.env.NEXT_PUBLIC_APP_URL}/booking`,
    customer_email : email,
    mode : "payment",
    metadata : {
      firstName,
      lastName,
      email,
      startDate,
      endDate,
      eventType,
      audienceDemographic,
      state,
      city,
      numberOfDays,
      startTime,
      endTime,
      paymentMethod,
      baseAmount, percentagePaid, percentageRemaining, balanceToBePaid
    },
    line_items : [
        {
          price_data : {
            currency : "usd",
            product_data : {
              name : `${eventType} by ${firstName} ${lastName}`,
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