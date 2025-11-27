import { apiRequest } from "./api";

export const authService = {
  login: async (email: string, password: string) => {
    return apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (email: string, password: string) => {
    return apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  getProfile: async () => {
    return apiRequest("/user/me", {
      method: "GET",
    });
  },
};
