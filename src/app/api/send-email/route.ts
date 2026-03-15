import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, number, message } = await req.json();
 

  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Portfolio Inquiry: ${name}`,
      text: `
        New Contact Form Submission
        ---------------------------
        Name: ${name}
        Email: ${email}
        Phone: ${number}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .header { background: #1a1a1a; color: #ffffff; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; }
            .content { padding: 40px; background: #ffffff; }
            .info-block { margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px dashed #eee; }
            .info-block:last-child { border-bottom: none; }
            .label { font-size: 12px; text-transform: uppercase; color: #888; letter-spacing: 1px; font-weight: 700; margin-bottom: 5px; display: block; }
            .value { font-size: 16px; color: #1a1a1a; font-weight: 500; }
            .message-box { background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316; margin-top: 10px; font-style: italic; }
            .footer { background: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry</h1>
            </div>
            <div class="content">
              <div class="info-block">
                <span class="label">From</span>
                <span class="value">${name}</span>
              </div>
              <div class="info-block">
                <span class="label">Email Address</span>
                <span class="value">${email}</span>
              </div>
              <div class="info-block">
                <span class="label">Phone Number</span>
                <span class="value">${number}</span>
              </div>
              <div class="info-block">
                <span class="label">Message</span>
                <div class="message-box">
                  "${message}"
                </div>
              </div>
            </div>
            <div class="footer">
              This message was sent via your Portfolio Contact Form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
