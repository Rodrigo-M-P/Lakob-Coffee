"use server"

import { getSupabaseClient } from "@/lib/supabase"
import { z } from "zod"

// Define a schema for email validation
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Get the email from the form data
    const email = formData.get("email") as string

    console.log("Attempting to subscribe email:", email)

    // Validate the email
    const result = emailSchema.safeParse({ email })

    if (!result.success) {
      console.log("Email validation failed:", result.error.errors)
      return {
        success: false,
        message: result.error.errors[0].message,
      }
    }

    // Get the Supabase client
    const supabase = getSupabaseClient()

    // Check if Supabase client is available
    if (!supabase) {
      console.error("Supabase client not available")
      return {
        success: false,
        message: "Service temporarily unavailable. Please try again later.",
      }
    }

    // Check if the email already exists in the database
    const { data: existingSubscriber, error: checkError } = await supabase
      .from("subscribers")
      .select("*")
      .eq("email", email)
      .single()

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Error checking for existing subscriber:", checkError)
      return {
        success: false,
        message: "There was an error checking your subscription status. Please try again.",
      }
    }

    if (existingSubscriber) {
      console.log("Email already subscribed:", email)
      return {
        success: false,
        message: "This email is already subscribed to our newsletter.",
      }
    }

    // Insert the email into the Supabase table - simplified to only include email
    // The subscribed_at will be set by default in the database
    const { error: insertError } = await supabase.from("subscribers").insert([{ email }])

    if (insertError) {
      console.error("Error inserting subscriber:", insertError)
      return {
        success: false,
        message: `There was an error subscribing to the newsletter: ${insertError.message}`,
      }
    }

    console.log("Successfully subscribed email:", email)
    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error) {
    console.error("Subscription error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
