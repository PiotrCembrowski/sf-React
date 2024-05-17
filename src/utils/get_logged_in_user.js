export async function check_user() {
  const response = await fetch("http://127.0.0.1:5000/api/user_log", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    const error = new Error("An error occured while fetching the events.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { userInfo } = await response.json();

  return userInfo;
}
