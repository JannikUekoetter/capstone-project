import create from "zustand";
import { lostItems as initialLostItems } from "../services/Db";
import { foundItems as initialFoundItems } from "../services/Db";

export const useStore = create((set) => ({
  lostItems: initialLostItems,

  addLostItem: (newLostItem) => {
    set((state) => {
      return { lostItems: [newLostItem, ...state.lostItems] };
    });
  },

  foundItems: initialFoundItems,

  addFoundItem: (newFoundItem) => {
    set((state) => {
      return { foundItems: [newFoundItem, ...state.foundItems] };
    });
  },
}));
