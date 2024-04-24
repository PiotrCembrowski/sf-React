export async function fetchView() {
    const response = await fetch('http://127.0.0.1:5000/view',{
        method: 'GET',
        credentials: 'include',
    });

    if (!response.ok) {
        const error = new Error('An error occured while fetching the view.');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { view } = await response.json();

    return view;
}