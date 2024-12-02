import axios from "axios";

const baseApi = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

baseApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-token"] = token;
  }
  return config;
});

export { baseApi };
