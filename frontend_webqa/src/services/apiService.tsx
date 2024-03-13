import axios from "axios";

const BASE_URL = "https://t1.dataxet.co/api/";

export const getResponseWebQA = async (message: string) => {
  try {
    const response = await axios.post(`${BASE_URL}webqa`, { message });
    return response.data;
  } catch (error) {
    console.error("Error fetching response from WebQA API:", error);
    return null;
  }
};
