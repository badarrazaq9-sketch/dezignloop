// app/api/lead-popup/route.ts
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
    const { fullName, email, phone, service, budget, timePreference } = await req.json();

    // Validation - only require name and email
    if (!fullName || !email) {
      console.log("❌ Missing required fields");
      return Response.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    console.log("📨 Lead popup request:", {
      fullName,
      email,
      phone,
      service,
      budget,
      timePreference,
    });

    // ── EMAIL CONFIGURATION ────────────────────────────────────────
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("❌ Email credentials missing in environment");
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

    // 1. ADMIN NOTIFICATION EMAIL (to you)
    await transporter.sendMail({
      from: `"DezignLoop Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎯 NEW LEAD: Free Audit Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa; border-radius: 10px;">
          <h2 style="color: #1C9FF0; margin-bottom: 25px;">🎯 New Digital Growth Audit Request</h2>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <h3 style="margin-top: 0; color: #333;">Lead Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666; width: 160px;">👤 Full Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">📧 Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  <a href="mailto:${email}" style="color: #1C9FF0; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">📱 Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  ${phone ? `<a href="tel:${phone}" style="color: #333; text-decoration: none;">${phone}</a>` : "—"}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">🛠️ Service Interest:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${service || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">💰 Budget Range:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${budget || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">⏰ Preferred Time:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  <strong style="color: #1C9FF0;">${timePreference || "Not specified"}</strong>
                </td>
              </tr>
            </table>
          </div>

          <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; border-left: 4px solid #1C9FF0; margin-bottom: 20px;">
            <p style="margin: 0; font-weight: bold; color: #333;">📋 Next Steps Required:</p>
            <ol style="margin: 10px 0 0 0; padding-left: 20px;">
              <li>Contact within <strong>24 hours</strong> to schedule audit</li>
              <li>Call preferred time: <strong>${timePreference || "Flexible"}</strong></li>
              <li>Prepare digital audit template for ${service || "general"} service</li>
            </ol>
          </div>

          <div style="text-align: center; padding: 15px; background: #1C9FF0; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px;">
              Lead received from website popup • ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    console.log("✅ Admin notification sent");

    // 2. CLIENT CONFIRMATION EMAIL (to the lead)
    await transporter.sendMail({
      from: `"DezignLoop" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Your Free Digital Growth Audit Request - Confirmed",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1C9FF0; margin-bottom: 10px;">✅ Thank You, ${fullName}!</h1>
            <p style="color: #666; font-size: 18px; font-weight: bold;">
              Your Free Digital Growth Audit Request is Confirmed
            </p>
          </div>

          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">📋 Request Summary</h3>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
              <div style="background: white; padding: 15px; border-radius: 8px;">
                <p style="margin: 0 0 5px 0; font-size: 12px; color: #666; text-transform: uppercase; font-weight: bold;">Name</p>
                <p style="margin: 0; font-size: 16px; font-weight: bold; color: #333;">${fullName}</p>
              </div>
              
              <div style="background: white; padding: 15px; border-radius: 8px;">
                <p style="margin: 0 0 5px 0; font-size: 12px; color: #666; text-transform: uppercase; font-weight: bold;">Service</p>
                <p style="margin: 0; font-size: 16px; font-weight: bold; color: #333;">${service || "General Consultation"}</p>
              </div>
              
              ${timePreference ? `
              <div style="background: white; padding: 15px; border-radius: 8px;">
                <p style="margin: 0 0 5px 0; font-size: 12px; color: #666; text-transform: uppercase; font-weight: bold;">Preferred Time</p>
                <p style="margin: 0; font-size: 16px; font-weight: bold; color: #1C9FF0;">${timePreference}</p>
              </div>
              ` : ''}
              
              ${budget ? `
              <div style="background: white; padding: 15px; border-radius: 8px;">
                <p style="margin: 0 0 5px 0; font-size: 12px; color: #666; text-transform: uppercase; font-weight: bold;">Budget Range</p>
                <p style="margin: 0; font-size: 16px; font-weight: bold; color: #333;">${budget}</p>
              </div>
              ` : ''}
            </div>
          </div>

          <div style="background: #e8f4fd; padding: 20px; border-radius: 10px; margin-bottom: 30px; border-left: 4px solid #1C9FF0;">
            <h3 style="margin-top: 0; color: #333;">🎯 What Happens Next</h3>
            <ol style="margin: 15px 0 0 0; padding-left: 20px; line-height: 1.8;">
              <li><strong>Within 24 hours:</strong> Our team will contact you to schedule your audit</li>
              <li><strong>Audit preparation:</strong> We'll analyze your current digital presence</li>
              <li><strong>1-on-1 session:</strong> 30-minute deep dive with a senior consultant</li>
              <li><strong>Actionable roadmap:</strong> Clear steps for growth and improvement</li>
              <li><strong>No obligation:</strong> Zero pressure to work with us afterward</li>
            </ol>
          </div>

          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin-bottom: 5px;">
              Need to update your request or have questions?
            </p>
            <p style="margin: 0;">
              <a href="mailto:${process.env.EMAIL_USER}" style="color: #1C9FF0; font-weight: bold; text-decoration: none;">
                Reply to this email
              </a>
            </p>
          </div>

          <div style="margin-top: 30px; padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #999;">
              This is an automated confirmation. Your information is secure and confidential.
            </p>
          </div>
        </div>
      `,
    });

    console.log("✅ Client confirmation sent");

    // ── SAVE TO SUPABASE ────────────────────────────────────────────
    const { error } = await supabase.from("popup_leads").insert({
      name: fullName,
      email,
      phone: phone || null,
      service: service || null,
      budget: budget || null,
      time_preference: timePreference || null,
      // created_at is auto-set by Supabase
    });

    if (error) {
      console.error("❌ Supabase insert error:", error.message);
      console.log("⚠️ Lead was NOT saved to database (but emails were sent)");
      // Continue anyway since emails succeeded
    } else {
      console.log("✅ Lead saved to popup_leads table");
    }

    return Response.json(
      {
        success: true,
        message: "Thank you! Our team will reach out soon to schedule your audit.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Server error:", error?.message || error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}