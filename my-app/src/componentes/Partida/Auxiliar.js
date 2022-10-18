import axios from "axios";
//import { auxiliar } from "./Auxiliar";
const baseURL = "http://127.0.0.1:8000";

let user = JSON.parse(localStorage.getItem("user"));

const fetchData = async () => {
  const result = await axios(baseURL + `/matchs?token=${user.token}`);
  return result;
};

export default fetchData;
