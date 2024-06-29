import { create } from 'zustand';

type DonationFormStore = {
    isDonationFormOpen: boolean;
    setIsDonationFormOpen: (isDonationFormOpen: boolean) => void;
};

const useDonationFormStore = create<DonationFormStore>((set) => ({
    isDonationFormOpen: false,
    setIsDonationFormOpen: (isDonationFormOpen) => set({ isDonationFormOpen }),
}));

export default useDonationFormStore;