import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

export const sgCongeladosApi = axios.create({
  baseURL,
});
