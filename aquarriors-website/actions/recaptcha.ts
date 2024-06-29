"use server";

import axios from "axios";

export async function isRecaptchaValid(token: string | null) {
  const result = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  );
  return result.data.success;
}