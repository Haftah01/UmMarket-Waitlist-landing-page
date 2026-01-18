import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/server-admin"

export async function POST(request: Request) {
  try {
    const { firstName, email, phone, interest } = await request.json()

    // Basic validation
    if (!firstName || firstName.length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (!interest) {
      return NextResponse.json({ error: "Interest selection is required" }, { status: 400 })
    }

    const supabase = await createAdminClient()

    const { data, error } = await supabase
      .from("waitlist")
      .insert({
        first_name: firstName,
        email: email.toLowerCase().trim(),
        phone: phone || null,
        interest,
      })
      .select()
      .single()

    if (error) {
      // Handle duplicate email error
      if (error.code === "23505") {
        return NextResponse.json({ error: "This email is already on the waitlist" }, { status: 409 })
      }
      console.error("[v0] Supabase error:", error.message)
      return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist",
      data: { firstName: data.first_name, email: data.email, interest: data.interest },
    })
  } catch (error) {
    console.error("[v0] Waitlist API error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
