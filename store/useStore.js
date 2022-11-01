import create from "zustand";
import { lostItems as initialLostItems } from "../services/Db";

export const useStore = create((set) => ({
  lostItems: initialLostItems,

  addLostItem: (newLostItem) => {
    set((state) => {
      return { lostItems: [newLostItem, ...state.lostItems] };
    });
  },
}));
