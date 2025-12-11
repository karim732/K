import axios from "axios";
import { LOGIN_API } from "./apiConstants";
const baseURL = "http://127.0.0.1:7000";
const genericAPI = async (obj) => {
  let response;
  let error;
  obj.url = baseURL + obj.url;
  obj.headers = { "Content-Type": "application/json" };
  try {
    response = await axios(obj);
  } catch (e) {
    error = e;
  }

  return { response: response?.data, error };
};
export const loginAPI = ({ body }) => {
  return genericAPI({
    url: LOGIN_API,
    method: "POST",
    data: body,
  });
};
