import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api/";

export const getResponseWebQA = async (message: string) => {
  try {
    const response = await axios.post(`${BASE_URL}webqa`, { message });
    console.log("====================================");
    console.log({ response });
    console.log("====================================");
    return response.data;
  } catch (error) {
    console.error("Error fetching response from WebQA API:", error);
    return null;
  }
};
