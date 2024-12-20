"use server";

import { cookies } from "next/headers";

export async function authenticate(formData: FormData) {
  const password = formData.get("password");
  const correctPassword = process.env.PASSWORD;

  if (password === correctPassword) {
    // Set cookie with password
    cookies().set("auth", password as string, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      path: "/",
    });

    return { success: true };
  }

  return { success: false };
}

export async function logout() {
  // Unset the 'auth' cookie
  cookies().set("auth", "", {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });
}
