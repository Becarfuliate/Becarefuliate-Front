import axios from "axios";
//import { auxiliar } from "./Auxiliar";
const baseURL = "http://127.0.0.1:8000";

const fetchData = async () => {
  const result = await axios(baseURL + "/matchs");
  return result;
};

export default fetchData;
