export async function postFile(file) {
    const response = await fetch('http://127.0.0.1:8080/files', {
        method: 'POST',
        body: JSON.stringify(file),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = new Error('An error occured while creating the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { files } = await response.json();

    return files;
}