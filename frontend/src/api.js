import axios from "axios";

const api = axios.create({
  baseURL: "https://backend.sharqawi.dev",
});

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const createUser = async (firstName, lastName) => {
  const response = await api.post("/user", { firstName, lastName });
  return response.data;
};
