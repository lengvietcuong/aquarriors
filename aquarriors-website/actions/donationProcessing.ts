"use server";

import axios from "axios";
import { DonationFormData } from "@/utils/formSchemas";
import { addDonation } from "./firebaseFunctions";

const PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com";

export async function generateAccessToken() {
  const auth = Buffer.from(
    `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET_KEY}`,
  ).toString("base64");

  const response = await axios.post(
    `${PAYPAL_API_BASE}/v1/oauth2/token`,
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return response.data.access_token;
}

export async function handleMakeDonation(formData: DonationFormData) {
  const accessToken = await generateAccessToken();

  const response = await axios.post(
    `${PAYPAL_API_BASE}/v2/checkout/orders`,
    {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: formData.amount,
          },
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
}

export async function handleDonationComplete(formData: DonationFormData, orderId: string) {
  const accessToken = await generateAccessToken();

  const response = await axios.post(
    `${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );
  
  if (response.data.status === "COMPLETED") {
    formData.amount = Number(response.data.purchase_units[0].payments.captures[0].amount.value);
    await addDonation(formData);
  } else {
    throw new Error("Payment unsuccessful");
  }
}
