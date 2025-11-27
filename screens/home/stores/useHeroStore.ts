"use client";

import { create } from "zustand";
import { fetchHeroStats } from "../services/homeService";
import type { HeroStat } from "../types";

type HeroStore = {
  stats: HeroStat[];
  isLoading: boolean;
  hydrate: () => Promise<void>;
};

const useHeroStore = create<HeroStore>((set) => ({
  stats: [],
  isLoading: false,
  hydrate: async () => {
    set({ isLoading: true });
    try {
      const stats = await fetchHeroStats();
      set({ stats });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useHeroStore;

