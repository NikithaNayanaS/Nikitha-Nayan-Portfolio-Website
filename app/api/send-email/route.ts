import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, contact, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailContent = `
Name: ${name}
Contact: ${contact || "Not provided"}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: "nikithanayana651@gmail.com",
        subject: `New Portfolio Contact: ${subject}`,
        html: `
          <h2>New Message from Your Portfolio</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Contact:</strong> ${contact || "Not provided"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    })

    if (!resendResponse.ok) {
      console.error("[v0] Resend API error:", await resendResponse.text())
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Email route error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
