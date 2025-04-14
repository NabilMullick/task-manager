import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ✅ this reads from your .env file
  withCredentials: true,
});
export default api;
