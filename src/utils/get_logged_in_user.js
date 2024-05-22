import axios from "axios";

export async function check_user() {
  const { data } = await axios.get("http://127.0.0.1:5000/@me");
  return data;
}
