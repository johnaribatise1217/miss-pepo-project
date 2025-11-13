/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer';

export const sendBookingConfirmationEmail = async (clientName: string, email: string, bookingDetails: any, zelleReceiptUrl: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    cc: 'info.mspepo@gmail.com', // Send to Ms Pepo as well
    subject: 'Booking Confirmation',
    html: `
      <h1>Booking Confirmation</h1>
      <p>Dear ${clientName},</p>
      <p>Thank you for your booking! Here are your booking details:</p>
      <ul>
        <li>Event Type: ${bookingDetails.eventType}</li>
        <li>Start Date: ${bookingDetails.startDate}</li>
        <li>End Date: ${bookingDetails.endDate}</li>
        <li>Payment Method: ${bookingDetails.paymentMethod}</li>
        <li>Amount Paid: $${bookingDetails.amount}</li>
        <li>Zelle Receipt: <a href="${zelleReceiptUrl}">View Receipt</a></li>
      </ul>
      <p>I look forward to hosting your event!</p>
      <p>Best Regards,<br>Ms Pepo</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};