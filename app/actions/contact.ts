"use server";

import { db } from "@/lib/firebase-admin";

export type ContactResult = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  formData: FormData
): Promise<ContactResult> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    await db.collection("contact_submissions").add({
      name,
      email,
      phone: phone || null,
      message,
      created_at: new Date().toISOString(),
      read: false,
    });
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again or call us directly.",
    };
  }
}
