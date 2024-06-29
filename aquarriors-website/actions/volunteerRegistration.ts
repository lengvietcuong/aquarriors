"use server";

import { VolunteerFormData } from "@/utils/formSchemas";
import { isRecaptchaValid } from "./recaptcha";
import { addVolunteer } from "./firebaseFunctions";

export async function handleVolunteerRegistration(
  token: string | null,
  formData: VolunteerFormData,
) {
  if (await isRecaptchaValid(token)) {
    await addVolunteer(formData);
  } else {
    throw new Error("Recaptcha verification failed");
  }
}
