import { cookies } from "next/headers";
import { FaUserGroup as PeopleIcon } from "react-icons/fa6";
import { FaDonate as DonationIcon } from "react-icons/fa";
import { RiDeleteBin2Fill as TrashcanIcon } from "react-icons/ri";
import { db } from "@/lib/firebaseAdmin";
import { usdToVndRate } from "@/utils/constants";

async function Progress() {
  async function fetchDonationStats() {
    "use server";

    cookies(); // Used to revalidate the cache
    const donationStats = (
      await db.collection("statistics").doc("donations").get()
    ).data();
    const totalCount = donationStats?.totalCount || 0;
    const totalAmount = donationStats?.totalAmount || 0;

    return { totalCount, totalAmount };
  }

  const { totalCount, totalAmount } = await fetchDonationStats();

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4 lg:flex-col">
      <div className="flex flex-1 items-center justify-center rounded-lg border p-8">
        <PeopleIcon className="mr-2 size-12 fill-primary md:mr-3 lg:mr-4" />
        <p>
          <span className="font-heading text-2xl font-bold lg:text-4xl">
            {totalCount.toLocaleString()}
          </span>
          <br />
          <span className="text-muted-foreground">lượt quyên góp</span>
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-lg border p-8">
        <DonationIcon className="mr-2 size-12 fill-primary md:mr-3 lg:mr-4" />
        <p>
          <span className="font-heading text-2xl font-bold lg:text-4xl">
            {(totalAmount * usdToVndRate / 1_000_000).toLocaleString()}Tr
          </span>
          <br />
          <span className="text-muted-foreground">đã nhận</span>
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-lg border p-8">
        <TrashcanIcon className="mr-2 size-12 fill-primary md:mr-3 lg:mr-4" />
        <p>
          <span className="font-heading text-2xl font-bold lg:text-4xl">
            {(50000).toLocaleString()}kg
          </span>
          <br />
          <span className="text-muted-foreground">rác đã được dọn</span>
        </p>
      </div>
    </div>
  );
}

export default Progress;
