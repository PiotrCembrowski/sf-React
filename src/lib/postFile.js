export async function postFile(data) {
  const response = await fetch("http://127.0.0.1:5000/files", {
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
