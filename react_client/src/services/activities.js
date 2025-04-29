import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001/api/activities",
});

const getAll = async () => {
  const response = await client.get("/");
  return response.data;
};

const create = async (activity) => {
  const response = await client.post("/", activity);
  return response.data;
};

export { getAll, create };
