import {create} from "zustand";

import {supabaseClient} from "../providers/supabaseClient.ts";
import {IAuthState} from "../types.ts";

export const useAuth = create<IAuthState>((set) => ({
    session: null,
    user: null,
    role: null,
    loading: false,
    error: null,
    signInAuth: async ({email, password}) => {
        set({loading: true});

        const {data, error} = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            set({loading: false});
            throw error;
        }
        set({
            session: data.session,
            user: data.session?.user,
            role: data.session?.user.app_metadata?.role,
            loading: false,
        });
    },

    signUpAuth: async ({email, password}) => {
        set({loading: true});

        const {data, error} = await supabaseClient.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            set({error: error.message, loading: false});
        }

        set({
            session: data.session,
            user: data.session?.user,
            role: data.session?.user.app_metadata?.role,
            loading: false,
        });
    },
    getSession: async () => {
        set({loading: true});

        const {data, error} = await supabaseClient.auth.getSession();
        if (error) {
            set({error: error.message, loading: false});
            throw error;
        }
        set({
            session: data.session,
            user: data.session?.user,
            role: data.session?.user.app_metadata?.role,
            loading: false,
        });
    },
    getAllUsers: async () => {
        set({loading: true});

        const {data, error} = await supabaseClient
            .schema("auth")
            .from("users")
            .select();

        if (error) {
            set({error: error.message, loading: false});
        }

        console.log(data);
    },
    logout: async () => {
        await supabaseClient.auth.signOut();
    }
}));
