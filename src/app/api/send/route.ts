import SenderEmailTemplate from "@/components/sender-email-template";
import { RateLimiterMemory } from "rate-limiter-flexible";
import type * as React from "react";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "../../../components/email-template";

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
});

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    try {
      await rateLimiter.consume(ip);
    } catch (rateLimitError) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const formData = await request.formData();
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    const validationResult = contactFormSchema.safeParse(rawData);
    if (!validationResult.success) {
      return Response.json(
        {
          error: "Validation failed",
          details: validationResult.error.format(),
        },
        { status: 400 },
      );
    }

    const { name, email, company, message } = validationResult.data;

    // Send email to company
    const companyEmailResult = await resend.emails.send({
      from: "Atik Import Export <info@atikimportexport.com>",
      to: "info@atikexp.com",
      replyTo: email,
      subject: "New Message from Atik Import Export",
      react: EmailTemplate({
        name,
        email,
        company,
        message,
      }) as React.ReactElement,
    });

    if (companyEmailResult.error) {
      console.error("Company email sending failed:", companyEmailResult.error);
      return Response.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    // Send confirmation email to sender
    const senderEmailResult = await resend.emails.send({
      from: "Atik Import Export <info@atikimportexport.com>",
      to: email,
      subject: "Thank you for contacting Atik Import Export",
      react: SenderEmailTemplate({
        name,
        company,
      }) as React.ReactElement,
    });

    if (senderEmailResult.error) {
      console.error("Sender email sending failed:", senderEmailResult.error);
      // We don't return an error here since the company email was sent successfully
      // But we log the error for monitoring
    }

    return Response.json({
      success: true,
      message: "Email sent successfully",
      data: {
        companyEmail: companyEmailResult.data,
        senderEmail: senderEmailResult.data,
      },
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return Response.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
