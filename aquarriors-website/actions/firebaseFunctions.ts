"use server";

import firebaseAdmin from "firebase-admin";
import { DonationFormData } from "@/utils/formSchemas";
import { VolunteerFormData } from "@/utils/formSchemas";
import { volunteerEventDate } from "@/utils/constants";
import { db } from "@/lib/firebaseAdmin";

export async function addDonation(data: DonationFormData) {
  const donationsRef = db.collection("donations");
  const statsRef = db.collection("statistics").doc("donations");

  await db.runTransaction(async (transaction) => {
    // Get current statistics
    const statsDoc = await transaction.get(statsRef);
    const currentAmount = statsDoc.data()?.totalAmount || 0;
    const currentCount = statsDoc.data()?.totalCount || 0;

    // Add timestamp to donation record
    const newDonationData = {
      ...data,
      timestamp: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
    };

    // New statistics
    const newStatsData = {
      totalAmount: currentAmount + data.amount,
      totalCount: currentCount + 1,
    };

    transaction.set(donationsRef.doc(), newDonationData);
    transaction.set(statsRef, newStatsData, { merge: true }); // merge creates the document if it doesn't exist
  });
}

export async function addVolunteer(data: VolunteerFormData) {
  // The oldEnough field is not needed in the database
  const { oldEnough, ...volunteerInfo } = data;

  const volunteersRef = db
    .collection("volunteers")
    .doc(volunteerEventDate)
    .collection("registrations");

  const statsRef = db.collection("statistics").doc("volunteers");

  await db.runTransaction(async (transaction) => {
    // Get current statistics
    const statsDoc = await transaction.get(statsRef);
    const events = statsDoc.data()?.events || {};
    const currentCount = events[volunteerEventDate]?.totalRegistrations || 0;

    // New statistics
    const newEventsData = {
      ...events,
      [volunteerEventDate]: { totalRegistrations: currentCount + 1 },
    };
    const newStatsData = { events: newEventsData };

    transaction.set(volunteersRef.doc(), volunteerInfo);
    transaction.set(statsRef, newStatsData, { merge: true });
  });
}
