import { create } from "zustand";
import { combine } from "zustand/middleware";
import { User } from "@/types";

export interface EditUserSheetStore {
  user: User | undefined;
}

const initialState: EditUserSheetStore = {
  user: undefined,
};

export const useEditUserSheetStore = create(
  combine(initialState, (set) => ({
    close() {
      set({ user: undefined });
    },
    open(user: User) {
      set({ user });
    },
  })),
);
