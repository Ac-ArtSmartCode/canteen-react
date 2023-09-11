import axios from "axios";

export const authentication = () => {
  axios.defaults.baseURL = "http://api_oh.udvc.ac.th/user";
  const loginApi = async (req = {}) => {
    return await axios.post("/login", req);
  };
  const registerApi = async (req = {}) => {
    return await axios.post("/register", req);
  };

  const getUserProfile = async () => {
    const apiKey = localStorage.getItem("token");
    axios.defaults.headers["Authorization"] = `Bearer ${apiKey}`;
    return await axios.get("/me");
  };

  return {
    loginApi,
    registerApi,
    getUserProfile,
  };
};
