import { address } from "./../utils/site_url";

export async function postFile(data) {
  const response = await fetch(`${address}files`, {
    method: "POST",
    body: data,
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occured while creating the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { files } = await response.json();
  console.log(files);
  return files;
}
