export async function fetchView(data) {
  console.log(data);
  const [id, files] = data;
  const response = await fetch(`http://127.0.0.1:5000/views/${id}`, {
    method: "POST",
    body: JSON.stringify(files),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occured while fetching the view.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { view } = await response.json();

  return view;
}
