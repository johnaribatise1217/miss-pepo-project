/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer';

export const sendBookingConfirmationEmail = async (clientName: string, email: string, bookingDetails: any, zelleReceiptUrl?: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px;">
      <h1 style="color: #333; font-size: 24px; margin-bottom: 20px; text-align: center;">Booking Confirmation</h1>
      <p style="font-size: 16px; margin-bottom: 20px; color: #555;">Dear ${clientName},</p>
      <p style="font-size: 16px; margin-bottom: 20px; color: #555;">Thank you for your booking! Here are your booking details:</p>
      
      <div style="background-color: #fff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">Event Details</h2>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Event Type:</strong> ${bookingDetails.eventType}</li>
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Start Date:</strong> ${new Date(bookingDetails.startDate).toLocaleDateString('en-US', { dateStyle: 'long' })}</li>
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>End Date:</strong> ${new Date(bookingDetails.endDate).toLocaleDateString('en-US', { dateStyle: 'long' })}</li>
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Payment Method:</strong> ${bookingDetails.paymentMethod}</li>
          ${zelleReceiptUrl ? `<li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Zelle Receipt:</strong> <a href="${zelleReceiptUrl}" style="color: #007bff; text-decoration: none;">View Receipt</a></li>` : ''}
        </ul>
      </div>
      
      <div style="background-color: #fff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
        <h2 style="font-size: 18px; margin-bottom: 15px; color: #333;">Payment Breakdown</h2>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Base Amount:</strong> $${bookingDetails.baseAmount}</li>
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Amount Paid:</strong> $${bookingDetails.amount}</li>
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Percentage Paid:</strong> ${bookingDetails.percentagePaid}%</li>
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Balance to be Paid:</strong> $${bookingDetails.balanceToBePaid}</li>
          <li style="font-size: 14px; margin-bottom: 10px; color: #666;"><strong>Percentage Remaining:</strong> ${bookingDetails.percentageRemaining}%</li>
        </ul>
      </div>
      
      <p style="font-size: 16px; margin-bottom: 20px; color: #555;">I look forward to hosting your event!</p>
      <p style="font-size: 16px; margin-bottom: 0; color: #555;">Best Regards,<br><strong>Ms Pepo</strong></p>
    </div>
  `;


  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    cc: 'info.mspepo@gmail.com', // Send to Ms Pepo as well
    subject: 'Booking Confirmation',
    html
  };

  await transporter.sendMail(mailOptions);
};

export const parseLocalDate = (dateStr: string) => {
  const d = new Date(dateStr);
  d.setHours(12, 0, 0, 0);
  return d;
};