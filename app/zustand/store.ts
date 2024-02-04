import { create } from "zustand";

export interface BearStore {
  bears: number;
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
}

export const useStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: (by) => set((state) => ({ bears: state.bears + by })),
  removeAllBears: () => set({ bears: 0 }),
}));
