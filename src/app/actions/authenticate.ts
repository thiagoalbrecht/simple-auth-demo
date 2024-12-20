"use server";

/*
This is not a secure way to authenticate users. 
Never do this in real life (setting a cookie with the password)
*/

import { cookies } from "next/headers";

export async function authenticate(password: string) {
  /*
    This function is used to authenticate the user.
    It receives a password from the form submission.
    If the password is correct, it sets a cookie with the password.
    */
  const correctPassword = process.env.PASSWORD;

  if (password === correctPassword) {
    // Set cookie with password
    const requestCookies = await cookies();
    requestCookies.set("auth", password as string, {
      secure: process.env.NODE_ENV === "production", // Set 'secure' (HTTPS) to true in production. In development (localhost), it's false bc we don't have HTTPS
      httpOnly: true,
      path: "/",
    });

    return { success: true };
  }

  return { success: false };
}

export async function isLoggedIn() {
  const requestCookies = await cookies();
  const authCookie = requestCookies.get("auth");

  if (authCookie?.value === process.env.PASSWORD) {
    return true;
  }

  return false;
}

export async function unsetCookie() {
  // Unset the 'auth' cookie for logout
  const requestCookies = await cookies();
  requestCookies.set("auth", "", {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });
}
