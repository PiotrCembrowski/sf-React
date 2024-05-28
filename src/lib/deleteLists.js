import { address } from "./../utils/site_url";

export async function deleteLists(id) {
  const response = await fetch(`${address}fileslists/${id}`, {
    method: "DELETE",
    credentials: "include",
  })
    .then((response) => {
      console.log(response.status);
    })
    .catch((err) => {
      console.log(err.message);
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
