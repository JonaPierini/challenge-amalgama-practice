import { baseApi } from "../config/baseApi";

export interface AuthResponse {
  token: string;
}

export const login = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const response = await baseApi.post<AuthResponse>("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};
