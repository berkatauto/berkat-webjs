import { getCookie, deleteCookie } from "../cookies/cookie.js";
import { API } from "../api/api.js";

const adminAuthorization = document.getElementById('adminAuthorization');
const userAuthorization = document.getElementById('userAuthorization');
const authorAuthorization = document.getElementById('authorAuthorization');

export default function Authorization() { 
    const token = getCookie('token');
    const headers = new Headers();
    headers.append('token', token);
    const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };

    return fetch(API.Authorization, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error(`http error status: ${response.statusText}`);
        }
        return response.json();
    })
    .then(result => {
        handleAuthorizationResult(result);
        return result;
    })
    .catch(error => {
        console.log('error', error);
        throw error;
        });
};

function handleAuthorizationResult(result) {
    const userData = data.data
    const role = userData.role
    const journalStatus = userData.journal_bool

    if (result.status === true) {

        if (adminAuthorization && role != 'admin') {
            handleAuthorizationError('You are not authorized to access this page');
        }
        if (userAuthorization && (journalStatus != 'true' && role != 'admin')) {
            handleAuthorizationError('You are not authorized to access this page');
        }
        
    } else if (result.status === false) {
        handleAuthorizationError('User not logged in, Invalid Data.');
    }
}

function handleAuthorizationError(error) {
    console.log('error', error);
    alert(error)
    deleteCookie('token');
    window.location.href = location.origin + '../signin.html';
}