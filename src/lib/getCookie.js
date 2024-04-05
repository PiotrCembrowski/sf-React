export function getCookie(cookie_name) {
    let name = cookie_name + '=';
    let decodeCookie = decodeURIComponent(document.cookie);
    let cookie_array = decodeCookie.split(';');
    for(let i=0; i < cookie_array.length; i++) {
        let cookie = cookie_array[i]
        while (cookie.charAt(0) == ' ') {
            let cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            console.log(cookie.substring(name.length, cookie.length));
            
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}