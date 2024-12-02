import { create } from "zustand";
import { login } from "../actions/login";

type State = {
  status: string;
  token?: string;
};

type Action = {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const initialState: State = {
  status: localStorage.getItem("token") ? "authorized" : "unAuthorized",
  token: localStorage.getItem("token") || undefined,
};

export const useAuthStore = create<State & Action>()((set) => ({
  ...initialState,
  login: async (email: string, password: string) => {
    const response = await login(email, password);
    if (response) {
      localStorage.setItem("token", response.token);
      set({
        status: "authorized",
        token: response.token,
      });
      return true;
    } else {
      set(initialState);
      return false;
    }
  },
  logout: async () => {
    localStorage.removeItem("token");
    set({ status: "unAuthorized", token: undefined });
  },
}));
