"use server"
// A Server component & server action

import { SignInFormSchema, SignInFormState } from "@/app/lib/defination"
import { redirect } from "next/navigation";
 
export async function signin(state: SignInFormState, formData: FormData) {
    
  // Validate form fields
  const validatedFields = SignInFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Call the provider or db to create a user...
  redirect("/dashboard")
}
