import axios from "axios";
import { address } from "./../utils/site_url";

export async function check_user() {
  const { data } = await axios.get(`${address}@me`);
  return data;
}
