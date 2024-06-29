import { cookies } from "next/headers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DonationDisplay from "@/types/donationDisplay";
import SmallFish from "@/components/icons/SmallFish";
import DolphinIcon from "@/components/icons/DolphinIcon";
import WhaleIcon from "@/components/icons/WhaleIcon";
import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/firebaseAdmin";
import { firestore } from "firebase-admin";
import { usdToVndRate } from "@/utils/constants";

function renderDonations(donations: DonationDisplay[]) {
  return (
    <ol className="divide-y divide-muted rounded-lg border">
      {donations.map((donation, index) => (
        <li key={index} className="flex px-3 py-4 md:p-6">
          {donation.amount < 100 ? (
            <div className="mr-3 flex size-12 items-center justify-center rounded-full bg-secondary/50 md:mr-4 md:size-16">
              <SmallFish className="size-6 self-center fill-foreground/50 md:size-10" />
            </div>
          ) : donation.amount < 1000 ? (
            <div className="mr-3 flex size-12 items-center justify-center rounded-full border border-muted-foreground/35 bg-secondary/25 md:mr-4 md:size-16">
              <DolphinIcon className="size-6 self-center fill-foreground/85 md:size-10 " />
            </div>
          ) : (
            <div className="mr-3 flex size-12 items-center justify-center rounded-full border border-primary bg-primary/10 md:mr-4 md:size-16 dark:bg-primary/15">
              <WhaleIcon className="size-6 self-center fill-foreground md:size-10" />
            </div>
          )}
          <div className="flex-1">
            <p className="text-lg font-semibold text-primary">
              {donation.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {donation.message}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-3 justify-self-end">
            <Badge className="ml-auto text-sm font-medium">
              {(donation.amount * usdToVndRate).toLocaleString()}đ
            </Badge>
            <p className="text-xs text-muted-foreground">
              {donation.timestamp}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function getDonationDisplay(doc: firestore.DocumentSnapshot): DonationDisplay {
  const data = doc.data();
  return {
    name: data?.name || "",
    amount: data?.amount || 0,
    timestamp:
      data?.timestamp.toDate().toLocaleString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "Asia/Ho_Chi_Minh",
      }) || "",
    message: data?.message || "",
  } as DonationDisplay;
}

async function Leaderboard() {
  async function fetchTopDonations() {
    "use server";

    cookies(); // Used to revalidate the cache
    const mostRecentDonationsPromise = db
      .collection("donations")
      .orderBy("timestamp", "desc")
      .limit(5)
      .get();
    const biggestDonationsPromise = db
      .collection("donations")
      .orderBy("amount", "desc")
      .limit(5)
      .get();

    const [mostRecentDonationsSnapshot, biggestDonationsSnapshot] =
      await Promise.all([mostRecentDonationsPromise, biggestDonationsPromise]);

    const mostRecentDonations =
      mostRecentDonationsSnapshot.docs.map(getDonationDisplay);
    const biggestDonations =
      biggestDonationsSnapshot.docs.map(getDonationDisplay);

    return { mostRecentDonations, biggestDonations };
  }

  const { mostRecentDonations, biggestDonations } = await fetchTopDonations();

  return (
    <Tabs defaultValue="most-recent" className="mx-auto max-w-screen-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="most-recent">Mới nhất</TabsTrigger>
        <TabsTrigger value="biggest">Lớn nhất</TabsTrigger>
      </TabsList>
      <TabsContent value="most-recent">
        {renderDonations(mostRecentDonations)}
      </TabsContent>
      <TabsContent value="biggest">
        {renderDonations(biggestDonations)}
      </TabsContent>
    </Tabs>
  );
}

export default Leaderboard;
