export async function uploadFile(attachment){

    console.log(attachment)
    const formData = new FormData();
    console.log(formData)
    formData.append('file', attachment)

    try {
        const result = await fetch('http://127.0.0.1:8080/files/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await result.json();
        console.log(data)
    } catch (error){
        console.error(error)
    }

}