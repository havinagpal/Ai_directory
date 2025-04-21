import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Check if email already exists
    const existingSubscriber = await db.newsletterSubscriber.findUnique({
      where: { email },
    })

    if (existingSubscriber) {
      return NextResponse.json({ message: "You're already subscribed!" }, { status: 200 })
    }

    // Add new subscriber
    await db.newsletterSubscriber.create({
      data: { email },
    })

    // In a real app, you would also add the email to your newsletter service
    // like Mailchimp, ConvertKit, etc.

    return NextResponse.json({ message: "Successfully subscribed to the newsletter!" }, { status: 201 })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
