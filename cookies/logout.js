import {Cookies} from './cookie.js'

export default function logout() {

    Cookies.deleteCookie();
    
    window.location.href = location.origin + '/index.html';
}