/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
'use server'
import { NextRequest, NextResponse } from "next/server";
import Booking from "../../../../../backend/model/Booking";
import { headers } from "next/headers";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export const POST = async(req: NextRequest) => {
  try {
    const rawBody = await req.text();
    const signature = (await headers()).get("stripe-signature") as string;
    
    if (!signature) {
      return new Response("Missing signature", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const metadata = session.metadata;

      const paymentInfo ={
        id: session.payment_intent,
        status: session.payment_status,
        amountPaid: session.amount_total / 100
      }

      await Booking.create({
        clientName: metadata.clientName,
        email: metadata.email,
        eventDate: {
          startDate: new Date(metadata.startDate),
          endDate: new Date(metadata.endDate)
        },
        eventInfo: {
          eventType: metadata.eventType,
          audienceDemographic: metadata.audienceDemographic
        },
        location: {
          state: metadata.state,
          city: metadata.city
        },
        numberOfDays: metadata.numberOfDays,
        paidAt: new Date(),
        paymentInfo
      });
    }

    return NextResponse.json({ received: true , message : "Booked Successfully"});
  } catch (error : any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}