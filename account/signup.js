import {API} from '../api/api.js';
import { postBiasa } from '../api/postfunc.js';
import { getValue } from '../cookies/elements.js';

// Replace these values with your actual form data and API endpoint
// const apiUrl = 'https://asia-southeast2-gis-moni.cloudfunctions.net/berkatauto-signUp';
// const signUpForm = document.getElementById('signUpForm');
// const fullnameInput = document.getElementById('fullname');
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');
// const journalInput = document.getElementById('journal_bool');
// const submitButton = document.getElementById('submit');

export default function Register() {
  let fullname = getValue('fullname');
  let username = getValue('username');
  let password = getValue('password');
  let journal_bool = getValue('journal_bool');
  if (journal_bool === 'true') {
    journal_bool = true;
  } else {
    journal_bool = false;
  }
  if (fullname === '' || username === '' || password === '') {
    alert('Harap isikan semua form!');
    return;
  }
  let jsonExport = {
    "fullname": fullname,
    "username": username,
    "password": password,
    "journal_bool": journal_bool,
    "role": "user"
  };
  
  postBiasa(API.SignUp, jsonExport, responseHandler)
}

function responseHandler(result) {
  if (result.status === true) {
    alert('Sign Up Sukses! Sekarang kalian dapat login menggunakan akun yang kalian buat.')
    window.location.href = '../signin.html';
  } else {
    if (result.message === 'Username already exists') {
      alert('Username sudah digunakan! Coba lagi.');
    }
  }
}


// signUpForm.AddEventListener('submit', async (event) => {

// // Create a FormData object and append form data
// const signupObject = new signUpForm();
// for (const key in signUpForm) {
//   signupObject.append(key, signUpForm[key]);
// }

// // Use the fetch function to send the data to the API

// fetch(apiUrl, {
//   method: 'POST',
//   body: formDataObject,
// })
//   .then(response => response.json())
//   .then(data => {
//     if(data.status === true) {
//         window.location.href = './signin.html';
//     // Handle success response
//         alert('Sign Up Sukses! Sekarang kalian dapat login menggunakan akun yang kalian buat.')
//         document.getElementById('signupInformation').innerHTML = '<p>Sign Up Sukses! Sekarang kalian dapat login menggunakan akun yang kalian buat.</p>';
//         console.log('SignUp Sukses! Sekarang kalian dapat login menggunakan akun yang kalian buat.', data);
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle error
//   });
// }
// )
