import axios from "axios";
import { ENDPOINT } from "../consts";

const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
});

export default request;