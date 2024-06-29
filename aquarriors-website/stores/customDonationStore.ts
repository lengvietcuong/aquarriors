import { create } from "zustand";

type CustomDonationStore = {
  customDonationAmount: number | null;
  setCustomDonationAmount: (customDonationAmount: number | null) => void;
};

const useCustomDonationStore = create<CustomDonationStore>((set) => ({
  customDonationAmount: null,
  setCustomDonationAmount: (customDonationAmount) =>
    set({ customDonationAmount }),
}));

export default useCustomDonationStore;
