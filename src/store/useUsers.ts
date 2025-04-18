import { create } from "zustand";
import { supabaseClient } from "../providers/supabaseClient";

import { IUsersState } from "../types";

export const useUsers = create<IUsersState>((set) => {
  return {
    users: [],
    loading: false,
    error: null,
    getAllUsers: async () => {
      set({ loading: true });

      const { data, error } = await supabaseClient.from("users").select().eq('id', 1);

      if (error) {
        set({ error: error.message, loading: false });
      }
      set({users: data})
      console.log(data);
    },
  };
});
