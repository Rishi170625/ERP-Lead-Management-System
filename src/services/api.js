import axios from "axios";

const api = axios.create({
  baseURL: "https://erp-lead-management-system.onrender.com",
});

export default api;