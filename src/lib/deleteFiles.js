export async function deleteFiles(id) {
    const response = await fetch(`http://127.0.0.1:8080/files/${id}`, {
        method: "DELETE",
      });

    if (!response.ok) {
        const error = new Error('An error occured while fetching the events.');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { files } = await response.json();

    return files;
}