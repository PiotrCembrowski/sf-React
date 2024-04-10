export async function uploadFile(attachment){

    const formData = new FormData();

    formData.append('file', attachment)

    try {
        const result = await fetch('http://127.0.0.1:5000/files/upload', {
            method: 'POST',
            body: formData,
            credentials: 'include',
        });
        const data = await result.json();
        console.log(data)
    } catch (error){
        console.error(error)
    }

}