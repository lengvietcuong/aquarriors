import { create } from 'zustand';

type VolunteerFormStore = {
    isVolunteerFormOpen: boolean;
    setIsVolunteerFormOpen: (isVolunteerFormOpen: boolean) => void;
};

const useVolunteerFormStore = create<VolunteerFormStore>((set) => ({
    isVolunteerFormOpen: false,
    setIsVolunteerFormOpen: (isVolunteerFormOpen) => set({ isVolunteerFormOpen }),
}));

export default useVolunteerFormStore;