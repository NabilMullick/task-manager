import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-ioq9.onrender.com/api",
  withCredentials: true,
});
export default api;
