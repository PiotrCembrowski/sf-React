import { getCookie } from "./getCookie"

export function checkCookie() {
    let username = getCookie("oauthstate")
    if (username != "") {
        return alert("welcome again" + username)
    } else {
        return console.log("please log in")
    }
}