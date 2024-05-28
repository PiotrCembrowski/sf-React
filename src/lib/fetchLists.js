import { address } from "./../utils/site_url";

export async function fetchLists() {
  const response = await fetch(`${address}fileslists`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occured while fetching the events.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { lists } = await response.json();

  return lists;
}
