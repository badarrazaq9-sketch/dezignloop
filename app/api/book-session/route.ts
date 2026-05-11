// app/api/book-session/route.ts
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return Response.json(
      { success: false, message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, service, timePreference } = body;

    // Required fields validation
    if (!name || !email || !phone || !timePreference) {
      console.log("❌ Missing required fields:", { name, email, phone, timePreference });
      return Response.json(
        { 
          success: false, 
          message: "Name, email, phone, and time preference are required" 
        },
        { status: 400 }
      );
    }

    console.log("📩 New booking request:", { 
      name, 
      email, 
      phone, 
      service, 
      timePreference 
    });

    // ─────────────────────── EMAIL NOTIFICATION ───────────────────────
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("❌ Email credentials missing in env");
      return Response.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    // Send email to you
    await transporter.sendMail({
      from: `"Website Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Strategy Session Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C9FF0;">🎯 New Strategy Session Booking</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📱 Phone:</strong> ${phone}</p>
            <p><strong>🛠️ Service:</strong> ${service || "Web Design"}</p>
            <p><strong>⏰ Preferred Time:</strong> ${timePreference}</p>
          </div>
          <p><strong>📋 Next Steps:</strong></p>
          <ol style="line-height: 1.6;">
            <li>Call the client at their preferred time: <strong>${timePreference}</strong></li>
            <li>Prepare for discussion about: ${service || "Web Design"}</li>
            <li>Have the launch strategy template ready</li>
          </ol>
          <hr style="margin: 30px 0; border: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This booking was received from your website's strategy session form.
          </p>
        </div>
      `,
    });

    // Send confirmation email to the client
    // await transporter.sendMail({
    //   from: `"Strategy Session" <${process.env.EMAIL_USER}>`,
    //   to: email,
    //   subject: "Your Strategy Session is Confirmed!",
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //       <h2 style="color: #1C9FF0;">✅ Your Strategy Session is Confirmed!</h2>
    //       <p>Hi ${name},</p>
    //       <p>Thank you for booking your free launch strategy session with us! Here's a summary of your booking:</p>
          
    //       <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
    //         <p><strong>📅 Session Type:</strong> 1-on-1 Launch Strategy Call</p>
    //         <p><strong>⏰ Preferred Time Slot:</strong> ${timePreference}</p>
    //         <p><strong>🛠️ Service Interest:</strong> ${service || "Web Design"}</p>
    //       </div>
          
    //       <p><strong>What to Expect:</strong></p>
    //       <ul style="line-height: 1.6;">
    //         <li>A senior consultant will call you at your preferred time</li>
    //         <li>We'll discuss your project goals and challenges</li>
    //         <li>You'll receive an actionable launch roadmap</li>
    //         <li>Clear next steps specific to your project</li>
    //       </ul>
          
    //       <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
    //         <p><strong>📞 Important:</strong> We'll call you at <strong>${phone}</strong> during your selected time slot: <strong>${timePreference}</strong></p>
    //       </div>
          
    //       <p>If you need to reschedule or have any questions before the call, please reply to this email.</p>
          
    //       <p>Looking forward to helping you launch successfully! 🚀</p>
          
    //       <hr style="margin: 30px 0; border: 1px solid #eee;">
    //       <p style="color: #666; font-size: 12px;">
    //         This is an automated confirmation. Please save this email for your records.
    //       </p>
    //     </div>
    //   `,
    // });

    console.log("✅ Confirmation emails sent successfully");

    // ─────────────────────── SAVE TO SUPABASE ───────────────────────
    const { error } = await supabase
      .from("book_sessions")
      .insert({
        name,
        email,
        phone,
        service: service || "Web Design",
        time_preference: timePreference, // Note: different field name
        // created_at is auto-set by Supabase
      });

    if (error) {
      console.error("❌ Supabase insert error:", error);
      // Continue since email was successful
      console.log("⚠️ Lead was NOT saved to database, but emails were sent");
    } else {
      console.log("✅ Lead saved to book_sessions table");
    }

    return Response.json(
      { 
        success: true, 
        message: "Session booked successfully. We will call you at your preferred time." 
      },
      { status: 200 }
    );

  } catch (err: any) {
    console.error("Server error:", err?.message || err);
    return Response.json(
      { 
        success: false, 
        message: "Something went wrong. Please try again later." 
      },
      { status: 500 }
    );
  }
}