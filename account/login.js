import { postBiasa } from "../api/postfunc.js";
import { API } from "../api/api.js";
import { getValue } from "../cookies/elements.js";
import { Cookies } from "../cookies/cookie.js";

const loginProcess = document.getElementById('loginProcess');

export default function login() {
    let username = getValue('username');
    let password = getValue('password');
    if (username === '' || password === '') {
        alert('Username dan Password tidak valid! Silahkan Coba Lagi.');
        return;
    }
    postBiasa(API.SignIn, { username, password }, responseHandler);
}

function responseHandler(result) {
    if (result.status === true) {
        Cookies.setCookie(result.token);
        window.location.href = '../pages/dsb/dashboard.html';
    } else {
        if (result.message === 'Password is incorrect') {
        alert('Username dan Password tidak valid! Silahkan Coba Lagi.');
        }
    }
}

//Mengambil nilai dari elemen input pada HTML  
// const loginForm = document.getElementById("loginForm");
// const usernameInput = document.getElementById("username");
// const passwordInput = document.getElementById("password");
// const submitButton = document.getElementById("submit");
// const errorMessage = document.getElementById("error-message");

// //Fungsi untuk mengecek apakah form telah diisi dengan benar   
// const validation = () => {
//     const username = usernameInput.value;
//     const pass = passwordInput.value;
//     if (username !== "" && pass !== "") {
//         submitButton.disabled = false;
//     } else {
//         submitButton.disabled = true;
//     }
// };

// //Panggil fungsi validation saat input berubah  
// usernameInput.addEventListener("input", validation);
// passwordInput.addEventListener("input", validation);

// loginForm.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const username = usernameInput.value;
//     const password = passwordInput.value;

//     // Kirim permintaan HTTP POST ke server Golang (sesuaikan dengan URL yang benar)   
//     fetch("https://asia-southeast2-gis-moni.cloudfunctions.net/berkatauto-signIn", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ username, password })
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.status === true) {
//                 // Redirect user to user.html upon successful login
//                 window.location.href = "../pages/dsb/dashboard.html";
//             } else {
//                 // Handle failed login
//                 // window.location.href = "../pages/signin.html";
//                 // document.getElementById("loginInformation").innerHTML = "<p>Sign In Gagal! Coba lagi.</p>";
//                 errorMessage.textContent = "Userr not found"; // pesan kesalahan
//             }
//         })
//         .catch(error => {
//             console.error("Errorr:", error);
//         });
// });