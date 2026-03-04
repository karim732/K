import axios from "axios";
import { LOGIN_API, REGISTER_API, LOGOUT_API } from "./apiConstants";
const baseURL = import.meta.env.VITE_BASE_URL;

const genericAPI = async (obj) => {
  let response;
  let error;
  obj.url = baseURL + obj.url;
  obj.headers = { "Content-Type": "application/json" };
  obj.withCredentials = obj?.withCredentials || true;
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

export const registerAPI = ({ body }) => {
  return genericAPI({
    url: REGISTER_API,
    method: "POST",
    data: body,
  });
};

export const logoutAPI = () => {
  return genericAPI({
    url: LOGOUT_API,
    method: "POST",
  });
};
