import { create } from "zustand";
import { combine } from "zustand/middleware";

export interface CreateUserSheetStore {
  isOpen: boolean;
}

const initialState: CreateUserSheetStore = {
  isOpen: false,
};

export const useCreateUserSheetStore = create(
  combine(initialState, (set) => ({
    close() {
      set({ isOpen: false });
    },
    open() {
      set({ isOpen: true });
    },
  })),
);
