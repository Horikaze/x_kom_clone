import { create } from "zustand";

type Search = {
  status: boolean;
  change: (f: boolean) => void;
};

export const useSearch = create<Search>()((set) => ({
  status: false,
  change: (f) => set({ status: f }),
}));
